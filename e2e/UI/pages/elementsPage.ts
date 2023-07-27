import { Page } from "@playwright/test";
export default class ElementPage{

    constructor(public page: Page){

    }

    //Click Elements>> Web Tables
    async clickWebTables(){
        await this.page.locator("//span[text()='Web Tables']").click()

    }

    //Click Elements>> Broken Links - Images
    async clickBrokenLinksImages(){
        await this.page.locator("//span[text()='Broken Links - Images']").click()

    }
}