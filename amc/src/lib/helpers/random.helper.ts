

export const randomicIntegerBetween = (initial: number, final: number, ignore?: number[]): number => {
    if (!ignore) { ignore = []; }
    const execute = (_from: number, _to: number) => {
        return Math.floor(Math.random() * (_to - _from + 1) + _from);
    };

    let sortedNumber = execute(initial, final);
    while (ignore.includes(sortedNumber)) {
        sortedNumber = execute(initial, final);
    }
    return sortedNumber;
}
