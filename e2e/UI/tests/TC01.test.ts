import { expect, test } from "@playwright/test"
import HomePage from "../pages/homePage"
import ElementPage from "../pages/elementsPage"
import WebTablesPage from "../pages/webTablesPage"
import RegistrationPagePage from "../pages/registrationForm"

test("TC01-Verify user can enter and edit data", async ({page})=>{

    //TC01- Scenario_A Verify user can enter new data into the table

    //Navigatate URL
    await page.goto("https://demoqa.com/", {waitUntil: 'domcontentloaded'});
    await expect(page).toHaveURL("https://demoqa.com/ ");

    //Navigate to Elements
    const home = new HomePage(page)
    await home.clickElementTile()

    //Elements>>Web Tables
    const element = new ElementPage(page)
    await element.clickWebTables()

    //Add Button in Web Table Page
    const webtable = new WebTablesPage (page)
    await webtable.clickAddButton()

    //Fill out the registration form fields
    const register = new RegistrationPagePage(page)
    await register.verifyPageHeder("Registration Form")
    await register.enterFirstName("Alden")
    await register.enterLastName("Cantrell")
    await register.enterEmail("test@test.com")
    await register.enterAge("30")
    await register.enterSalary("12345")
    await register.enterDepartment("QA")
    // Click the submit button
    await register.clickSubmitButton()

    //TC01- Scenario B - Verify user can edit the row in a table

    //Search by using unique value
    await webtable.searchField("test@test.com")

    // Edit the registration form fields (fname and Lname)
    await register.verifyPageHeder("Registration Form")
    await register.enterFirstName("Gerimedica")
    await register.enterLastName("BV")

    // Fill out the registration form fields
    await register.clickSubmitButton()
    
})