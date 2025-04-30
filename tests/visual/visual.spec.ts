import { test, expect } from "@playwright/test";

test.describe("Visual Regression Testing Example", () => {
  test("Full page screenshot", async ({ page }) => {
    await page.goto("https://www.example.com");
    await expect(await page.screenshot()).toMatchSnapshot("homepage.png");

    //bu sekilde cok mantikli bir test cunku ilerde UI'da bir sey degisirse bu catch ediyor ve bu sayede hemen farkedebilirim.
  });

  test("Single Element Snapshot", async ({ page }) => {
    await page.goto("https://www.example.com");
    const title = page.locator("h1");
    await expect(await title.screenshot()).toMatchSnapshot("page-title.png");
  });
});
