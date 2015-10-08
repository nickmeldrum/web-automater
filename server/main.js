var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome('D:/nickmeldrum/web-automater/node_modules/chromedriver/lib/chromedriver')).
    build();

driver.get('http://www.google.com/webhp?complete=0&hl=en');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
driver.findElement(webdriver.By.name('btnK')).click();
driver.wait(function() {
    return driver.getTitle().then(function(title) {
        return title === 'webdriver - Google Search';
    });
}, 1000);
driver.quit();

