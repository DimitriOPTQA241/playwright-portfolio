const {Given, When, Then} = require('@cucumber/cucumber')
const { chromium } = require('@playwright/test');
const {BasePage} = require('../pages/BasePage');
const {ProductPage} = require('../pages/ProductPage');
const { expect } = require('@playwright/test') ;



Given ('I open the LDLC homepage', async function () {
    const url = 'https://www.ldlc.com/'
    this.basepage = new BasePage(this.page)
    await this.basepage.navigate(url)
    await expect(this.page).toHaveTitle('LDLC - High-Tech Expérience')
}); 



When ('I search for the product {string}',{timeout: 5000}, async function (keyword) {
    this.productpage = new ProductPage(this.page);
    await this.productpage.searchfield(keyword);
    await this.page.screenshot({ path: 'screenshots/results.png' });
    
}); 



Then ('at least 3 results are displayed',{timeout: 5000}, async function () {
   
await this.productpage.isResultDisplayed()
});


When ('I click on the first result',{timeout: 5000}, async function () {
await this.productpage.selectFirstProduct()
//await this.page.screenshot({ path: 'screenshots/results.png' });

});



Then ('the product title is displayed',{timeout: 5000}, async function () {
   
await this.productpage.productTitleDisplayed()
});

Then ('the product price is displayed',{timeout: 5000}, async function () {
   
await this.productpage.productPriceDisplayed()
});

Then ('the data is saved in a JSON file and Excel file',{timeout: 5000}, async function () {
   
await this.productpage.saveProductPrice()
await this.productpage.saveProductData()
});
