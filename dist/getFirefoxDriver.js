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
exports.getFirefoxDriver = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const firefox_1 = require("selenium-webdriver/firefox");
require('geckodriver');
const enhanceWebDriver_1 = require("./enhanceWebDriver");
function getFirefoxDriver(debug = true) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = debug
            ? new firefox_1.Options()
                .setPreference('intl.accept_languages', 'en,en-GB')
            : new firefox_1.Options()
                .headless()
                .setPreference('intl.accept_languages', 'en,en-GB');
        const driver = yield new selenium_webdriver_1.Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(options)
            .build();
        return (0, enhanceWebDriver_1.enhanceWebDriver)(driver);
    });
}
exports.getFirefoxDriver = getFirefoxDriver;
