import { test, expect } from "@playwright/test";

test.describe.only("Tips and Tricks", () => {
  test("TestInfo Object", async ({ page }, testInfo) => {
    await page.goto("https://www.example.com");
    console.log({
      title: testInfo.title,
      expextedStatus: testInfo.expectedStatus,
      status: testInfo.status,
      duration: testInfo.duration,
      file: testInfo.file,
      browser: testInfo.project.name,
      retry: testInfo.retry,
    });
  });
});
