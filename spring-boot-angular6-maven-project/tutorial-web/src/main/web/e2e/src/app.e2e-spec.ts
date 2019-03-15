import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Calculator');
  });
  
  describe('To verify super calculator functionality', () => {
    it('perform addition with 2 values', async () => {
        await browser.get('http://localhost:4200/');
        await browser.element(by.id('firstNumber')).sendKeys('25');
        await browser.element(by.id('secondNumber')).sendKeys('25');
        await browser.element(by.id('sum')).click();
        expect(await browser.element(by.css('h4')).getText()).toEqual('50')
    })
});
  
  browser.executeAsyncScript(function(callback) {
  // Here we use document.body, but your app may live under a different
  // element.
  var service = angular.element(document.body)
      .injector()
      .get('CalculatorService');
  service.query({}, function(data) {
    callback(data);
  });
}).then(function (output) {
  console.log(output);
});
  
});
