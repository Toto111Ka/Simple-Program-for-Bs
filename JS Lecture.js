
//callback функция
// function lernJS (lang, callback) {
//     console.log("I lern" + lang);
//     callback();
// }

// lernJS("javaScrtipt", function() {
//     console.log("im pass 3th level")
// }); 
// или
// function done(){
//     console.log("I pass 3th lecture!")
// }
// lernJS("JavaScript", done);

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border:"black",
//     bg: "red"
// };

// let arr = [1, 2, 3, 4, 5];

// arr.pop();          //удаляет 5ку с конца массива 
// arr.push("5");      //добавить значение с конца массива(строковое)
// arr.shif();         //удалить в начале
// arr.unshift("1");   //добавить в начале

// console.log(arr);

//перебор массива при помощи цикла

// let arr = ["first","second",3,4,"five"];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (messive: " + mass + ')');
// });

// console.log(arr);

// let mass = [1,3,4,6,7];

// for (let key of mass) {
//     console.log(key);
// }

// cоздание массива при получение данных
// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// создание массива данных на сервере
// let arr = ["aaaa", "bbbb", "cccc", "dddd"],
//     i = arr.join(', ');
// console.log(i);

// let arr = ["aaaa", "cccc", "zzzz", "dddd"], //сортировка
//     i = arr.sort();
// console.log(arr);

// let arr = [1, 15, 4], //сортировка чисел
//     i = arr.sort(compareNum);
// function compareNum(a,b){
//     return a-b;
// }
// console.log(arr);

