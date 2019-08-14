var time, monye;
    alert("Hello User!");
    monye = prompt("Your monye for month?");
    time = prompt("Please enter date YYYY-MM-DD");
let a1 = prompt("Please, etner your expenses inem this month", ''), 
    a2 = prompt("How much?", '');
    a3 = prompt("Please, etner your expenses inem this month", ''), 
    a4 = prompt("How much?", '');
let appData = {
        budget: monye,
        timeData: time,
        expenses: {}, 
        optionalExpenses: {}, 
        income: {},
        saving: []
    };
appData.expenses[a1] = a2; //числовая запись ответа на вопросы How much
appData.expenses[a3] = a4; //числовая запись ответа на вопросы 

alert(appData.budget / 30);

console.log(appData);
