import{test , expect, type Page} from "@playwright/test"
import { LoginPage } from "./login-data";

test.use({
    launchOptions: {slowMo:1000},
});

test("User is try login", async({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.UserName();
    await loginPage.Password();
    await loginPage.Button();
    
    await expect(page.getByText("Swag Labs"))
    .toContainText("Swag Labs");    

    
});