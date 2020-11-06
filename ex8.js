const strangeObject = new Map([
    ['head', 4],
    ['hands', 8],
    ['bestMeal', 'corn'],
    ['driversLicense', false],
    ['wheels', true],
    ['age', 107],
    ['superPower', 'sleep a lot']
])

strangeObject.forEach((v,k) => console.log(`Ключ - ${k}, значение - ${v}`))

const exercise8 = () =>
    document.getElementById("output").innerHTML = 'const strangeObject = new Map([\n' +
        '    [\'head\', 4],\n' +
        '    [\'hands\', 8],\n' +
        '    [\'bestMeal\', \'corn\'],\n' +
        '    [\'driversLicense\', false],\n' +
        '    [\'wheels\', true],\n' +
        '    [\'age\', 107],\n' +
        '    [\'superPower\', \'sleep a lot\']\n' +
        '])\n' +
        '\n' +
        'strangeObject.forEach((v,k) => console.log(`Ключ - ${k}, значение - ${v}`))\n'

const ex8 = () => {
    document.getElementById("output").innerHTML = ''
    document.getElementById("exercise").innerHTML = 'Задание 8.\n' +
        '\n' +
        'Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».\n' +
        '\n' +
        'Используйте шаблонные строки.'
}
