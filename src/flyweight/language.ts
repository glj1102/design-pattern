import { ILanguage } from "./interface";

export class LanguageClass implements ILanguage{
    public type: string;
    public name: string;

    constructor(type: string, name: string) {
        this.type = type;
        this.name = name;
    }
}