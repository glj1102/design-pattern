import { ICharacterInterface, ILanguage, IFontFamily } from "./interface";
import { LanguageClass } from "./language";
import { FontFamilyClass } from "./font-family";
import { FontFamilyEnums } from "./enums";

export class NormalCharacterClass implements ICharacterInterface {
    // 文字固定是中文
    public language: ILanguage = new LanguageClass("Chinese", "中文");
    public index: number;
    public fontFamily: IFontFamily;

    constructor(index: number, type: FontFamilyEnums) {
        this.index = index;
        this.fontFamily = new FontFamilyClass(type);
    }
}

{
    const charactersList: ICharacterInterface[] = [];
    for (let i = 0; i < 200000; i++) {
        // 模拟随机生成类型
        const type = Math.random() > 0.5 ? FontFamilyEnums.Song : FontFamilyEnums.You;
        charactersList.push(new NormalCharacterClass(i, type));
    }
    console.log(process.memoryUsage());
}
