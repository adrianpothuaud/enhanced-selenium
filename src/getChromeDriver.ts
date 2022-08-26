import { Builder } from 'selenium-webdriver'
import { Options as ChromeOptions } from 'selenium-webdriver/chrome'

require('chromedriver')

import { enhanceWebDriver } from './enhanceWebDriver'

export async function getChromeDriver(debug = true) {
  const options = debug
    ? new ChromeOptions()
    : new ChromeOptions()
      .headless()
      .addArguments(
        '--headless',
        '--disable-dev-shm-usage',
        '--no-sandbox',
        '--disable-gpu',
      )
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build()
  return enhanceWebDriver(driver)
}
