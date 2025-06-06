import { test } from "@playwright/test";
import { FeedbackPage } from "../../page-objects/FeedbackPage";

const mainUrl = "http://zero.webappsecurity.com/feedback.html";
let feedbackPage: FeedbackPage;

test.describe("Fill / Clear Form", () => {
  test.beforeEach(async ({ page }) => {
    feedbackPage = new FeedbackPage(page);
    await page.goto(mainUrl);
  });

  test("Submit the Form", async ({ page }) => {
    await feedbackPage.submitTheForm("Test", "test@test.com", "New Subject", "No comment!");
    await feedbackPage.isFormSentSuccessfully();
  });

  test("Clear The Form", async ({ page }) => {
    await feedbackPage.fillTheForm("Test", "test@test.com", "New Subject", "No comment!");

    await feedbackPage.clearTheForm();

    await feedbackPage.isFormCleared();
  });

  test("Form Is Same", async ({ page }) => {
    await feedbackPage.isFormSame();
    //bu test case mesela UI kismindaki form elementi zaman icinde degisti mi degismedi mi diye kontrol ediyor.
    //cunku her seferinde ss alarak asil ss ile karsilastiriyor.
  });
});
