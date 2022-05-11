
export const numberIsInArray = (array: any[], number: number): boolean => {
    return array.includes(number);
}

export const numberIsEven = (number: number): boolean => {
    return number % 2 == 0
}

export const numberIsOdd = (number: number): boolean => {
    return !numberIsEven(number);
}


