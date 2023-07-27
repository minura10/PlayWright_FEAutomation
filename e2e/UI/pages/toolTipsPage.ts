import { Page, expect } from "@playwright/test";
export default class ToolTipsPage{
    
    constructor(public page: Page){

    }
    
    // Verify the hover text of the button matches the provided text
    async verifyHoverText(buttonhovertext: string){
        var hovertext = this.page.locator("#toolTipButton");
        await hovertext.hover() 
        await expect(hovertext).toBeVisible()

        var tooltipTxt = await this.page.locator("#buttonToolTip").textContent()
        expect(tooltipTxt).toBe(buttonhovertext)

    
    }
}