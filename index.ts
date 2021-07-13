/**
 *  Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.
 *  Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.
 * 
 * Example PsuedoCode
 *  groupArrayElements([​1​, ​2​, ​3​, ​4,​ ​5​], ​3​);
 *  => [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
 */

/**
 * Function for splitting an array into groups of arrays of equal length.
 * Note that the last array may be shorter than the others if the array length does not divide exactly by n
 * @param arr The original array that will be divided into sub arrays
 * @param numberOfArrays The amount of arrays to be returned by the function
 * @returns A division of arrays of length n
 */
 export function groupArrayElements<T>(array: Array<T>, n: number): Array<Array<T>> {
    if (n > array.length) {
        // No info in the challenge on this edge case but its either this or divide the array into sub arrays of length 1
        throw new Error(`Can not divide the array into a length longer than its length of ${array.length}`)
    }

    const arr: Array<Array<T>> = new Array();

    const len = Math.ceil(array.length / n);

    for (let index = 0; index < n; index++) {
        arr.push(array.splice(0, len))
    }

    return arr
}