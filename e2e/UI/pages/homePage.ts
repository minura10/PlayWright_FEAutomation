import { Page } from "@playwright/test";
export default class HomePage{
    
    constructor(public page: Page){

    }

    //Elements Tab
     async clickElementTile(){
        await this.page.locator("//h5[text()='Elements']").click()

    }

    //Forms Tab 
    async clickFormsTile(){
        await this.page.locator("//h5[text()='Forms']").click()

    }

    //Widgets Tab
    async clickWidgetsTile(){
        await this.page.locator("//h5[text()='Widgets']").click()

    }

    //Interaction Tab
    async clickInteractionTile(){
        await this.page.locator("//h5[text()='Interactions']").click()

    }
}