import { test, expect } from "@playwright/test";

import { generateStrongRandomPassword } from "../helpers";

const mainUrl = "https://parabank.parasoft.com/";

let registeredUsername = "";
let registeredPassword = "";

test.describe("Login / Logout Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(mainUrl);
  });

  const registerUser = async (page, username: string, password: string) => {
    await page.locator("a[href='register.htm']").click();
    await page.locator("#customer\\.firstName").fill("test2");
    await page.locator("#customer\\.lastName").fill("test2");
    await page.locator("#customer\\.address\\.street").fill("test_street");
    await page.locator("#customer\\.address\\.city").fill("test_city");
    await page.locator("#customer\\.address\\.state").fill("test_state");
    await page.locator("#customer\\.address\\.zipCode").fill("11111");
    await page.locator("#customer\\.phoneNumber").fill("123456789");
    await page.locator("#customer\\.ssn").fill("111");
    await page.locator("#customer\\.username").fill(username);
    await page.locator("#customer\\.password").fill(password);
    await page.locator("#repeatedPassword").fill(password);
    await page.locator("input[value='Register']").click();
  };

  const login = async (page, username: string, password: string) => {
    await page.locator("input[name='username']").fill(username);
    await page.locator("input[name='password']").fill(password);
    await page.locator("input[type='submit']").click();
  };

  const logout = async (page) => {
    const logoutButton = page.locator("a[href='logout.htm']");
    await logoutButton.click();
  };

  test("Successfull Register", async ({ page }) => {
    registeredUsername = `user${Date.now()}`;
    registeredPassword = generateStrongRandomPassword();

    await registerUser(page, registeredUsername, registeredPassword);

    const confirmation = page.locator("h1.title");
    await expect(confirmation).toContainText("Welcome");
  });

  test("Failed Login", async ({ page }) => {
    await login(page, "", "");

    const errorElement = page.locator("p.error");
    await expect(errorElement).toHaveText(
      "Please enter a username and password."
    );
  });

  test("Successful login", async ({ page }) => {
    await login(page, registeredUsername, registeredPassword);

    const logoutButton = page.locator("a[href='logout.htm']");
    await expect(logoutButton).toBeVisible();
  });

  test("Successful logout", async ({ page }) => {
    await login(page, registeredUsername, registeredPassword);
    await logout(page);

    const loginFieldVisible = page.locator("input[name='username']");
    await expect(loginFieldVisible).toBeVisible();
  });
});
