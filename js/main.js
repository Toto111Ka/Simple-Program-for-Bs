var time, money; 

let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	expenses = document.getElementsByClassName('expenses'),
	expensesVaule = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesVaule = document.getElementsByClassName('optionalexpenses-value')[0],
    resultTable2 = document.getElementsByClassName('income income-value level level-value monthsavings monthsavings-value'),
    resultTable3 = document.getElementsByClassName('optionalexpenses  yearsavings yearsavings-value');
    resultTable1 = resultTable2;
    resultTable2 = resultTable3;
    expensesItem = document.getElementsByClassName('expenses-item');
    optionalExpenses = document.getElementsByClassName('optionalexpenses-item');
    btnAccept = document.getElementsByTagName('button')[0];
	btnCalculate = document.getElementsByTagName('button')[2];
	bntAccept1 = document.getElementsByTagName('button')[1];
	input = document.querySelectorAll('.choose-income, .choose-sum, .choose-percent, .checksavings, .year-value, .day-value, .month-value');

startBtn.addEventListener('click', function() {
	alert("Hello User!");
    time = +prompt("Please enter date YYYY-MM-DD");
    money = +prompt("Your money for month?");
     while(isNaN(money) || money == "" || money == null) { // isNaN проверка на строку 
        money = +prompt("Your monye for month?");
	 }
	 appData.budget = money;
	 appData.timeData = time;
	budgetValue.textContent = money.toFixed(); 
	input[4].value = new Date(Date.parse(time)).getFullYear();
	input[5].value = new Date(Date.parse(time)).getMonth() + 1;
	input[6].value = new Date(Date.parse(time)).getDay();
});

btnAccept.addEventListener('click', function() {
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value, //("Please, etner your expenses item this month", ''), 
			b = expensesItem[++i].value; //("How much?", '');

		if (typeof(a)=== 'string' && typeof(a) !=null && typeof(b) !=null && 
				a != '' && b != '' && a.length < 50){                
			 console.log("done");
			 appData.expenses[a]=b;
			 sum+= +b;
		} else {
			 i-- ;
		}  
	}
	expensesVaule.textContent = sum;
});

btnAccept1.addEventListener('click', function(){
	let i = 0;
	do {
		let a = optionalExpenses[i].value; //("Please, etner your expenses optional item ", '');
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
	while (i < optionalExpenses.length);
	optionalExpensesVaule.textContent += appData.optionalExpenses[i] + ' ';
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {}, 
    optionalExpenses: {}, 
    income: {},
    savings: true,
    ChooseExpenses: function() {
   
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Budget per Day: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Min");
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Midle");
        }else if (appData.moneyPerDay > 2000) {
            console.log("High");
        }else {
            console.log("Error");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt ("how much your savings?"),
                precent = +prompt ("which precent?");
            
    
            appData.monthIncome = save/100/12*precent;
            alert("Your money per month in deposit: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
      
    },
    chooseIncome: function() {
        for (i = 0; i < 3; i++) {
        let item = prompt("What will brought this is income? Please, write this is through comma.", '');
            if (typeof(item)=== 'string' && typeof(item) !=null && item != '' && item.length < 50){ 
            console.log("done");  
            appData.income = item.split(', ');
            appData.income.push(prompt("Maybe do you want one more yet? "));
            appData.income.sort();
            i = 3;       
        }else {
            alert("Please, can you try again. ");
            }
        }
        appData.income.forEach(function(item, i) {
        i++;
        alert(i + " Ways for additional Incoming: " + item );
        });
    }
}; 

console.log("Us program has: ");
for (let key in appData){
    console.log(key + ' ' + appData.key);   
}



