import { expect, test } from "@playwright/test"
import HomePage from "../pages/homePage"
import ElementPage from "../pages/elementsPage"
import BrokenLinksImagesPage from "../pages/brokenLinksImagesPage"

test("TC02  Verify broken image", async ({page})=>{

    //Navigatate URL
    await page.goto("https://demoqa.com/", {waitUntil: 'domcontentloaded'});
    await expect(page).toHaveURL("https://demoqa.com/ ")

    //Navigate to Elements
    const home = new HomePage(page)
    await home.clickElementTile()

    //Elements >> Broken Links - Images
    const element = new ElementPage(page)
    await element.clickBrokenLinksImages()

    // Check for broken images
    const brokenimage = new BrokenLinksImagesPage(page)
    await brokenimage.verifyBrokenImages()


})