import { Page, expect } from "@playwright/test";
export default class StudentRegistrationForm{
    
    constructor(public page: Page){

    }

    // Verify the page header matches the provided title
    async verifyRegistrationPageHeder(registrationtittle: string){
        await expect(this.page.locator("//h5[text()='Student Registration Form']")).toHaveText(registrationtittle)

    }

    //Enter FirstName
    async enterFirstName(firstname: string){
        await this.page.locator("//input[@placeholder='First Name']").type(firstname)
    }
    //Enter LastName
    async enterLastName(lastname: string){
        await this.page.locator("//input[@placeholder='Last Name']").type(lastname)
    }
    //Enter Email
    async enterEmail(email: string){
        await this.page.locator("//input[@placeholder='name@example.com']").type(email)
    }
    // Gender (Male)
    async genderMale(){
        var male_RadioButton = this.page.locator("//label[text()='Male']")
        await expect(male_RadioButton).toBeVisible()
        await male_RadioButton.click()
    }
    //Mobile No
    async enterMobile(mobileno: string){
        await this.page.locator("//input[@placeholder='Mobile Number']").type(mobileno)
    }


    //Date of Birth
    async enterDOB(yyyy: string, mm:string, dd:string){
        const dateOfBirthInputSelector = '#dateOfBirthInput';
        const daySelector = '.react-datepicker__day';
        await this.page.locator(dateOfBirthInputSelector).click();
        await this.page.fill(dateOfBirthInputSelector, `${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`);

    }

    //Subject
    async enterSubject(subject: string){
        await this.page.locator("#subjectsInput").type(subject)
        await this.page.keyboard.press('Enter');
    }
    //Hobbies
    async clickHobbyReading(){
        var reading_checkBox = this.page.locator("//label[text()='Reading']")
        await expect(reading_checkBox).toBeVisible()
        await reading_checkBox.click()
    }

    //Picture
    async selectPicture(filePath: string){
        await this.page.setInputFiles("input[type='file']", [filePath])
        
    }

    //Current Address
    async enterCurrentAddress(currentaddress: string){
        await this.page.locator("//textarea[@placeholder='Current Address']").type(currentaddress)
    }
    
    //State
    async selectState (state: string){
        //await this.page.locator("//span[@class=' css-1okebmr-indicatorSeparator']/following-sibling::div[1]").click()
        await this.page.keyboard.press('Tab')
        await this.page.locator("//div[text()='Select State']").type(state)

        // var state_dropdown = this.page.locator("//div[text()='Select State']")
        // await expect(state_dropdown).toBeVisible()
        // await (state_dropdown).type(state)
        // await this.page.keyboard.press('Enter')
    }

    // City
    async selectCity (city: string){
        var city_dropdown = this.page.locator("//div[text()='Select City']")
        await expect(city_dropdown).toBeVisible()
        await (city_dropdown).type(city)
        await this.page.keyboard.press('Enter')
    }

    //Click Submit
     async clickSubmitButton(){
        await this.page.locator("#submit").click({ force: true })
        //await this.page.keyboard.press('Enter');

    }
    
    // Verify the page header matches the provided title
    async verifySubmittingPageHeder(submittingtittle: string){
        await expect(this.page.locator("//div[@class='modal-title h4']")).toHaveText(submittingtittle)

    }

    
}