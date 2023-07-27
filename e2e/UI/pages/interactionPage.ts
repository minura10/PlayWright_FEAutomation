import { Page } from "@playwright/test";
export default class InteractionPage{
    
    constructor(public page: Page){

    }

    //Click Interaction >> Dropperble
     async clickDropperble(){
        await this.page.locator("//span[text()='Droppable']").click()

    }
}