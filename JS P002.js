var time, monye;
    alert("Hello User!");
    monye = +prompt("Your monye for month?");
    time = +prompt("Please enter date YYYY-MM-DD");

let appData = {
        budget: monye,
        timeData: time,
        expenses: {}, 
        optionalExpenses: {}, 
        income: {},
        saving: []
    }; 

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

// let i = 0;
// do {
//     let a = prompt("Please, etner your expenses inem this month", ''), 
//         b = prompt("How much?", '');
    
//          if (typeof(a)=== 'string' && typeof(a) !=null && typeof(b) !=null
//             && a != '' && b != '' && a.length < 50){
//             console.log("done")
//             appData.expenses[a]=b;
//         } else {
//             alert("Try Again");
//             i-- ;
//         } i++;
//     } 
// while (i < 2);

appData.moneyPerDay = appData.budget / 30;
alert("Budget per Day: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Min");
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Midle");
}else if (appData.moneyPerDay > 2000) {
    console.log("High");
}else {
    console.log("Error")
}

console.log(appData);
