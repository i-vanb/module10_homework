const exercise1 = () => {
    let
        inp_str = prompt('Exercise 1. Enter something'),
        inp_num = +inp_str,
        output

    if (typeof inp_str === 'number')
        console.log('Always is number. Whatever you enter')

    if (isNaN(inp_num)) {
        output = "Oops. You've typed a wrong num"
        console.log(output)
    } else if (inp_num === 0) {
        output = 'Zero'
        console.log(output)
    } else {
        output = inp_num % 2 === 0 ? 'Even number' : 'Odd number'
        console.log(output, inp_num)
    }


    document.getElementById("output").innerHTML = output;
}


const ex1 = () => {
    document.getElementById("output").innerHTML = ''
    document.getElementById("exercise").innerHTML = 'Задание 1.\n' +
        '\n' +
        'Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.\n' +
        '\n' +
        'Если это число, то вывести в консоль чётное оно или нечётное.\n' +
        '\n' +
        'Если передано не число, выведите: «Упс, кажется, вы ошиблись».\n' +
        '\n' +
        '*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.';
}
