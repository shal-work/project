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
	savings: true,
	chooseExpenses: function() {
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
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed(); // создали новое свойство moneyPerDay
		alert("Ежеждневный бюджет: " + appData.moneyPerDay + "руб.");
	},
	detectLevel: function() {
		if (appData.moneyPerDay < 100) {
			console.log("Мининальный уровень");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень");
		} else {
			console.log("Произошла ошибочка");
		}
	},
	checkSavings: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений", 30000),
				parcent = +prompt("Под какой процент?", 2);
			//прибыль за месяц
			appData.monthIncome = save/100/12*parcent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 0; i < 3; i++) {
			let questionOptExpenses = prompt("Статья необязательных расходов?");
			appData.optionalExpenses[i] = questionOptExpenses;
			console.log(appData.optionalExpenses);
		}
	},
	chooseIncome: function() {
		let items = prompt ('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		if (typeof(items) != "string" || items == "" || typeof(items) == null) {
			console.log ("Вы ввели некорректные данные или не ввели их вовсе")
		} else {
			appData.income = items.split(', ');
			appData.income.push (prompt('Может что-то еще?'));
			appData.income.sort();
		}
		appData.income.forEach (function (itemmassive, i) {
			alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
		});

	}
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

