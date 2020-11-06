const arrayInfo = arr =>
    console.log('Длина массива -', arr.length)


const exercise5 = () => {
    const arr5 = [3, 45, 'Al', 32, 78, '7']

    arrayInfo(arr5)
    arr5.map(i => console.log(i))

    document.getElementById("output").innerHTML = 'Решение\nconst arrayInfo = arr =>\n' +
        '    console.log(\'Длина массива -\', arr.length)\n'
}

const ex5 = () => {
    document.getElementById("output").innerHTML = ''
    document.getElementById("exercise").innerHTML = 'Задание 5.\n' +
        '\n' +
        'Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.'
}
