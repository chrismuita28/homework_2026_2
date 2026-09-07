'use strict';

/**
 * Функция, возвращающая факториал числа
 * @param {number} n - целое число
 * 
 * @example
 * // returns 120
 * factorial(5);
 * 
 * @returns {number}
 */

function factorial(n) {
    if (typeof n !== "number" || Number.isNaN(n)) throw new Error("Аргумент должен быть числом");
    if (!Number.isInteger(n)) throw new Error("Факториал определен только для целых чисел");
    if (n < 0) throw new Error("Факториал не определен для отрицательных чисел");
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++)
        res *= i;
    return res;
}
