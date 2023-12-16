const { Page } = require("puppeteer");
const { loginSettings } = require("../settings");

const elements = {
  INPUT_EMAIL: "#session_key",
  INPUT_PASSWORD: "#session_password",
  BUTTON_SUBMIT: ".sign-in-form__submit-btn--full-width",
};

/**
 *
 * @param {Page} page
 */
const login = async (page) => {
  await page.waitForTimeout(5000);

  await page.type(elements.INPUT_EMAIL, loginSettings.EMAIL);
  await page.type(elements.INPUT_PASSWORD, loginSettings.PASSWORD);

  await page.click(elements.BUTTON_SUBMIT);

  await page.waitForTimeout(5000);
};

module.exports = login;
