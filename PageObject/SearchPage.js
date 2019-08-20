var SearchPage = function () {

    this.listOfResults = function () {
        return element(by.className('cnn-search__results-list')).getSize();
    }

    this.getCorrectResultsPageText = function () {
        return element(by.className('cnn-search__results-count')).getText();
    }

    this.getWrongResultsPageText = function () {
        return element(by.xpath('//div[contains(@class,\'cnn-search__no-results\')]/h3')).getText();
    }
};

module.exports = new SearchPage();