import { LanguageClass } from "./language";
import { FontFamilyEnums } from "./enums";
import { IFontFamily, ICharacterInterface, ILanguage } from "./interface";
import { FontFamilyClass } from "./font-family";

export class CharacterRegistry {
    private static _instance: CharacterRegistry;
    private _language: LanguageClass;
    private _fontFamilyMap: Map<FontFamilyEnums, IFontFamily> = new Map();

    public static get instance() {
        if (!this._instance) {
            this._instance = new CharacterRegistry();
        }
        return this._instance;
    }

    public get language() {
        if (!this._language) {
            // 懒汉策略，延时创建对象
            this._language = new LanguageClass('Chinese', '中文');
        }
        return this._language;
    }

    public getFontFamilyByType(type: FontFamilyEnums) {
        // 懒汉策略，延时创建对象
        if (!this._fontFamilyMap.has(type)) {
            this._fontFamilyMap.set(type, new FontFamilyClass(type));
        }
        return this._fontFamilyMap.get(type);
    }
}

export class FlyweightCharacterClass implements ICharacterInterface {
    public language: ILanguage = CharacterRegistry.instance.language;
    public index: number;
    public fontFamily: IFontFamily;

    constructor(index: number, type: FontFamilyEnums) {
        this.index = index;
        this.fontFamily = CharacterRegistry.instance.getFontFamilyByType(type);
    }
}


{
    const charactersList: ICharacterInterface[] = [];
    for (let i = 0; i < 200000; i++) {
        // 模拟随机生成类型
        const type = Math.random() > 0.5 ? FontFamilyEnums.Song : FontFamilyEnums.You;
        charactersList.push(new FlyweightCharacterClass(i, type));
    }
    console.log(process.memoryUsage());
}