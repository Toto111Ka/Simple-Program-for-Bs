var time, money; 

let startBtn = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	expenses = document.getElementsByClassName('expenses'),
	expensesVaule = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesVaule = document.getElementsByClassName('optionalexpenses-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingValue = document.getElementsByClassName('yearsavings-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item');
    optionalExpenses = document.getElementsByClassName('optionalexpenses-item');
    btnAccept = document.getElementsByTagName('button')[0];
	btnAccept1 = document.getElementsByTagName('button')[1];
	btnCalculate = document.getElementsByTagName('button')[2];
	input = document.querySelectorAll('.choose-income, .choose-sum, .choose-percent, .checksavings, .year-value, .day-value, .month-value');

    btnAccept.disabled = true;
    btnAccept1.disabled = true;
    btnCalculate.disabled = true;
    
startBtn.addEventListener('click', function() {
	alert("Hello User!");
    time = prompt("Please enter date YYYY-MM-DD");
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
    
    btnAccept.disabled = false;
    btnAccept1.disabled = false;
    btnCalculate.disabled = false;
});

btnAccept.addEventListener('click', function() {
	let sum = 0;
	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value, //("Please, etner your expenses item this month", ''), 
			b = expensesItem[++i].value; //("How much?", '');

		if (typeof(a)=== 'string' && typeof(a) !=null && typeof(b) !=null && 
				a != '' && b != '' && a.length < 50){                
			 appData.expenses[a]=b;
			 sum+= +b;
		} else {
			 i-- ;
		}  
	}
    expensesVaule.textContent = sum;
});

btnAccept1.addEventListener('click', function() {
	let i = 0;
	do {
		let a = optionalExpenses[i].value; //("Please, etner your expenses optional item ", '');
		if (typeof(a)=== 'string' && typeof(a) !=null && a != '' && a.length < 50){
			console.log("done");
			appData.optionalExpenses[i+1]=a;
            i++;
            optionalExpensesVaule.textContent += appData.optionalExpenses[i] + ' '; 
		} else {
			let c = " not ";
			appData.optionalExpenses[c]=a;
			break;
		}
	} 
	while (i < optionalExpenses.length);
});

btnCalculate.addEventListener('click', function() {
        appData.moneyPerDay = ((appData.budget - +expensesVaule.textContent)/ 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay != undefined) {
        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Min";
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Midle";
        }else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "High";
        }else {
            levelValue.textContent = "Error";
        }
    } else {
        dayBudgetValue.textContent = "Please, enter your budget.";
        dayBudgetValue.style.color = 'red';
    }
});

input[0].addEventListener('change', function() {
    let item = input[0].value;  //prompt("What will brought this is income? Please, write this is through comma.", '')
    appData.income = item.split(', ');
         // appData.income.push(prompt("Maybe do you want one more yet? "));
         // appData.income.sort();
    incomeValue.textContent = appData.income;
});

input[1].addEventListener('click', function() {
    if (appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

input[2].addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +input[2].value;
            percent = +input[3].value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingValue.textContent = appData.yearIncome.toFixed(1);
    }
});

input[3].addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +input[2].value;
            percent = +input[3].value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {}, 
    optionalExpenses: {}, 
    income: {},
    savings: false,
}; 

console.log(input);
