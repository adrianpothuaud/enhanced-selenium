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
export declare function buildXPathFromString(item: string): string;
