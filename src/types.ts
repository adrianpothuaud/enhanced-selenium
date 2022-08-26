import { EAcceptedXPathObjectKeys } from './enums'

export type IXPathBuilderItem = {
    [key in EAcceptedXPathObjectKeys | string]?: string
}
