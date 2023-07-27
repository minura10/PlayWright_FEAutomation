import { expect, test } from "@playwright/test"
import HomePage from "../pages/homePage"
import WidgetsPage from "../pages/widgetsPage";
import ProgressBarPage from "../pages/progressBarPage";


test("TC04 - Verify the progress bar", async ({page})=>{

    //Navigatate URL
    await page.goto("https://demoqa.com/", {waitUntil: 'domcontentloaded'});
    await expect(page).toHaveURL("https://demoqa.com/ ");

    //Navigate to Widgets
    const home = new HomePage(page);
    await home.clickWidgetsTile();

    //Widgets >> Progress Bar
    const widgets = new WidgetsPage(page);
    await widgets.clickProgressBar();

    //"Reset" button becomes available after starting the progress
    const progressbar = new ProgressBarPage(page);
    await progressbar.clickStartButton();
    await progressbar.isResetButtonAvailable("Reset")



})