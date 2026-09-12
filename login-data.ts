import{ type Page } from "@playwright/test"
import{ Login } from "./login.ts"

export class LoginPage extends Login{
    constructor(page: Page){
        super(page);
    } 

    override async open(): Promise<void> {
        await super.open();
        await this.page.getByText("Swag Labs");
        await this.page.getByTestId("login_logo");
    } 
    async UserName(): Promise<void>{
        await this.page.getByPlaceholder("Username")
        .fill("standard_user");
    }

    async Password(): Promise<void>{
        await this.page.getByPlaceholder("Password")
        .fill("secret_sauce");
    }

    async Button(): Promise<void>{
        await this.page.getByText("Login")
        .click();
    }
}