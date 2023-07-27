import { expect, test } from "@playwright/test"
import HomePage from "../pages/homePage"
import InteractionPage from "../pages/interactionPage";
import DroppablePage from "../pages/droppablePage";


test("TC06 - Verify user can drag and drop", async ({page})=>{

    //Navigatate URL
    await page.goto("https://demoqa.com/", {waitUntil: 'domcontentloaded'})
    await expect(page).toHaveURL("https://demoqa.com/ ")

    //Navigate to Interaction
    const home = new HomePage(page)
    await home.clickInteractionTile()

    //Interaction >> Droppble
    const interactionpage = new InteractionPage(page)
    await interactionpage.clickDropperble()

    const dragdrop = new DroppablePage(page)
    await dragdrop.verifyDragAndDrop("Dropped!")

})