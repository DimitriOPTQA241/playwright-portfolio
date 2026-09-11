class BasePage {
constructor(page){
    this.page = page
}
 async navigate(url){
    await this.page.goto(url)
    await this.page.waitForLoadState('domcontentloaded')
    
 }

}

module.exports = {BasePage}