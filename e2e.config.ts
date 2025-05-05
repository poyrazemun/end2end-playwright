import { defineConfig } from "@playwright/test";

const config = defineConfig({
  timeout: 60000,
  retries: 0,
  //testDir: "tests/e2e", //su an icin gereksiz gorulebilir ama farkli config dosyalarinin farkli testleri calistirmasi bu sekilde saglaniyor. Yani bu dosyadaki
  //testlere bu config dosyasindaki ayarlar uygulanacak.Simdilik benim testlerim zaten tests dosyasinda ve e2e dosyam yok
  use: {
    headless: true,
    viewport: null,
    launchOptions: {
      args: ["--start-maximized"],
    },
    actionTimeout: 10000,
    video: "off",
    screenshot: "off",
  },
  workers: 1,
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
