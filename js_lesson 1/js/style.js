
let numder = +prompt('Задание 1\n ' + 'Введите целое число кратное двум или трем');

if (numder % 2 === 0 || numder % 3 === 0) {
    console.log('Значение верное');
} else {
    console.log("Неверно! Вы ввели некорректное число");
}

let a2 = prompt('Задание 2\n ' + 'Введите трёхзначное число');

if (a2 >= 100 && a2 <= 999) {
    console.log("Правильно!");
} else {
    console.log("Некорректное число!");
}


let a = +prompt('Задание 3\n '+ 'Введите первое значение');
let b = +prompt('Задание 3\n '+ 'Введите второе значение');
let c = +prompt('Задание 3\n '+ 'Введите третье значение');

if (a < 45 && b >= 45 && c >= 45) {
    console.log('true - переменная а меньше 45');
} else if (a >= 45 && b < 45 && c >= 45) {
   console.log("true - переменная b меньше 45");
} else if (a >= 45 && b >= 45 && c < 45) {
    console.log("true - переменная c меньше 45");
} else {
    console.log('Неверно! Вы вели неправильное значение');
}


let a3 = +prompt('Задание 4\n ' + 'Введите целое число');

if (a3 % 3 !== 0 && a3 % 10 === 0) {
    console.log('true');
} else {
    console.log("false");
}



let a4 = +prompt('Задание 5\n' + 'Введите число от -137 до -51 или от 123 до 55');

if (a4 >= -137 && a4 <= -51 || a4 <= 123 && a4 >= 55) {
    console.log('true');
} else {
    console.log('false');
}

let a5 = 3;
let b1 = 14;
let n = 0;

while (a5 <= b1) {
    console.log(a5);
    a5++;
    n++;
}
console.log("общее количество чисел - " + n); 


let a6 = 2;
let b3 = 15;
let res = 0;

while (a6+1 <= b3-1) {
    b3--;
    console.log(b3);
    res++;

}
console.log("общее количество чисел - " + res);
