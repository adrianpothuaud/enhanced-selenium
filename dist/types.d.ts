import { EAcceptedXPathObjectKeys } from './enums';
export declare type IXPathBuilderItem = {
    [key in EAcceptedXPathObjectKeys | string]?: string;
};
