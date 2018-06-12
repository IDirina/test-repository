//Задание 1. Подготовьте инфраструктуру
//3) Создайте проект внутри локальной копии репозитория, 
//подключите к проекту Selenium и сделайте небольшой работающий тест, 
//kоторый просто запускает браузер, открывает какую-нибудь страницу и закрывает браузер.

var webdriver = require ('selenium-webdriver'),
	By = webdriver.By, 
	until = webdriver.until, 
	test = require('selenium-webdriver/testing');


describe('Google Search', function() {
 var driver;
 
	before(function() {
		driver = new webdriver.Builder()
				.forBrowser('chrome')
				.build();
		});

		
		it('should append query to title', function() {
                driver.get('https://moskva.beeline.ru/shop/');
            });
		
		
		
	after(function(){
		driver.quit();
		});
		
});











