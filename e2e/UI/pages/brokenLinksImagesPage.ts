import { Page, expect } from "@playwright/test";
export default class BrokenLinksImagesPage{
    
    constructor(public page: Page){

    }

// Check if a specific image is visible on the page
    async verifyBrokenImages(){
      await expect(this.page.locator("(//p[text()='Valid image']/following-sibling::img)[2]")).toBeVisible();

            
    //   const imgLocator = this.page.locator("(//p[text()='Valid image']/following-sibling::img)[2]");
    //   try {
    //     await imgLocator.waitForEvent("error", { timeout: 5000 })
    //     return true
    //   } catch (error) {
    //     return false
    //   }
    // }
       
    }
}