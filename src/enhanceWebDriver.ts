import { By, until, WebDriver } from 'selenium-webdriver'

import { buildXPathFromString } from './buildXPathFromString'
import { IEnhancedDriver } from './interfaces'

export function enhanceWebDriver(driver: WebDriver): IEnhancedDriver {
  return {
    click: async function (selectorString) {
      const targetElement = await driver.wait(
        until.elementLocated(By.xpath(buildXPathFromString(selectorString))),
        12000
      )
      await targetElement.click()
    },
    fill: async function (selectorString, keys) {
      const targetElement = await driver.wait(
        until.elementLocated(By.xpath(buildXPathFromString(selectorString))),
        12000
      )
      await targetElement.sendKeys(keys)
    },
    find: async function (selectorString) {
      const targetElement = await driver.wait(
        until.elementLocated(By.xpath(buildXPathFromString(selectorString))),
        20000
      )
      return targetElement
    },
    navTo: async function (url) {
      await driver.get(url)
    },
    quit: async function () {
      await driver.quit()
    },
    uploadFile: async function (inputSelectorString, filePath) {
      const targetElement = await driver.wait(
        until.elementLocated(By.xpath(buildXPathFromString(inputSelectorString))),
        20000
      )
      await targetElement.sendKeys(filePath)
    },
    waitForBgColor: async function (selectorString, color) {
      const targetElement = await driver.wait(
        until.elementLocated(By.xpath(buildXPathFromString(selectorString))),
        20000
      )
      await driver.wait(
        async () => {
          const currentColor = await targetElement.getCssValue('background-color')
          return currentColor === color
        },
        20000
      )
    },
    waitForInputValue: async function (selectorString, value) {
      const targetElement = await driver.wait(
        until.elementLocated(By.xpath(buildXPathFromString(selectorString))),
        20000
      )
      await driver.wait(
        async () => {
          const currentValue = await targetElement.getAttribute('value')
          return currentValue === value
        },
        20000
      )
    },
    waitForUrl: async function (url) {
      const elementPresentCondition = until.urlIs(url)
      await driver.wait(elementPresentCondition, 20000)
    },
    waitUntilElementHasText: async function (selectorString, text) {
      await driver.wait(
        async () => {
          try {
            const targetElement = await driver.wait(
              until.elementLocated(By.xpath(buildXPathFromString(selectorString))),
              5000
            )
            const currentText = await targetElement.getText()
            return currentText.includes(text)
          } catch (e) {
            return false
          }
        },
        20000
      )
    },
    waitUntilNotVisible: async function (selectorString) {
      await driver.wait(
        async () => {
          try {
            const targetElement = await driver.wait(
              until.elementLocated(By.xpath(buildXPathFromString(selectorString))),
              5000
            )
            const currentlyVisible = await targetElement.isDisplayed()
            return !currentlyVisible
          } catch (e) {
            return true
          }
        },
        10000
      )
    },
    waitUntilVisible: async function (selectorString) {
      await driver.wait(
        async () => {
          try {
            const targetElement = await driver.wait(
              until.elementLocated(By.xpath(buildXPathFromString(selectorString))),
              5000
            )
            const currentlyVisible = await targetElement.isDisplayed()
            return currentlyVisible
          } catch (e) {
            return false
          }
        },
        60000
      )
    },
  }
}
