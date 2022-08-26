import { Builder } from 'selenium-webdriver'
import { Options as ChromeOptions } from 'selenium-webdriver/chrome'

require('chromedriver')

import { enhanceWebDriver } from './enhanceWebDriver'

export async function getRemoteChromeDriver(hubHostName: string) {
  const options = new ChromeOptions()
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
    .usingServer(`http://${hubHostName}:4444/wd/hub`)
    .build()
  return enhanceWebDriver(driver)
}
