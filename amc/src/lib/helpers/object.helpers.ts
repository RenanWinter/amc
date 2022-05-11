interface DeepChangesOptions {
    skipNullsOnChangedObject?: boolean,
    skipRemovedFields?: boolean,
    ignoreKeys?: string[]
}

export const deepChanges = <T = any>(original: any, changed: any, options?: DeepChangesOptions): Partial<T> => {
    let diffs: { [index: string]: any } = {};
    let key;
    let _options: DeepChangesOptions = {
        skipRemovedFields: false,
        skipNullsOnChangedObject: false,
        ignoreKeys: []
    };

    if (options) {
        Object.assign(options, _options);
    }

    const { ignoreKeys = [] } = _options

    if (!changed || Object.prototype.toString.call(changed) !== '[object Object]') {
        return original;
    }


    //#region Methods


    const arraysMatch = function (arr1: [], arr2: []) {

        // Check if the arrays are the same length
        if (arr1.length !== arr2.length) return false;

        // Check if all items exist and are in the same order
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }

        // Otherwise, return true
        return true;

    };

    const compare = function (item1: any, item2: any, key: string) {

        // Get the object type
        const type1 = Object.prototype.toString.call(item1);
        const type2 = Object.prototype.toString.call(item2);

        // If type2 is undefined it has been removed
        if (type2 === '[object Undefined]') {
            if (_options.skipRemovedFields) {
                return;
            }
            diffs[key] = null;
            return;
        }

        if (_options.skipNullsOnChangedObject && (item2 === null)) {
            return;
        }

        // If items are different types
        if (type1 !== type2) {
            diffs[key] = item2;
            return;
        }

        // If an object, compare recursively
        if (type1 === '[object Object]') {
            const objDiff = deepChanges(item1, item2, _options);
            if (Object.keys(objDiff).length > 0) {
                diffs[key] = objDiff;
            }
            return;
        }

        // If an array, compare
        if (type1 === '[object Array]') {
            if (!arraysMatch(item1 as any, item2 as any)) {
                diffs[key] = item2;
            }
            return;
        }

        // Else if it's a function, convert to a string and compare
        // Otherwise, just compare
        if (type1 === '[object Function]') {
            if ((item1 as any).toString() !== item2.toString()) {
                diffs[key] = item2;
            }
        } else {
            if (item1 !== item2) {
                diffs[key] = item2;
            }
        }

    };

    //#endregion


    // Compare our objects

    // Loop through the first object
    for (key in original) {
        if (ignoreKeys.includes(key)) {
            continue;
        }

        if ((original as Object).hasOwnProperty(key)) {
            const n1 = original[key];
            compare(n1, changed[key], key);
        }
    }

    // Loop through the second object and find missing items
    for (key in changed) {
        if (ignoreKeys.includes(key)) {
            continue;
        }
        if (changed.hasOwnProperty(key)) {
            if (!original[key] && original[key] !== changed[key]) {
                diffs[key] = changed[key];
            }
        }
    }

    // Return the object of differences
    return diffs as Partial<T>;
}