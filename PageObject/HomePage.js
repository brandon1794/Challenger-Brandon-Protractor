 var HomePage = function () {

     this.getNavMenu() = function () {
         return element.all(by.xpath('//div[contains(@class, \'Flex-sc-1sqrs56-0\')]/nav/ul')).last().isElementPresent();
     }

     this.clickSearchBar = function () {
         element(by.xpath('*//div/button[contains(@class,\'buttonstyles__ButtonBase-augw5g-0\')][1]')).click();
     }

     this.fillSearchBar = function (value) {
         element(by.id('header-search-bar')).sendKeys(value);
     }

     this.clickToSearchButton() = function () {
         element(by.xpath('*//form/button[contains(@class,\'Flex-sc-1sqrs56-0\')][1]')).click();
     }

     this.clickClearField() = function () {
         element(by.className('cnn-search__clear')).click();
     }
 };

 module.exports = new HomePage();