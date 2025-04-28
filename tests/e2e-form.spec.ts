import { test, expect } from "@playwright/test";

import { fillAnyInputBox, verifyInputBoxIsEmpty } from "../helpers";

const mainUrl = "http://zero.webappsecurity.com/feedback.html";

test.describe("Fill / Clear Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(mainUrl);
  });

  const fillTheForm = async (page, userName: string, email: string, subject: string, comment: string) => {
    const nameInput = page.getByPlaceholder("Your Name");
    const emailInput = page.getByPlaceholder("Your email address");
    const subjectInput = page.getByPlaceholder("Subject");
    const commentInput = page.locator("//textarea[@id='comment']");

    await fillAnyInputBox(nameInput, userName);
    await fillAnyInputBox(emailInput, email);
    await fillAnyInputBox(subjectInput, subject);
    await fillAnyInputBox(commentInput, comment);
  };

  test("Submit the Form", async ({ page }) => {
    fillTheForm(page, "Test", "test@test.com", "New Subject", "No comment!");

    await page.waitForTimeout(200);

    const submitButton = page.locator("//input[@name='submit']");
    await submitButton.click();

    await expect(page.locator("//h3[@id='feedback-title']")).toBeVisible();
  });

  test("Clear The Form", async ({ page }) => {
    const nameInput = page.getByPlaceholder("Your Name");
    const emailInput = page.getByPlaceholder("Your email address");
    const subjectInput = page.getByPlaceholder("Subject");
    const commentInput = page.locator("#comment");

    fillTheForm(page, "Test", "test@test.com", "New Subject", "No comment!");

    await page.waitForTimeout(200);

    const clearButton = page.locator("//input[@type='reset']");
    await clearButton.click();

    await verifyInputBoxIsEmpty(nameInput);
    await verifyInputBoxIsEmpty(emailInput);
    await verifyInputBoxIsEmpty(subjectInput);
    await verifyInputBoxIsEmpty(commentInput);
  });
});
