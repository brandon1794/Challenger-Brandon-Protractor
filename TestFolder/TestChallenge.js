describe('User types information to search for NFL', function () {
    var homePage = require('../PageObject/HomePage');
    var searchPage = require('../PageObject/SearchPage');

    beforeEach(function () {
        browser.get(browser.params.url)
    });

    it('User types NFL to search for some information games', function () {
        var checkNavBar = homePage.getNavMenu();
        expect(checkNavBar).toBeTruthy();

        homePage.clickSearchBar();
        homePage.fillSearchBar('NFL')
        homePage.clickToSearchButton();
    });

    it('User should be able to see that information about NFL exists', function () {
        var count = searchPage.listOfResults();
        var textExpected = searchPage.getCorrectResultsPageText();

        expect(count).toBeGreaterThan(1);
        expect(textExpected).toContain('Displaying results 1-10 out of 4826 for NFL');
    });

    it('User clears the information to search again for something else', function () {
        homePage.clickClearField();
    });

    it('User types NFLFAKE to search for some information games', function () {
        homePage.clickSearchBar();
        homePage.fillSearchBar('NFLFAKE')
        homePage.clickToSearchButton();
    });

    it('User should be able to see that information about NFL does not exists', function () {
        var textExpected = searchPage.getWrongResultsPageText();

        expect(textExpected).toContain('Your search for NFLFAKE did not match any documents.');
    });
});