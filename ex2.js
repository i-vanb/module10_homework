const typeChecker = x => {
    let output

    if(typeof x === 'number') {
        output = 'X - число'
    } else if(typeof x === 'string') {
        output = 'X - строка'
    } else if(typeof x === 'boolean') {
        output = 'X - логического типа'
    } else {
        output = 'X - неопределенного типа'
    }
    console.log(output)
}

const exercise2 = () => document.getElementById("output").innerHTML =
    'const typeChecker = x => {\n' +
    '    let output\n' +
    '\n' +
    '    if(typeof x === \'number\') {\n' +
    '        output = \'X - число\'\n' +
    '    } else if(typeof x === \'string\') {\n' +
    '        output = \'X - строка\'\n' +
    '    } else if(typeof x === \'boolean\') {\n' +
    '        output = \'X - логического типа\'\n' +
    '    } else {\n' +
    '        output = \'X - неопределенного типа\'\n' +
    '    }\n' +
    '    console.log(output)\n' +
    '}'

const ex2 = () => {
    document.getElementById("output").innerHTML = ''
    document.getElementById("exercise").innerHTML = 'Задание 2.\n' +
        '\n' +
        'Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит в консоль сообщение вида: «X — число».\n' +
        '\n' +
        'Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».'
}
