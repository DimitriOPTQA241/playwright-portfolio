const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  console.log('this.page créé :', this.page);
});

After(async function () {
  await this.browser.close();
});