import { test } from "@playwright/test"
import {rahulshettyacademyPage} from "./specialLocators-data";

test.use({
    launchOptions: {slowMo: 800},
});
//____________________Open Registar Page________________________
test ("Playwright special locators", async ({page}) => {
      const  specialLocators = new rahulshettyacademyPage(page);

      await specialLocators.open();
      await specialLocators.Registration();
      await specialLocators.ItemsPags();
 
  /* 
    await page
      .locator('form input[name="name"]')
      .fill('Khaled ALzeeni');

    await page
      .locator('input[name="email"]')
      .fill('Khaledalzeeni0@gmail.com');
    await page
      .getByPlaceholder("Password")
      .fill("Test123");
    await page
      .getByLabel("Check me out if you Love IceCreams!")
      .click();
    await page
      .getByLabel("Gender")
      .selectOption("Male");
    await page
      .getByLabel("Student")
      .click();
    await  page
      .getByText("Success! The Form has been submitted successfully!.")
      .isVisible();
    await page
      .getByRole("button",{name : "Submit"})
      .click;

    //___________Navigate to Shop Page___________________________
    await page
      .getByRole("link",{name:"Shop"})
      .click();

    await page
      .locator("app-card")
      .filter({hasText : "Nokia Edge"})
      .getByRole("button", {name: "Add"})
      .click();

    await page
      .locator("app-card")
      .filter({hasText : "iphone X"})
      .getByRole("button",{name:"Add"}).click();

    await page
      .getByText(" Checkout ( 2 ) ")
      .isChecked
*/      
});
