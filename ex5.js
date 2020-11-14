const arrayInfo = arr =>
    console.log('Длина массива -', arr.length)


const exercise5 = () => {
    const arr5 = [3, 45, 'Al', 32, 78, '7']

    arrayInfo(arr5)
    arr5.forEach(i => console.log(i))

    document.getElementById("output").innerHTML = 'Решение\nconst arrayInfo = arr =>\n' +
        '    console.log(\'Длина массива -\', arr.length)\n'
}

const ex5 = () => {
    document.getElementById("output").innerHTML = ''
    document.getElementById("exercise").innerHTML = 'Задание 5.\n' +
        '\n' +
        'Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.'
}

// Задача выполнена верно, но есть небольшое замечание - использовать метод map для обычного вывода в консоль не совсем оптимально, т.к. этот метод предназначен для изменения элементов массива и создания нового. Для обычного перебора достаточно цикла for или метода forEach