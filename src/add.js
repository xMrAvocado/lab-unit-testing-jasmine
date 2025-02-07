function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    if (numOne != "number" || numTwo != "number" ) {
        return undefined;
    }
    let sum = numOne + numTwo;
    return sum;
}