"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildXPathFromString_1 = require("./buildXPathFromString");
/**
 * @group lib
 */
describe('buildXPathFromString', () => {
    it('should parse tags', () => {
        const param = 'd->form->fieldset->input->btn';
        const expected = '//div//form//fieldset//input//button';
        const result = (0, buildXPathFromString_1.buildXPathFromString)(param);
        expect(result).toBe(expected);
    });
});
