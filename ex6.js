const isArrayElementsEqual = arr =>
    arr.every(i => i === arr[0])

const exercise6 = () =>
    document.getElementById("output").innerHTML = 'Решение\nconst isArrayElementsEqual = arr =>\n' +
        '    arr.every(i => i === arr[0])\n'

const arrayOfThree = [3, 3, 3, 3, 3, 3, 3, 3, 3]
const arrayOfFive = [5, 5, '5', 5, 5, 5, 5]

console.log(isArrayElementsEqual(arrayOfThree)) // true
console.log(isArrayElementsEqual(arrayOfFive)) // false


const ex6 = () => {
    document.getElementById("output").innerHTML = ''
    document.getElementById("exercise").innerHTML = 'Задание 6.\n' +
        '\n' +
        'Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. ' +
        'Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.'
}
