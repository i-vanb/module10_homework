const countEvenOddNumbers = arr => {
    let oddNumbers = 0
    let evenNumbers = 0
    let zero = 0
    arr.forEach(item => {
        if (typeof item === 'number' && !isNaN(item)) {
            if (item === 0) {
                zero++;
            } else if (item % 2 === 0) {
                evenNumbers++;
            } else {
                oddNumbers++;
            }
        }
    })
    console.log('Четных чисел - ', evenNumbers)
    console.log('Нечетных чисел - ', oddNumbers)
    console.log('Нулей - ', zero)
}

// Тут тоже есть пару замечаний. Во-первых, то же, что и в предыдущем задании - избыточное использование map. А во-вторых, не хватает проверки на NaN. Значение NaN имеет особенность, что хотя оно и не является числом, его тип равен number. Поэтому это значение пройдет вашу проверку на typeof и будет ошибочно причислено к нечетным значениям. Выше исправила на более правильный вариант

const exercise7 = () => {
    const arr = [3, 3, 3, 4, 4, 4, 4, 0, 0, '0', '3', '4', null, Object, {}, [], ()=>{}]
    countEvenOddNumbers(arr)
    document.getElementById("output").innerHTML = 'Решение\nconst countEvenOddNumbers = arr => {\n' +
        '    let oddNumbers = 0\n' +
        '    let evenNumbers = 0\n' +
        '    let zero = 0\n' +
        '    arr.map(i => {\n' +
        '        if (i === 0) return zero++\n' +
        '        if (typeof i !== \'number\') return null\n' +
        '        if (i%2 === 0) return evenNumbers++\n' +
        '        return oddNumbers++\n' +
        '    })\n' +
        '    console.log(\'Четных чисел - \', evenNumbers)\n' +
        '    console.log(\'Нечетных чисел - \', oddNumbers)\n' +
        '    console.log(\'Нулей - \', zero)\n' +
        '}\n'
}

const ex7 = () => {
    document.getElementById("output").innerHTML = ''
    document.getElementById("exercise").innerHTML = 'Задание 7.\n' +
        '\n' +
        'Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. \n' +
        '\n' +
        'При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.'
}
