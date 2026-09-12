import{test , expect, type Page} from "@playwright/test"

export class Login {
    constructor(readonly page : Page){}

    async open(): Promise<void>{
        await this.page.goto("https://www.saucedemo.com/");
    }
}