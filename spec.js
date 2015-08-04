// spec.js
describe('Protractor Demo App', function() {

    var SuperCalculator = function() {
        var first = element(by.model('first'));
        var second = element(by.model('second'));

        this.get = function() {
            browser.get('http://juliemr.github.io/protractor-demo');
        }

        this.setFirst = function(num) {
            first.sendKeys(num);
        }

        this.setSecond = function(num) {
            second.sendKeys(num);
        }
    }, superCalculator;

    beforeEach(function() {
        superCalculator = new SuperCalculator();
    });

    it('should have a title', function() {
        superCalculator.get();
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function() {
        superCalculator.get();
        superCalculator.setFirst(1);
        superCalculator.setSecond(2);
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual(5); // This is wrong!
    });
});
