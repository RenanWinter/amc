

export const inArray = <T = any>(array: T[], value: T): boolean => {
    return array.includes(value);
}

export const notInArray = <T = any>(array: T[], value: T): boolean => {
    return !array.includes(value);
}

export const arraySetItemIndex = <T = any>(array: T[], item: T, newIndex: number) => {
    const lastIndex = array.length - 1;
    newIndex = newIndex > lastIndex ? lastIndex : newIndex;

    const currentIndex = array.indexOf(item);
    if (currentIndex <= -1) {
        return null;
    }

    //clone the array;
    let newArray = [...array];
    const newElement = newArray.splice(currentIndex, 1);
    newArray.splice(newIndex, 0, ...newElement);


    return newArray;
}

export const arrayGetLastElement = <T = any>(array: T[]) => {
    return array[array.length - 1];
}

export const arrayMoveItemBackward = <T = any>(array: T[], item: T) => {
    const currentIndex = array.indexOf(item);
    if (currentIndex <= 0) {
        throw new Error('Item not found in array');
    }


    if (currentIndex == 0) {
        return [...array];
    }

    return arraySetItemIndex(array, item, currentIndex - 1);
}

export const arrayMoveItemForward = <T = any>(array: T[], item: T) => {
    const currentIndex = array.indexOf(item);
    if (currentIndex <= 0) {
        throw new Error('Item not found in array');
    }

    if (currentIndex >= array.length - 1) {
        return [...array];
    }

    return arraySetItemIndex(array, item, currentIndex + 1);
}
