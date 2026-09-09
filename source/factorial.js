'use strict';

/**
 * Функция, возвращающая факториал числа
 * В случае некорректных входных данных возвращает NaN.
 * @param {number} n - целое число
 * 
 * @example
 * // returns 120
 * factorial(5);
 * 
 * @returns {number}
 */

const factorial = (n) => {
    if (typeof n !== 'number' || Number.isNaN(n) || !Number.isInteger(n) || n < 0) return NaN;

    if (n === 0 || n === 1) return 1;

    let res = 1;
    for (let i = 2; i <= n; i++)
        res *= i;
    return res;
}
