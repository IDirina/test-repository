//Запуск в разных браузерах
var webdriver = require('selenium-webdriver'),
    ie = require('selenium-webdriver/ie');

var options = new ie.Options();
options.requireWindowFocus(true)

driver = new webdriver.Builder()
    .forBrowser('ie')
    .setIeOptions(options)
    .build();
driver.getCapabilities().then(function(caps) {
    console.log(caps);
});

//задание 3 login

var webdriver = require ('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

var login = 'user2@localhost.ru';
var password = 'qwerty';

describe('Login', function() {
    var driver;

    before(function() {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
    });


    it('should append query to title', function() {
        driver.get('http://localhost/litecart/en/');

        driver.findElement(By.css('[name=email]')).sendKeys(login);
        driver.findElement(By.css('[name=password]')).sendKeys(password);
        driver.findElement(By.css('[name=login]')).click();


    });

    after(function(){
        //driver.quit();
    });

});
