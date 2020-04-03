'use strict'

let randomNum = Math.floor((Math.random() * 100) + 1);
console.log('randomNum: ', randomNum);

let guessNum = function(n) {

let numUser = prompt('Угадай число от 1 до 100: ');
console.log('numUser: ', numUser);

    if (numUser === n) {
        alert('Ура! Вы угадали!');
    return}

    if (numUser == null) {
        return;
    }

    if (isNaN(parseFloat(numUser))) {
        alert('Введите число!');}

    if (numUser > n) {
         alert('Меньше');}

    if (numUser < n) {
         alert('Больше');
        }

      guessNum(n);
}    

guessNum(randomNum);



   