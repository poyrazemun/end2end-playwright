import { test, Page, Locator, expect } from "@playwright/test";

export function generateStrongRandomPassword(length: number = 12): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

export async function fillAnyInputBox(locator: Locator, input: string) {
  await locator.fill(input);
}

export async function verifyInputBoxIsEmpty(locator: Locator) {
  await expect(locator).toBeEmpty();
}
