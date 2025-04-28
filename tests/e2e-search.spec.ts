import { test, expect } from "@playwright/test";

test("Search functionality", async ({ page }) => {
  await page.goto("http://zero.webappsecurity.com/index.html");

  const searchBox = page.locator("#searchTerm");
  await searchBox.fill("bank");

  await page.keyboard.press("Enter");

  await page.waitForTimeout(1000);

  const searchResults = page.locator("//ul/li/a");

  await expect(searchResults).toHaveCount(2);
});
