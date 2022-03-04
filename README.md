# homework39

Вам нужно написать функцию DeepFreeze, которая принимает объект и замораживает его и все вложенные в него объекты.
Пишем функцию, которая перебирает свойства объекта и «замораживает» все объекты, которые ей попадаются, включая исходный:

Подсказки: заморозить, означает сделать так, чтобы объект нельзя было изменять.

Ссылки:
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
https://learn.javascript.ru/recursion

Example

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}
