"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enhanceWebDriver = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const buildXPathFromString_1 = require("./buildXPathFromString");
function enhanceWebDriver(driver) {
    return {
        click: function (selectorString) {
            return __awaiter(this, void 0, void 0, function* () {
                const targetElement = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath((0, buildXPathFromString_1.buildXPathFromString)(selectorString))), 12000);
                yield targetElement.click();
            });
        },
        fill: function (selectorString, keys) {
            return __awaiter(this, void 0, void 0, function* () {
                const targetElement = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath((0, buildXPathFromString_1.buildXPathFromString)(selectorString))), 12000);
                yield targetElement.sendKeys(keys);
            });
        },
        find: function (selectorString) {
            return __awaiter(this, void 0, void 0, function* () {
                const targetElement = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath((0, buildXPathFromString_1.buildXPathFromString)(selectorString))), 20000);
                return targetElement;
            });
        },
        navTo: function (url) {
            return __awaiter(this, void 0, void 0, function* () {
                yield driver.get(url);
            });
        },
        quit: function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield driver.quit();
            });
        },
        uploadFile: function (inputSelectorString, filePath) {
            return __awaiter(this, void 0, void 0, function* () {
                const targetElement = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath((0, buildXPathFromString_1.buildXPathFromString)(inputSelectorString))), 20000);
                yield targetElement.sendKeys(filePath);
            });
        },
        waitForBgColor: function (selectorString, color) {
            return __awaiter(this, void 0, void 0, function* () {
                const targetElement = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath((0, buildXPathFromString_1.buildXPathFromString)(selectorString))), 20000);
                yield driver.wait(() => __awaiter(this, void 0, void 0, function* () {
                    const currentColor = yield targetElement.getCssValue('background-color');
                    return currentColor === color;
                }), 20000);
            });
        },
        waitForInputValue: function (selectorString, value) {
            return __awaiter(this, void 0, void 0, function* () {
                const targetElement = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath((0, buildXPathFromString_1.buildXPathFromString)(selectorString))), 20000);
                yield driver.wait(() => __awaiter(this, void 0, void 0, function* () {
                    const currentValue = yield targetElement.getAttribute('value');
                    return currentValue === value;
                }), 20000);
            });
        },
        waitForUrl: function (url) {
            return __awaiter(this, void 0, void 0, function* () {
                const elementPresentCondition = selenium_webdriver_1.until.urlIs(url);
                yield driver.wait(elementPresentCondition, 20000);
            });
        },
        waitUntilElementHasText: function (selectorString, text) {
            return __awaiter(this, void 0, void 0, function* () {
                yield driver.wait(() => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const targetElement = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath((0, buildXPathFromString_1.buildXPathFromString)(selectorString))), 5000);
                        const currentText = yield targetElement.getText();
                        return currentText.includes(text);
                    }
                    catch (e) {
                        return false;
                    }
                }), 20000);
            });
        },
        waitUntilNotVisible: function (selectorString) {
            return __awaiter(this, void 0, void 0, function* () {
                yield driver.wait(() => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const targetElement = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath((0, buildXPathFromString_1.buildXPathFromString)(selectorString))), 5000);
                        const currentlyVisible = yield targetElement.isDisplayed();
                        return !currentlyVisible;
                    }
                    catch (e) {
                        return true;
                    }
                }), 10000);
            });
        },
        waitUntilVisible: function (selectorString) {
            return __awaiter(this, void 0, void 0, function* () {
                yield driver.wait(() => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const targetElement = yield driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath((0, buildXPathFromString_1.buildXPathFromString)(selectorString))), 5000);
                        const currentlyVisible = yield targetElement.isDisplayed();
                        return currentlyVisible;
                    }
                    catch (e) {
                        return false;
                    }
                }), 60000);
            });
        },
    };
}
exports.enhanceWebDriver = enhanceWebDriver;
