import { Page } from "@playwright/test";
export default class WebTablesPage{
    
    constructor(public page: Page){

    }

    //Add data to table
     async clickAddButton(){
        await this.page.locator("//button[text()='Add']").click()

    }

    //Search value
    async searchField (searchByEmail: string){
        await this.page.locator("#searchBox").type(searchByEmail)
        await this.page.locator("//span[@id='edit-record-4']").click({ force: true })

    }
    
 }