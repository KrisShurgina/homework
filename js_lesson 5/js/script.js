//Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией

function compare(a, b) {
    if (a > b) return 1; 
    if (a == b) return 0; 
    if (a < b) return -1; 
}


function ArrGen () {
    let arr3=[];
    function ArrAdd( ) {
        for (i=0; arr3.length < 100; i++) {
            let num3 = Math.floor(Math.random() * 100 + 1); 
            if(arr3.includes(num3)) {
                ArrAdd();
            } else {
                arr3.push(num3);
                //arr3.sort(compare);
            }
        }
        return arr3;
    }
    return console.log(ArrAdd());
}
ArrGen();
