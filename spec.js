// spec.js
describe('Protractor Demo App', function() {

    var SuperCalculator = function() {
        var first = element(by.model('first'));
        var second = element(by.model('second'));
        var goButton = element(by.id('gobutton'));
        var result = element(by.binding('latest'));
        var history = element.all(by.repeater('result in memory'));

        this.get = function() {
            browser.get('http://juliemr.github.io/protractor-demo');
        }

        this.setOperand = function(num1, num2) {
            first.sendKeys(num1);
            second.sendKeys(num2);
        }

        this.setOperator = function() {}

        this.performOperation = function(num1, num2) {
            this.setOperand(num1, num2);
            this.setOperator();
            goButton.click();
        }

        this.getResult = function() {
            return result.getText();
        }

        this.getHistory = function() {
            return history;
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
        superCalculator.performOperation(1, 2);

        expect(superCalculator.getResult()).toEqual('3');
    });

    it('should add four and six', function() {
        superCalculator.performOperation(4, 6);

        expect(superCalculator.getResult()).toEqual('10');
    });

    it('should have a history', function() {
        superCalculator.performOperation(1, 2);
        superCalculator.performOperation(3, 4);

        expect(superCalculator.getHistory().count()).toEqual(2);
        expect(superCalculator.getHistory().last().getText()).toContain('1 + 2');

        superCalculator.performOperation(5, 6);

        // expect(superCalculator.getHistory().count()).toEqual(0); // This is wrong!
        // expect(superCalculator.getHistory().first().getText()).toContain('foo'); // This is wrong!
    })
});
