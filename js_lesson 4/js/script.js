//Введите массив символов из 10 элементов. Замените символы-цифры на символ ' * '.

let str = ["q", "w", "1", "e", "4", "f", "c", "2", "6"];
console.log("Первый вариант массива " + str);
for (i=0; i < str.length; i++) {
    if ("0" >= str[i] || str[i] <= "9") {
        str.splice([i], 1, "*");
    }
}
console.log("Измененный массив " + str);

//Введите массив символов из 11 элементов. Переведите все строчные буквы-символы в верхний регистр.

let strUp = ["ф", "а", "щ", "Х", "к", "Ь", "у", "Л", "В", "о"];
console.log("Первый вариант массива " + strUp);
for (i=0; i < strUp.length; i++) {
    if("А" >= strUp[i] || strUp[i] <= "Я") {
        strUp.splice([i], 1, strUp[i].toLowerCase());
       
    }
}
console.log("Измененный массив " + strUp);


//Введите массив символов из 15 элементов . Измените регистр символа: прописные заменить на строчные, а строчные на прописные

let strUpLow = ["Н", "А", "ц", "К", "е", "Р", "И", "г", "С", "о", "Б", "щ", "х", "ч", "Т"];
console.log("Первый вариант массива " + strUpLow);
for (i=0; i < strUpLow.length; i++) {
    if("А" >= strUpLow[i] || strUpLow[i] <= "Я") {
        strUpLow.splice([i], 1, strUpLow[i].toLowerCase());
    } else {
        strUpLow.splice([i], 1, strUpLow[i].toUpperCase());
    }
}
console.log("Измененный массив " + strUpLow);

//Введите массив символов из 15 элементов. Подсчитать количество гласных русских букв.
let arrVow = ["р", "и", "m", "ы", "q", "ч", "j", "ю", "s", "м"];

let vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
let resVow = 0;

for (i = 0; i < arrVow.length; i++) {
    for (j = 0; j < vowels.length; j++){
        if (arrVow[i]== vowels[j]) {
            resVow= resVow+1;
        }
    }
    
}
console.log("Количество гласных русских букв - "+ resVow);

//Дан массив символов, содержащий английский текст. Найти количество слов, начинающихся с буквы b.

let arrEn = ["black", "blue", "booth", "reliable", "block", "husband", "breakfast", "able", "because", "cat", "bush"];
console.log(arrEn);
let count = 0;

for (i=0; i < arrEn.length; i++) {
    if(arrEn[i].startsWith("b")) {
        console.log("Слова массива, которые начинаются на букву b - " + arrEn[i]);
        count = count + 1;
    }
}
console.log("В массиве количество слов, начинающихся на букву b = " + count);



// Дан массив символов. Определить, сколько в нем символов '*’, ‘;’, ‘:’

let arrayVar = ["r", "*", "и", ":", "e", "*", ";", ";", "ю", "s", "м", ":", "p", ";", "ю", "*", "м"];
let countCol = 0;
let countSemi = 0;
let countStar = 0;

for (i=0; i < arrayVar.length; i++) {
    if(arrayVar[i] == ":") {
        countCol = countCol + 1;
    } else if (arrayVar[i] == ";") {
        countSemi = countSemi + 1;
    } else if (arrayVar[i] == "*") {
        countStar = countStar + 1;
    }
}
console.log("В массиве имеется " + countCol + " таких символа ':' ");
console.log("В массиве имеется " + countSemi + " таких символа ';' ");
console.log("В массиве имеется " + countStar + " таких символа '*' ")
