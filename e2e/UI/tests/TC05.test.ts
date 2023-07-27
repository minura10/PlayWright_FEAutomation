import { expect, test } from "@playwright/test"
import HomePage from "../pages/homePage"
import WidgetsPage from "../pages/widgetsPage";
import ToolTipsPage from "../pages/toolTipsPage";

test("TC05 - Verify the tooltip", async ({page})=>{

    //Navigatate URL
    await page.goto("https://demoqa.com/", {waitUntil: 'domcontentloaded'});
    await expect(page).toHaveURL("https://demoqa.com/ ");

    //Navigate to Widgets
    const home = new HomePage(page);
    await home.clickWidgetsTile();

    // Widgets >> Tool Tips
    const widgets = new WidgetsPage(page);
    await widgets.clickToolTips();

    //Verify the hover text of a button
    const tooltip = new ToolTipsPage(page);
    await tooltip.verifyHoverText("You hovered over the Button");



})