import { Page, expect } from '@playwright/test'
import{SpecialLocators} from "./specialLocators.ts"

export class rahulshettyacademyPage extends SpecialLocators{
                constructor(page: Page){
                super(page);
                }

        override async open(): Promise<void> {
                await super.open();
                await this.page.locator("div.container");
        }
        async Registration(): Promise<void>{
                await this.page.locator('form input[name="name"]')
                .fill('Khaled ALzeeni');

                await this.page.locator('input[name="email"]')
                .fill('Khaledalzeeni0@gmail.com');

                await this.page.getByPlaceholder("Password")
                .fill("Test123");

                await this.page.getByLabel("Check me out if you Love IceCreams!")
                .click();

                await this.page.getByLabel("Gender")
                .selectOption("Male");

                await this.page.getByLabel("Student")
                .click();

                await this.page.getByRole("button",{name : "Submit"})
                .click();

                await this.page.getByText("Success! The Form has been submitted successfully!.")
                .isVisible();
        }

        async ItemsPags(): Promise<void>{
                await this.page.getByRole("link",{name:"Shop"})
                .click();
        
                await this.page.locator("app-card")
                .filter({hasText : "Nokia Edge"})
                .getByRole("button", {name: "Add"})
                .click();     
                
                await this.page.locator("app-card")
                .filter({hasText : "iphone X"})
                .getByRole("button",{name:"Add"}).click();                
        
                await expect(this.page.getByText("Checkout ( 2 )"))
                .toBeVisible();
        }
}

/*
        
        async Name(): Promise<void>{
                await this.page.locator('form input[name="name"]')
                .fill('Khaled ALzeeni');
        async Email(){
                await this.page.locator('input[name="email"]')
                .fill('Khaledalzeeni0@gmail.com');
        }
        async Password(){
                await this.page.getByPlaceholder("Password")
                .fill("Test123");
        }
        async CheckBox(){
                await this.page.getByLabel("Check me out if you Love IceCreams!")
                .click();        
        }
        async SelectGender(){
                 await this.page.getByLabel("Gender")
                .selectOption("Male");      
        }
        async EmploymentStatus(){
                await this.page.getByLabel("Student")
                .click();
        }
        async CheckText(){
                await this.page.getByText("Success! The Form has been submitted successfully!.")
                .isVisible();
        }
        async Button(){
                await this.page.getByRole("button",{name : "Submit"})
                .click;
        }
//      _______Navigate to Shop Page____________
        async ClickTab(){
                await this.page.getByRole("link",{name:"Shop"})
                .click();
        }
        async SelectTItems()
        {
                await this.page.locator("app-card")
                .filter({hasText : "Nokia Edge"})
                .getByRole("button", {name: "Add"})
                .click();     
                
                await this.page.locator("app-card")
                .filter({hasText : "iphone X"})
                .getByRole("button",{name:"Add"}).click();                
        }
        async CheckedNumOfItems(){
                await this.page.getByText(" Checkout ( 2 ) ")
                .isChecked();
        }


*/

