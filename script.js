//'use strict';

let money = +prompt("Ваш бюджет на месяц?", 24000),
	time = prompt('Введите дату в формате YYYY-MM-DD', '2020-10-01');



let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

if (money != null && time != null) {
	
	let answer = true;
	
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце - " + (i + 1), 'статья-' + (i + 1)),
			b = prompt("Во сколько обойдется?", 10000 * (i + 1)); //в prompt если нажать отмена то b = null

		if ((typeof (a)) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a != " " && b != " " && a.length < 50 && answer == true) {
			console.log('done');
			appData.expenses[a] = b; //типа a ключ, b значение
		} else {
			//ДЗ вернуться к вопросу заново
			//confirm возвращает true если нажимаем ОК и false если Отмена.
			answer = confirm('Не корректно введена обязательная статья расходов. \nЕсли хотите повторить нажмите "ОК". Выйти из программы нажмите "Отмена"');
			if (answer) {
				i--;
				console.log('answer = true');
			} else {
				console.log('answer = false');
				break;
			}

		}
	};
	
	

	//Цикл while 
	/*let i = 0;
	while (i < 2) {
		let a = prompt("Введите обязательную статью расходов в этом месяце - " + (i + 1), 'статья-' + (i + 1)),
			b = prompt("Во сколько обойдется?", 10000 * (i + 1)); //в prompt если нажать отмена то b = null

		if ((typeof (a)) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a != " " && b != " " && a.length < 50 && answer == true) {
			console.log('done');
			appData.expenses[a] = b; //типа a ключ, b значение
		} else {
			//ДЗ вернуться к вопросу заново
			//confirm возвращает true если нажимаем ОК и false если Отмена.
			answer = confirm('Не корректно введена обязательная статья расходов. \nЕсли хотите повторить нажмите "ОК". Выйти из программы нажмите "Отмена"');
			if (answer) {
				i--;
				console.log('answer = true');
			} else {
				console.log('answer = false');
				break;
			}
		}
		i++;
	};
	*/
	/*
	let i = 0;
	do{

		let a = prompt("Введите обязательную статью расходов в этом месяце - " + (i + 1), 'статья-' + (i + 1)),
			b = prompt("Во сколько обойдется?", 10000 * (i + 1)); //в prompt если нажать отмена то b = null

		if ((typeof (a)) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a != " " && b != " " && a.length < 50 && answer == true) {
			console.log('done');
			appData.expenses[a] = b; //типа a ключ, b значение
		} else {
			//ДЗ вернуться к вопросу заново
			//confirm возвращает true если нажимаем ОК и false если Отмена.
			answer = confirm('Не корректно введена обязательная статья расходов. \nЕсли хотите повторить нажмите "ОК". Выйти из программы нажмите "Отмена"');
			if (answer) {
				i--;
				console.log('answer = true');
			} else {
				console.log('answer = false');
				break;
			}
		}
		i++;

	} while (i < 2)
    */

	appData.moneyPerDay = appData.budget / 30; // создали новое свойство moneyPerDay

	alert("Ежеждневный бюджет: " + appData.moneyPerDay);

	// тренировка с условиями
	// выведим уровень достатка человека
	if (appData.moneyPerDay < 100) {
		console.log("Мининальный уровень");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень");
	} else if (appData.moneyPerDay > 2000) {
		console.log("Высокий уровень");
	} else {
		console.log("Произошла ошибка");
	}
}


