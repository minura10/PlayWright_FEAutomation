import { expect, test } from "@playwright/test"
import HomePage from "../pages/homePage"
import FormsPage from "../pages/formsPage"
import StudentRegistrationForm from "../pages/studentRegistrationForm"
import testData from "../testData/tc04TestData.json"


test("TC03 - Verify user can submit the form", async ({page})=>{

    //Navigatate URL
    await page.goto("https://demoqa.com/", {waitUntil: 'domcontentloaded'});
    await expect(page).toHaveURL("https://demoqa.com/ ")

    const {
        firstName,
        lastName,
        email,
        mobile,
        dob,
        subject,
        picturePath,
        currentAddress,
        state,
        city
      } = testData;


    //Navigate to Forms
    const home = new HomePage(page);
    await home.clickFormsTile();

    //Forms>> PracticeForm
    const forms = new FormsPage(page);
    await forms.clickPracticeForm();

    // Fill out the student registration form    
    const studentregister = new StudentRegistrationForm(page);
    await studentregister.verifyRegistrationPageHeder("Student Registration Form")
    await studentregister.enterFirstName(firstName)
    await studentregister.enterLastName(lastName)
    await studentregister.enterEmail(email)
    await studentregister.genderMale()
    await studentregister.enterMobile(mobile)
    await studentregister.enterDOB(dob.year, dob.month, dob.day)
    await studentregister.enterSubject(subject)
    await studentregister.clickHobbyReading()
    await studentregister.selectPicture(picturePath)
    await studentregister.enterCurrentAddress(currentAddress)
    await studentregister.selectState(state)
    await studentregister.selectCity(city)
    await studentregister.clickSubmitButton()

    // Verify that the submission was successful
    await studentregister.verifySubmittingPageHeder("Thanks for submitting the form")

})