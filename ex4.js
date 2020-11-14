const exercise4 = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    let output = randomNumber === '00' ? 100 : parseInt(randomNumber)
    console.log(output)
    document.getElementById("output").innerHTML = output.toString()
}

const ex4 = () => {
    document.getElementById("output").innerHTML = ''
    document.getElementById("exercise").innerHTML = 'Задание 4.\n' +
        '\n' +
        'Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.'
}

// Интересный способ генерации рандомного числа :) но можно было обойтись и одним Math.random, и генерировать число сразу в нужном диапазоне (от 0 до 100).