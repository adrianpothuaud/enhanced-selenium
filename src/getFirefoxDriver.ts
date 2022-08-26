import { Builder } from 'selenium-webdriver'
import { Options as FirefoxOptions } from 'selenium-webdriver/firefox'

require('geckodriver')

import { enhanceWebDriver } from './enhanceWebDriver'

export async function getFirefoxDriver(debug = true) {
  const options = debug
    ? new FirefoxOptions()
      .setPreference('intl.accept_languages', 'en,en-GB')
    : new FirefoxOptions()
      .headless()
      .setPreference('intl.accept_languages', 'en,en-GB')
  const driver = await new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .build()
  return enhanceWebDriver(driver)
}
