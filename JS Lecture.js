
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

//delete options.bool; // удаление свойства обьекта
//console.log(options);

// for (let key in options) {   //перечесление свойств со значениями
//     console.log('Property ' + key + ' has vaule ' + options.key);
// }

// console.log(Object.keys(options).length); // количество ключей

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

// ООП 

// let soldier = {  //прототип
//     health: 400,
//     armor: 100
// };

// let john = {     //потомок
//     health: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);

// циклы и прочее 

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Please, etner your expenses inem this month", ''), 
//         b = prompt("How much?", '');

//     if (typeof(a)=== 'string' && typeof(a) !=null && typeof(b) !=null
//         && a != '' && b != '' && a.length < 50){
//         console.log("done")
//         appData.expenses[a]=b;
//     } else {
//          alert("Try Again");
//          i-- ;
//     }
    
// }

// let i = 0;
// while (i < 2) {
//          let a = prompt("Please, etner your expenses inem this month", ''), 
//              b = prompt("How much?", '');
    
//          if (typeof(a)=== 'string' && typeof(a) !=null && typeof(b) !=null
//             && a != '' && b != '' && a.length < 50){
//             console.log("done")
//             appData.expenses[a]=b;
//         } else {
//              alert("Try Again");
//              i-- ;
//         }i++;
// }
