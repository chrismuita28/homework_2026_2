'use strict';

/**
 * Функция, возвращающая факториал числа
 * В случае нечисловых входных данных возвращает NaN
 * В случае неккоректных числовых входных данных возвращает null
 * 
 * @param {number} n - целое число
 * 
 * @example
 * // returns 120
 * factorial(5);
 * 
 * @returns {number}
 */
const factorial = (() => {
    const cache = [1, 1];

    return (n) => {
        if (typeof n !== 'number' || Number.isNaN(n)) {
            return NaN;
        }

        if (!Number.isInteger(n) || n < 0) {
            return null;
        }

        if (n === 0 || n === 1) {
            return 1;
        }
        

        if (cache[n] !== undefined) {
            return cache[n];
        }

        let res = cache[cache.length - 1];
        for (let i = cache.length; i <= n; i++) {
            res *= i;
            cache[i] = res;
        }

        return res;
    };
})();
