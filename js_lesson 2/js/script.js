//Дан массив, состоящий из 7 элементов типа number. Найти количество элементов четных по значению
let num = [1, 2, 3, 4, 5, 6, 7];
let res = num.filter(function(value) {
    if(value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
});
console.log("Количество четных элементов в массиве = " + res.length);

//Дан массив, состоящий из 14 элементов типа number. Определить индексы (местоположение) максимального и минимального элементов

let boxNum = [10, 2, 3, 4, 14, 6, 7, 8, 9, 1, 11, 12, 13, 5];
let max = Math.max.apply(null, boxNum);
let min =  Math.min.apply(null, boxNum);
console.log("Максимальное значение в массиве имеет индекс = " + boxNum.indexOf(max));
console.log("Минимальное значение в массиве имеет индекс = " + boxNum.indexOf(min));

//Дан массив m чисел. Написать программу определения среднеарифметического этих чисел используя функцию.

let boxNumM = [1, 2, 3, 4, 5, 6, 7, 8];
function getNumber(arr) {
    let len = boxNumM.length;
    let sum = boxNumM.reduce((a, b) => a + b);
    return sum / len;

}
console.log("Среднеарифметическое значение массива boxNumM = " + getNumber(boxNumM));

//Дан массив из N чисел. Определить количество отрицательных элементов массива

let boxNumN = [4, 5, -1, -3, 10, 14, -16, -9, 8, -7, 0, -4];
let boxNumN_len = boxNumN.length;
let count = 0;
for (let i = 0; i <= boxNumN_len; i++) {
    if (boxNumN [i] < 0){
        count = count+1;
    } else{};
}
console.log("Количество отрицательных значений = " + count);