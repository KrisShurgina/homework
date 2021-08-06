//Ввести целочисленный массив, состоящий из 17 элементов. Заменить элементы кратные трем на сумму нечетных по значению элементов

let array = [9, 27, 6, 22, 1, 8, 13, 12, 4, 2, 18, 10, 5, 30, 14, 7, 11];
let sum = 0;
let res = 0;
console.log(array);
 
for (i=0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        sum = sum + array[i];
    }
}
console.log("Сумма нечетных чисел = " + sum);
for (i=0; i < array.length; i++) {
    if (array[i] % 3 == 0) {
        array.splice([i], 1, sum);
    }
}
console.log(array);

//Ввести массив, состоящий из 12 элементов действительного типа. Определить количество чисел, стоящих между максимальным и минимальным элементами.

let arr = [4, 12, 55, 10, 5, 9, 6, 8, 1, 7, 2, 6];
let numRes = 0;
let max = Math.max.apply(null, arr);
let min =  Math.min.apply(null, arr);


for (i = 0; i < arr.length; i++) {
    if (arr[i] == min) {
       for ( j = i; arr[j] < max; j++) {
            numRes++;
        }
        break;
    } else if (arr[i] == max) {
        for ( y = i; arr[y] > min; y++) {
             numRes++;

         }
         break;
    }
}
console.log("Между минимальньм значением " + min + " и максимальным значением " + max + " находится " + (numRes -1)  + " чисел");

//Ввести массив, состоящий из 15 элементов целого типа. Определить количество отрицательных, произведение положительных и количество нулевых элементов.

let arrayNumers = [-1, -5, 6, 0, 7, -4, 3, 0, 2, 4, -8, 5 ];
let neg = 0;
let multi = 1;
let zero = 0;
for (i = 0; i < arrayNumers.length; i++) {
    if (arrayNumers[i] < 0) {
        neg++;
    } else if (arrayNumers[i] > 0) {
        multi = multi * arrayNumers[i];
    } else if (arrayNumers[i] == 0) {
        zero++;

    }
}

console.log("Количество отрицательных чисел в массиве = " +  neg);
console.log("Произведение положительных чисел в массиве = " + multi);
console.log("Количество чисел в массиве равных 0 - " +  zero);


//Ввести массив, состоящий из 12 элементов действительного типа. Определить границы интервала, в котором находятся значения элементов массива.

let arr2 = [2, 10, 6, 20, 18, 26, 22, 30, 28, 36, 32, 40];

for(i=0; i<arr2.length; i++){
    
    let y =arr2[i];
    let testArr1 = [];
    let testArr2 = [];
    
    for (j = 0; j < arr2.length; j++) {
        
        if ( y > arr2[j] ) {
            testArr1.push(arr2[j]);

        }else if (y < arr2[j]) {
            testArr2.push(arr2[j]);
        }
        
    }
   
    let testArr1_max = Math.max.apply(null, testArr1);
    let testArr2_min = Math.min.apply(null, testArr2);
    console.log("Элемент массива co значением " + arr2[i]+" имеет интервал от "+ testArr1_max+ " и до " + testArr2_min)
    //console.log("Те что меньше"+ testArr1);
    //console.log("Те что больше"+ testArr2);

}

//Дан массив − 19 элементов целого типа. Найти сумму элементов, расположенных до первого отрицательного элемента. Если отрицательных элементов нет, то выдать соответствующее сообщение.

let arrNumbers = [1, 3, 5, 6, 8, 10, -1, 2, -3, 11, 4, -4, 7, -2, -7, 12, -6, 18, 19];
let sumArrNumbes = 0;
let plusNumbers = 0;

for (i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] > 0) {
        sumArrNumbes = sumArrNumbes + arrNumbers[i];
        plusNumbers++;
    } else if (arrNumbers[i] < 0) {
        console.log("Первое отрицательное значение " + arrNumbers[i]);
        break;
    }
    if (plusNumbers == arrNumbers.length) {
        console.log("Отрицательных значений нет!");
    } 
}
console.log("Сумма чисел в массиве до первого отрицательного значения = " + sumArrNumbes);