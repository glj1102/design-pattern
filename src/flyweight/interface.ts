import { FontFamilyEnums } from "./enums";

export interface ICharacterInterface {
    index: number;
    language: ILanguage;
    fontFamily: IFontFamily;
}

/* language-interface */
export interface ILanguage {
    type: string;
    name: string;
}

export interface IFontFamily {
    fontFamily: FontFamilyEnums;
}