import { Page, expect } from "@playwright/test";
export default class droppablePage{

    constructor(public page: Page){

    }

    //Verify Drag and Drop
    async verifyDragAndDrop(dropsuccess: string){
        await this.page.locator("#draggable").dragTo(await this.page.locator("(//div[@id='droppable'])[1]"))
        //verify using text
        await expect(this.page.locator("//p[text()='Dropped!']")).toHaveText(dropsuccess)



    }
}
