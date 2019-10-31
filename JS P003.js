var time, monye;

function start() {
    alert("Hello User!");
    monye = +prompt("Your monye for month?");
    time = +prompt("Please enter date YYYY-MM-DD");

     while(isNaN(monye) || monye == "" || monye == null) { // isNaN проверка а строку 
        monye = +prompt("Your monye for month?");
     }
}
start();

let appData = {
    budget: monye,
    timeData: time,
    expenses: {}, 
    optionalExpenses: {}, 
    income: {},
    savings: true
}; 

function ChooseExpenses () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Please, etner your expenses inem this month", ''), 
            b = prompt("How much?", '');
        
        if (typeof(a)=== 'string' && typeof(a) !=null && typeof(b) !=null && 
                a != '' && b != '' && a.length < 50){                
             console.log("done");
             appData.expenses[a]=b;
        } else {
             alert("Try Again");
             i-- ;
        }  
     }
}
ChooseExpenses();


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

function choseOptExpenses () {
    let i = 0;
    do {
        let a = prompt("Please, etner your expenses optional item ", '');
        if (typeof(a)=== 'string' && typeof(a) !=null && a != '' && a.length < 50){
            console.log("done");
            appData.optionalExpenses[i+1]=a;
            i++;
        } else {
            let c = "not have opt expenses";
            appData.optionalExpenses[c]=a;
            break;
        }
    } 
    while (i < 3);
}
choseOptExpenses();

console.log(appData.optionalExpenses);

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Budget per Day: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel () {
    if(appData.moneyPerDay < 100) {
        console.log("Min");
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Midle");
    }else if (appData.moneyPerDay > 2000) {
        console.log("High");
    }else {
        console.log("Error");
    }
}
detectLevel ();

console.log(appData);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt ("how much your savings?"),
            precent = +prompt ("which precent?");
        

        appData.monthIncome = save/100/12*precent;
        alert("Your money per month in deposit: " + appData.monthIncome);
    }
}
checkSavings();


