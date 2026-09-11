const {BasePage} = require('./BasePage');
const { expect } = require('@playwright/test') ;
const fs = require('fs');

class ProductPage extends BasePage {
constructor(page){
    super(page);
}

async searchfield(keyword) {
    await this.page.locator("#search_search_text").fill(keyword)
    await this.page.locator('span.icon.icon-zoom').click()
}

async isResultDisplayed() {
    const resultTitle = await this.page.locator("div[class='title-2']").textContent();
     const count = parseInt(resultTitle);
    expect(count," Au moins 3 résultats sont affichés").toBeGreaterThan(2)
}

async selectFirstProduct() {
 await this.page.locator('.pic').first().click()
 
};

async productTitleDisplayed() {
const productTitle = this.page.locator('h1.title-1')
await expect(productTitle).toBeVisible() 
};

async productPriceDisplayed() {
const productPrice = this.page.locator('.price').first()
await expect(productPrice).toBeVisible() 
}

async saveProductPrice(){

 const priceProduct = await this.page.locator('.price').first().textContent();

 const data = {
    priceProduct: priceProduct.trim()

 };

 fs.mkdirSync('./data', { recursive: true }); 

 fs.writeFileSync(
    './data/product-price.json',
    JSON.stringify(data,null,2)
 );

}






}

module.exports = { ProductPage}