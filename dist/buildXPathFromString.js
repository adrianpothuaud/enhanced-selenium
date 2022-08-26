"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildXPathFromString = void 0;
const buildXPathFromArrayOfObjects_1 = require("./buildXPathFromArrayOfObjects");
const enums_1 = require("./enums");
function evaluateItemAttributes(notParsedAttr, parsedItem) {
    const [key, value] = notParsedAttr.split(':'), refinedKey = {
        [enums_1.EAcceptedXPathStringKeys.ID]: 'id',
        ['*.']: 'containsClass',
        ['*txt']: 'textContains',
        ['*val']: 'valueContains',
        ['.']: 'class',
        ['n']: 'name',
        ['txt']: 'text',
        ['type']: 'text',
        ['val']: 'value'
    }[key] || key;
    parsedItem[refinedKey] = value;
}
/**
 * buildXPathFromString
 *
 * Builds a valid XPath string from another string with a custom cleaner syntax.
 *
 * In details
 * The new syntax availabel is very similar to XPath but way easier to write and maintain.
 * Syntax could be descrbed by the following template: 'TAG[KEY:VALUE,KEU:VALUE]->TAG->[KEY:VALUE]'.
 * That would be transformed into: '//tag[key|@key=\'value\']//tag//*[key|@key=\'value\']'.
 *
 * Available tags:
 * - all html tags
 * - frequent tags that could be shortened: btn=>button, d=>div
 *
 * Example:
 * `buildXPathFromString('d[*.search-box]->form->btn[txt:Submit]')` returns `''`
 *
 * @param item - the custom cleaner xpath string
 */
function buildXPathFromString(item) {
    const notParsedItems = item.split('->');
    const parsedItems = [];
    for (let notParsedItemsIndex = 0; notParsedItemsIndex < notParsedItems.length; notParsedItemsIndex++) {
        let notParsedItem = notParsedItems[notParsedItemsIndex];
        const parsedItem = {};
        let hasTag = false;
        if (notParsedItem.includes('[')) {
            if (notParsedItem.includes(']')) {
                const openingBracketIndex = notParsedItem.indexOf('[');
                if (openingBracketIndex > 0) {
                    hasTag = true;
                    const tag = notParsedItem.split('[')[0];
                    parsedItem.tag = tag;
                    notParsedItem = notParsedItem.replace(`${tag}[`, '[');
                }
                if (notParsedItem.includes(',')) {
                    const notParsedAttrs = notParsedItem
                        .split('[')[hasTag ? 1 : 0]
                        .split(']')[0]
                        .split(',');
                    for (let attrIndex = 0; attrIndex < notParsedAttrs.length; attrIndex++) {
                        const notParsedAttr = notParsedAttrs[attrIndex];
                        evaluateItemAttributes(notParsedAttr, parsedItem);
                    }
                }
                else {
                    const notParsedAttrs = notParsedItem
                        .replace('[', '')
                        .replace(']', '');
                    evaluateItemAttributes(notParsedAttrs, parsedItem);
                }
            }
            else {
                throw new Error('malformed custom selector string, closing ] is missing for item: ' + notParsedItem);
            }
        }
        else {
            parsedItem.tag = notParsedItem;
        }
        if (parsedItem.tag)
            parsedItem.tag = {
                ['btn']: 'button',
                ['d']: 'div',
            }[parsedItem.tag] || parsedItem.tag;
        parsedItems.push(parsedItem);
    }
    const finalXPath = (0, buildXPathFromArrayOfObjects_1.buildXPathFromArrayOfObjects)(parsedItems);
    return finalXPath;
}
exports.buildXPathFromString = buildXPathFromString;
