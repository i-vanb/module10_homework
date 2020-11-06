const exercise3 = () => {
    const userInput = prompt('Введите что-нибудь')
    let reversText = ''

    userInput.split('').reverse().map(i => reversText += i)
    console.log(reversText)
    document.getElementById("output").innerHTML = reversText
}

const ex3 = () => {
    document.getElementById("output").innerHTML = ''
    document.getElementById("exercise").innerHTML = 'Задание 3.\n' +
        '\n' +
        'Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".'
}
