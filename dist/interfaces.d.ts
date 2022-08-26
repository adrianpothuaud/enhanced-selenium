import { WebElement } from 'selenium-webdriver';
export interface IEnhancedDriver {
    click: (selector: string) => Promise<void>;
    fill: (selectorString: string, keys: string) => Promise<void>;
    navTo: (url: string) => Promise<void>;
    find: (selectorString: string) => Promise<WebElement>;
    quit: () => Promise<void>;
    uploadFile: (inputSelectorString: string, filePath: string) => Promise<void>;
    waitForBgColor: (selectorString: string, color: string) => Promise<void>;
    waitForInputValue: (selectorString: string, value: string) => Promise<void>;
    waitForUrl: (url: string) => Promise<void>;
    waitUntilElementHasText: (selectorString: string, text: string) => Promise<void>;
    waitUntilNotVisible: (selectorString: string) => Promise<void>;
    waitUntilVisible: (selectorString: string) => Promise<void>;
}
