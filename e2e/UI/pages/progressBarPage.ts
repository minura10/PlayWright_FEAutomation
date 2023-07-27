import { Page, expect } from "@playwright/test";
export default class ProgressBarPage{
    
    constructor(public page: Page){

    }

    //Click Start
     async clickStartButton(){
        await this.page.locator("#startStopButton").click()

    }
     // After reset button appears, set the assertion
    async isResetButtonAvailable(reset: string){
    // Wait for the element with the text "100%" to be available
    await this.page.waitForSelector("//div[text()='100%']");
    // Wait for the reset button to be available
    await this.page.waitForSelector("#resetButton");
    // Assert that the reset button text matches the provided value
    await expect(this.page.locator("#resetButton")).toHaveText(reset);
    }

}