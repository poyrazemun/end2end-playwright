# Bank App End-to-End Testing with Playwright

This repository demonstrates comprehensive end-to-end (E2E) testing for a demo banking application using [Playwright](https://playwright.dev/) and TypeScript.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project contains E2E tests for a demo banking app, designed to ensure robust user flows and application stability using Playwright's powerful automation capabilities.

- **Tech Stack:** TypeScript, Playwright
- **Author:** poyrazemun

## Features

- Multi-browser testing: Chromium, Firefox, WebKit
- Headless and headed modes
- Visual regression and screenshot testing
- Modular page object structure
- Custom Playwright configurations for E2E, API, and visual testing
- HTML reporting for test results

## Project Structure

```
.
├── api.config.ts         # Playwright config for API tests
├── e2e.config.ts         # Playwright config for E2E tests
├── helpers.ts            # Utility/helper functions
├── page-objects/         # Page object models for maintainable tests
├── playwright.config.ts  # Main Playwright config (runs tests in tests/tips)
├── tests/                # Test specifications
│   └── e2e/              # E2E spec files (login, form, search, etc.)
├── visual.config.ts      # Playwright config for visual testing
├── package.json
└── ...
```
[See more files in the repo.](https://github.com/poyrazemun/end2end-playwright/tree/main/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/poyrazemun/end2end-playwright.git
cd end2end-playwright
npm install
# or
yarn install
```

### Running Tests

#### Run all tests (default config)

```bash
npm test
# or
npx playwright test
```

#### E2E test suites

- **Login test:**
  ```bash
  npm run test:e2eLogin
  ```
- **Form test (headed):**
  ```bash
  npm run test:e2eFormH
  ```
- **Search test:**
  ```bash
  npm run test:e2eSearch
  ```
- **Chromium only:**
  ```bash
  npm run test:chromium
  ```
- **Firefox only:**
  ```bash
  npm run test:firefox
  ```
- **Webkit only:**
  ```bash
  npm run test:webkit
  ```
- **API tests:**
  ```bash
  npm run test:api
  ```

#### Debugging and Reports

- **Debug mode:**  
  `npm run test:debug`
- **Show HTML report:**  
  `npm run test:report`
- **CI-friendly HTML report:**  
  `npm run test:ci`

## Scripts

Main scripts available in `package.json`:

| Script                  | Description                                 |
|-------------------------|---------------------------------------------|
| `test`                  | Run all Playwright tests                    |
| `test:config`           | Run tests with E2E config                   |
| `test:e2eLogin`         | Run login E2E tests                         |
| `test:e2eForm`          | Run form E2E tests                          |
| `test:e2eFormH`         | Run form E2E tests (headed)                 |
| `test:e2eSearch`        | Run search E2E tests                        |
| `test:e2eSearchH`       | Run search E2E tests (headed)               |
| `test:chromium`         | Run tests in Chromium only                  |
| `test:chromiumReport`   | Chromium tests with HTML report             |
| `test:chromiumReportFormHeaded` | Headed Chromium form test w/report  |
| `test:firefox`          | Run tests in Firefox only                   |
| `test:webkit`           | Run tests in WebKit only                    |
| `test:headed`           | Run all tests in headed mode                |
| `test:debug`            | Run tests in debug mode                     |
| `test:report`           | Show the latest HTML test report            |
| `test:ci`               | Run all tests and generate HTML report      |
| `test:api`              | Run API tests (chromium)                    |
| `test:apiReport`        | API tests (chromium) with HTML report       |

## Configuration

The main Playwright configuration (`playwright.config.ts`) includes:

- Test directory: `tests/tips`
- Timeout: 60 seconds per test
- Retries: 0 (customize as needed)
- Browsers: Chromium, Firefox, WebKit
- Headless by default (headed available via scripts)
- Failure screenshots and video capture enabled for debugging

You can customize or add configs for different suites (see `e2e.config.ts`, `api.config.ts`, `visual.config.ts`).

## Contributing

Contributions, bug reports, and suggestions are welcome!  
Feel free to open an issue or submit a pull request.

## License

This project is licensed under the ISC License.

---

*Happy testing with Playwright!*
