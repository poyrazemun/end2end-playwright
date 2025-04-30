import { Page, Locator, expect } from "@playwright/test";
import { fillAnyInputBox, clickAnyLocator, verifyElementVisible, verifyInputBoxIsEmpty } from "../helpers";
import { AbstractPage } from "./AbstractPage";

export class FeedbackPage extends AbstractPage {
  private nameInput: Locator;
  private emailInput: Locator;
  private subjectInput: Locator;
  private commentInput: Locator;
  private submitButton: Locator;
  private feedbackTitle: Locator;
  private clearButton: Locator;
  private form: Locator;

  constructor(page: Page) {
    super(page);
    this.nameInput = page.getByPlaceholder("Your Name");
    this.emailInput = page.getByPlaceholder("Your email address");
    this.subjectInput = page.getByPlaceholder("Subject");
    this.commentInput = page.locator("//textarea[@id='comment']");
    this.submitButton = page.locator("//input[@name='submit']");
    this.feedbackTitle = page.locator("//h3[@id='feedback-title']");
    this.clearButton = page.locator("//input[@type='reset']");
    this.form = page.locator("//form[@action='/sendFeedback.html']");
  }

  async fillTheForm(userName: string, email: string, subject: string, comment: string) {
    await fillAnyInputBox(this.nameInput, userName);
    await fillAnyInputBox(this.emailInput, email);
    await fillAnyInputBox(this.subjectInput, subject);
    await fillAnyInputBox(this.commentInput, comment);
  }

  async clickTheSubmitButton() {
    await clickAnyLocator(this.submitButton);
  }

  async clickTheClearButton() {
    await clickAnyLocator(this.clearButton);
  }

  async submitTheForm(userName: string, email: string, subject: string, comment: string) {
    await this.fillTheForm(userName, email, subject, comment);
    await this.wait(200);
    await this.clickTheSubmitButton();
  }

  async isFormSentSuccessfully() {
    await verifyElementVisible(this.feedbackTitle);
  }

  async clearTheForm() {
    await this.wait(200);
    await this.clickTheClearButton();
  }

  async isFormCleared() {
    await verifyInputBoxIsEmpty(this.nameInput);
    await verifyInputBoxIsEmpty(this.emailInput);
    await verifyInputBoxIsEmpty(this.subjectInput);
    await verifyInputBoxIsEmpty(this.commentInput);
  }

  async isFormSame() {
    await expect(await this.form.screenshot()).toMatchSnapshot("form.png");
  }
}
