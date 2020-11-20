'use strict'
let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", 50000);
	time = prompt('Введите дату в формате YYYY-MM-DD', '');
	
	//проверка prompt
	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};


function chooseExpenses(){
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце - " + (i + 1), 'статья-' + (i + 1)),
			b = prompt("Во сколько обойдется?", 10000 * (i + 1)); //в prompt если нажать отмена то b = null
	
		if ((typeof (a)) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
			console.log('done');
			appData.expenses[a] = b; //типа a ключ, b значение
		} else {
			i = i -1;
		}
	};
}

chooseExpenses();

// ДЗ 2.12 (1) Оформить расчет ежедневного бюджета и вывод на экран этого значения как одну функцию (detectDayBudget) 
function detectDayBudget() {  
	appData.moneyPerDay = (appData.budget / 30).toFixed(); // создали новое свойство moneyPerDay
	alert("Ежеждневный бюджет: " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

// ДЗ 2.12 (2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel) 
function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Мининальный уровень");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень");
	} else {
		console.log("Произошла ошибщчка");
	}
}
detectLevel();

// выведим уровень достатка человека
appData.savings =  true;
//расчет накоплений с депозита если он есть
function checkSavings(params) {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений", 30000),
			parcent = +prompt("Под какой процент?", 2);
		//прибыль за месяц
		appData.monthIncome = save/100/12*parcent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}
checkSavings();


// ДЗ 2.12 (3) Создать функцию для определения необязательных расходов (chooseOptExpenses): 
// - Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”
// - Записать ответы в объект optionalExpenses в формате Номер - Ответ
// optionalExpenses: { 1 : “ответ на вопрос” }
// Вызывать функции не обязательно. 

function chooseOptExpenses() {
	for (let i = 0; i < 3; i++) {
		let questionOptExpenses = prompt("Статья необязательных расходов?");
		appData.optionalExpenses[i] = questionOptExpenses;
		console.log(appData.optionalExpenses);
	}
}
chooseOptExpenses();