import { Page, expect } from "@playwright/test";
export default class RegistrationPagePage{
    
    constructor(public page: Page){

    }

    // Verify the page header matches the provided title
    async verifyPageHeder(hedertittle: string){
        await expect(this.page.locator("//div[text()='Registration Form']")).toHaveText(hedertittle)

    }

    // Enter the first name
    async enterFirstName(firstname: string){
        var fname_Text = this.page.locator("input[placeholder='First Name']")
        await fname_Text.clear()
        await fname_Text.type(firstname)
    }

    // Enter the last name
    async enterLastName(lastname: string){
        var lname_Text = this.page.locator("input[placeholder='Last Name']")
        await lname_Text.clear()
        await lname_Text.type(lastname)
    }

    // Enter the email address
    async enterEmail(email: string){
        await this.page.locator("input[placeholder='name@example.com']").type(email)
    }

     // Enter the age
    async enterAge(age: string){
        await this.page.locator("input[placeholder='Age']").type(age)
    }

    // Enter the salary
    async enterSalary(salary: string){
        await this.page.locator("input[placeholder='Salary']").type(salary)
    }

    // Enter the department
    async enterDepartment(department: string){
        await this.page.locator("input[placeholder='Department']").type(department)
    }

    // Click the submit button on the registration form
     async clickSubmitButton(){
        await this.page.locator("//button[@type='submit']").click({ force: true })

    }
}