import { EAcceptedXPathStringKeys } from './enums'
import { IXPathBuilderItem } from './types'

const acceptedUnitAttrs = Object.keys(EAcceptedXPathStringKeys)

function itemHasAtLeastOneAttr(item: IXPathBuilderItem) {
  for (let index = 0; index < Object.keys(item).length; index++) {
    const key = Object.keys(item)[index]
    if (acceptedUnitAttrs.includes(key)) return true
  }
  return false
}

export function buildXPathFromArrayOfObjects(items: IXPathBuilderItem[]) {
  const builtXPathElements: string[] = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    const unitXPath = ['//']
    if (item.tag) unitXPath.push(item.tag)
    else unitXPath.push('*')
    if (itemHasAtLeastOneAttr(item)) {
      unitXPath.push('[')
      let alreadyAddedAttribute = false
      if (item.id) {
        unitXPath.push(`@id='${item.id}'`)
        alreadyAddedAttribute = true
      }
      if (item.class) {
        if (alreadyAddedAttribute) unitXPath.push(' and ')
        unitXPath.push(`@class='${item.class}'`)
        alreadyAddedAttribute = true
      }
      if (item.containsClass) {
        if (alreadyAddedAttribute) unitXPath.push(' and ')
        unitXPath.push(`contains(@class, '${item.containsClass}')`)
        alreadyAddedAttribute = true
      }
      if (item.name) {
        if (alreadyAddedAttribute) unitXPath.push(' and ')
        unitXPath.push(`@name='${item.name}'`)
        alreadyAddedAttribute = true
      }
      if (item.text) {
        if (alreadyAddedAttribute) unitXPath.push(' and ')
        unitXPath.push(`text()='${item.text}'`)
        alreadyAddedAttribute = true
      }
      if (item.textContains) {
        if (alreadyAddedAttribute) unitXPath.push(' and ')
        unitXPath.push(`contains(text(), '${item.textContains}')`)
        alreadyAddedAttribute = true
      }
      if (item.type) {
        if (alreadyAddedAttribute) unitXPath.push(' and ')
        unitXPath.push(`@type='${item.type}'`)
        alreadyAddedAttribute = true
      }
      if (item.value) {
        if (alreadyAddedAttribute) unitXPath.push(' and ')
        unitXPath.push(`@value='${item.value}'`)
        alreadyAddedAttribute = true
      }
      if (item.valueContains) {
        if (alreadyAddedAttribute) unitXPath.push(' and ')
        unitXPath.push(`contains(@value, '${item.valueContains}')`)
        alreadyAddedAttribute = true
      }
      unitXPath.push(']')
    }
    builtXPathElements.push(unitXPath.join(''))
  }
  const finalXPath = builtXPathElements.join('')
  return finalXPath
}
