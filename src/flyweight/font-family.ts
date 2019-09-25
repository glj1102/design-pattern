import { FontFamilyEnums } from "./enums";
import { IFontFamily } from "./interface";



export class FontFamilyClass implements IFontFamily{
    public fontFamily: FontFamilyEnums;

    constructor(type: FontFamilyEnums) {
        this.fontFamily = type;
    }
}