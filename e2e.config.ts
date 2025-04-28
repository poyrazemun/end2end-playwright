import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 60000,
  retries: 0,
  //testDir: "tests/e2e", //su an icin gereksiz gorulebilir ama farkli config dosyalarinin farkli testleri calistirmasi bu sekilde saglaniyor. Yani bu dosyadaki
  //testlere bu config dosyasindaki ayarlar uygulanacak.Simdilik benim testlerim zaten tests dosyasinda ve e2e dosyam yok
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    video: "off",
    screenshot: "off",
  },
  workers: 1,
  projects: [
    //her seferinde command line'a project ismini yazmak istemedigim icin burayi comment out yaptim. Simdi default ayar olan sadece bir browser'da run edilcek testler.
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "Firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "Webkit",
      use: { browserName: "webkit" },
    },
  ],
};

export default config;
