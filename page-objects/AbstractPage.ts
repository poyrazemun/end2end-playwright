import { Page } from "@playwright/test";

export class AbstractPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async wait(time: number) {
    await this.page.waitForTimeout(time);
  }
}
