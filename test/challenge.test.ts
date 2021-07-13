import { groupArrayElements } from './../index';

describe('groupArrayElements', () => {
    test('Test 1', () => {
        expect(
            groupArrayElements([1, 2, 3, 4, 5,], 5)
        ).toStrictEqual(
            [[1], [2], [3], [4], [5]]
        )
    });

    test('Test 2', () => {
        expect(
            groupArrayElements([1, 2, 3, 4], 3)
        ).toStrictEqual(
            [[1, 2], [3, 4], []]
        )
    });

    test('Test 3', () => {
        expect(
            groupArrayElements(['a', 'b', 'c', 'd', 'e'], 5)
        ).toStrictEqual(
            [['a'], ['b'], ['c'], ['d'], ['e']]
        )
    })
    test('Test 4', () => {
        expect(
            groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)
        ).toStrictEqual(
            [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
        )
    })
    test('Test 5', () => {
        expect(
            groupArrayElements([1, 2, 3, 4, 5, 6, 7], 2)
        ).toStrictEqual(
            [[1, 2, 3, 4], [5, 6, 7]]
        )
    })
    test('Test 6', () => {
        expect(
            groupArrayElements([1, 2, 3, 4, 5], 3)
        ).toStrictEqual(
            [[1, 2], [3, 4], [5]]
        )
    })
    test('Test 7', () => {
        expect(
            groupArrayElements([1, 5, 6, 90, 11, 13, 12, -5, 100, -100, 0], 3)
        ).toStrictEqual(
            [[1, 5, 6, 90], [11, 13, 12, -5], [100, -100, 0]]
        )
    })
})