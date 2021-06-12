import json from './../texts.json';

export enum Languages {
    ENGLISH,
    SPANISH
}

type AvailableLanguages = "english" | "spanish";

export function getText(module: String, language: Languages, label: String) :String {
    const languageText = parseLanguage(language);
    const key = 0;
    const value = 1;

    const moduleEntries = getValueEntries(json, module)
    const moduleLanguageEntries = getValueEntries(moduleEntries, languageText);
    return Object.entries(moduleLanguageEntries).filter(entry => entry[key] === label)[key][value];
}

function parseLanguage(language: Languages): AvailableLanguages {
    switch (language) {
        case Languages.ENGLISH: return "english";
        case Languages.SPANISH: return "spanish";
    }
}




function getValueEntries(json: Object, key: String): Object {
    const keyIndex = 0;
    const valueIndex = 1;

    return Object.entries(json).filter(entry => entry[keyIndex] === key).map(entry => entry[valueIndex])[keyIndex];
}