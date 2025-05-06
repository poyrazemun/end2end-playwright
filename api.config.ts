import { defineConfig } from "@playwright/test";

const config = defineConfig({
  timeout: 60000,
  retries: 0,
  testDir: "tests/api",
  use: {
    actionTimeout: 10000,
    video: "off",
    screenshot: "off",
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "webkit",
      use: { browserName: "webkit" },
    },
  ],
});

export default config;
