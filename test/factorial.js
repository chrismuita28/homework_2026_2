'use strict';

QUnit.module('Тестируем функцию factorial', () => {
    QUnit.test('Факториал 0 должен быть 1', (assert) => {
        assert.strictEqual(factorial(0), 1, '0! = 1');
    });

    QUnit.test('Факториал 5 должен быть 120', (assert) => {
        assert.strictEqual(factorial(5), 120, '5! = 120');
    });

    QUnit.test('Факториал для отрицательного числа должен выбрасывать ошибку', (assert) => {
        assert.strictEqual(factorial(-1), null, 'Возвращает null для -1');
    });

    QUnit.test("Факториал дробного числа должен выбрасывать ошибку", (assert) => {
        assert.strictEqual(factorial(2.5), null, 'Возвращает null для 2.5');
    });

    QUnit.test("Факториал строки должен выбрасывать ошибку", (assert) => {
        assert.true(Number.isNaN(factorial("строка")), 'Возвращает NaN для строки');
    });
});
