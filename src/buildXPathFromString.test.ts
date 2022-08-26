import { buildXPathFromString as underTest } from './buildXPathFromString'

/**
 * @group lib
 */
describe('buildXPathFromString', () => {
  it('should parse tags', () => {
    const param = 'd->form->fieldset->input->btn'
    const expected = '//div//form//fieldset//input//button'
    const result = underTest(param)
    expect(result).toBe(expected)
  })
})
