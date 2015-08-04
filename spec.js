// spec.js
describe('Protractor Demo App', function() {

    var SuperCalculator = function() {
        var first = element(by.model('first'));
        var second = element(by.model('second'));
        var goButton = element(by.id('gobutton'));
        var result = element(by.binding('latest'));

        this.get = function() {
            browser.get('http://juliemr.github.io/protractor-demo');
        }

        this.setFirst = function(num) {
            first.sendKeys(num);
        }

        this.setSecond = function(num) {
            second.sendKeys(num);
        }

        this.performOperation = function() {
            goButton.click();
        }

        this.getResult = function() {
            return result.getText();
        }
    }, superCalculator;

    beforeEach(function() {
        superCalculator = new SuperCalculator();
        superCalculator.get();
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function() {
        superCalculator.setFirst(1);
        superCalculator.setSecond(2);
        superCalculator.performOperation();

        expect(superCalculator.getResult()).toEqual('3');
    });

    it('should add four and six', function() {
        superCalculator.setFirst(4);
        superCalculator.setSecond(6);
        superCalculator.performOperation();

        expect(superCalculator.getResult()).toEqual('10');
    });
});
