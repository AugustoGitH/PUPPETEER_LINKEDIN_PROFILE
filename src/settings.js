const loginSettings = {
  EMAIL: process.env.LOGIN_EMAIL,
  PASSWORD: process.env.LOGIN_PASSWORD,
};

const pageSettings = {
  GOTO: process.env.PAGE_GOTO,
};

/**
 * @type { import("puppeteer").PuppeteerLaunchOptions }
 */
const lauchSettings = {
  headless: false,
  executablePath: process.env.EXECUTABLE_PATH,
};

module.exports = { loginSettings, lauchSettings, pageSettings };
