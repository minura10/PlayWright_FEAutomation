import { Page } from "@playwright/test";
export default class WidgetsPage{
    
    constructor(public page: Page){

    }

    //Click Widgets >> Progress Bar
     async clickProgressBar(){
        await this.page.locator("//span[text()='Progress Bar']").click()

    }

    //Click Widgets >> Progress Bar
    async clickToolTips(){
        await this.page.locator("//span[text()='Tool Tips']").click()
    
    }
}