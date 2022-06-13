// 1
// cоздайте функцию, которая вычисляет объем и площадь полной поверхности 
// куба. Ф-ция принимает в себя целое число со значением длимнны ребра куба. 
// ответ выведите в формате строки. При вводе не числа или пустой строки вывести
// сообщение об ошибке.
function calculateVolumeAndArea(a) {
    let b = a;
    if (typeof(b) == 'number' && b % 1 === 0 && b > 0) {
        let v = b * b * b;
        let s = 6 * b * b;
        let st = `Объем куба: ${v}, площадь всей поверхности: ${s}`;
        return st;
    } else {
        let st = 'При вычислении произошла ошибка';
        return st;
    }
}
// 2
// создать функцию которая принимает число от 0 до 36 и возвращает номер купе
// если не число или дробное или отрицательное возвращает ошибку
// если число 0 или больше 36 возвращает таких мест нет
function getCoupeNumber(a) {
    let b = a;
    let ansver;
    if (typeof(b) !== 'number' || b % 1 !== 0 || b < 0) {
        ansver = 'Ошибка. Проверьте правильность введенного номера места';
    } else if (b == 0 || b > 36) {
        ansver = 'Таких мест в вагоне не существует';
    } else if (b > 0 && b < 36) {
        ansver = Math.floor(b / 4) + 1;
    }
    return ansver;
}
console.log(getCoupeNumber(10));

// создайте функцию,которая принимает в себя целое число минут и возвращает 
// время в нужном формате строки. Обратите внимание на окончание слова 
// час - оно меняеться в зависимости от цыфры. если вместо аргумента приходит не число 
// дробное или отрицательное число - функция возвращает строку "ошибка проверьте данные"
// getTimeFromMinutes(150) => "это 2 часа и 30 мин"
// getTimeFromMinutes(50) => "это 0 часов и 30 мин"
// getTimeFromMinutes(0) => "это 0 часа и 0 мин"
// getTimeFromMinutes(-150) => "ошибка проверьте данные"
function getTimeFromMinutes(num) {
    let hourName;
    let result;
    if (typeof(num) == 'number' && num % 1 === 0 && num >= 0) {
        let hour = Math.floor(num / 60);
        let min = num - hour * 60;
        if (hour == 1) {
            hourName = 'час';
        } else if (hour === 0) {
            hourName = 'часов';
        } else if (hour < 5) {
            hourName = 'часа';
        } else if (hour >= 5 && hour < 21) {
            hourName = 'часов';
        }
        result = `Это ${hour} ${hourName} и ${min} минут`;
    } else {
        result = 'Ошибка, проверьте данные';
    }
    return result;
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));

// напишите функцию, которая принимает в себя 4 числа и возвращает самое большое
// из них. если один аргумент не являеться числом или их меньше 4 то возращаеться 
// 0. дробные числа разрешены.
// findMax(1,5,6.6,11)=>11
// findMax(1,5,'6.6',11)=>0
function findMax(a, b, c, d) {

    if (typeof(a) == 'number' && typeof(b) == 'number' && typeof(c) == 'number' && typeof(d) == 'number') {
        let maxNunber = Math.max(a, b, c, d);
        return maxNunber;
    } else {
        return 0;
    }
}
console.log(findMax(1, 2, 3, 10));