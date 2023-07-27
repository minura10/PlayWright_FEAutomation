import { Page } from "@playwright/test";
export default class FormsPage{

    constructor(public page: Page){

    }

    //Click Forms>> Practice Form
    async clickPracticeForm(){
        await this.page.locator("//span[text()='Practice Form']").click()

    }
}