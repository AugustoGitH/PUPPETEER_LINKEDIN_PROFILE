require("dotenv").config();

const puppeteer = require("puppeteer");
const login = require("./process/login");
const { lauchSettings, pageSettings } = require("./settings");

const initPuppeteer = async () => {
  try {
    const browser = await puppeteer.launch(lauchSettings);
    const page = await browser.newPage();

    await page.goto(pageSettings.GOTO);

    await login(page);

    // page.close();
  } catch (error) {
    console.error(error);
  }
};

initPuppeteer();
