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
exports.getRemoteChromeDriver = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = require("selenium-webdriver/chrome");
require('chromedriver');
const enhanceWebDriver_1 = require("./enhanceWebDriver");
function getRemoteChromeDriver(hubHostName) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = new chrome_1.Options()
            .headless()
            .addArguments('--headless', '--disable-dev-shm-usage', '--no-sandbox', '--disable-gpu');
        const driver = yield new selenium_webdriver_1.Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .usingServer(`http://${hubHostName}:4444/wd/hub`)
            .build();
        return (0, enhanceWebDriver_1.enhanceWebDriver)(driver);
    });
}
exports.getRemoteChromeDriver = getRemoteChromeDriver;
