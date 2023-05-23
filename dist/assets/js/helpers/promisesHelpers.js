export function throwError(value) {
    if (value instanceof TypeError) {
        let message = JSON.stringify(value);
        throw new TypeError(message);
    }
    else if (value instanceof RangeError) {
        let message = JSON.stringify(value);
        throw new RangeError(message);
    }
    else {
        throw new Error(value);
    }
}
