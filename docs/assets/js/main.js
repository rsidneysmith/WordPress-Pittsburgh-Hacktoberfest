let placeholder = document.querySelector('.placeholder');
// console.log(placeholder);

let valueElements = document.querySelectorAll('.value');
// console.log(valueElements);

getValues();

function getValues() {
    Array.from(valueElements).forEach(function (element) {
        console.log(element.textContent);
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

