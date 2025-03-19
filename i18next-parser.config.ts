// https://github.com/i18next/i18next-parser#options

export default {
    createOldCatalogs: false,
    defaultValue: '___NO_TRANSLATION___',
    indentation: 4,
    keySeparator: false,
    failOnWarnings: false,
    lexers: {
        ts: ['JavascriptLexer'],
        tsx: ['JsxLexer'],
        default: ['JavascriptLexer'],
    },
    locales: ['fr', 'en'],
    namespaceSeparator: false,
    output: 'src/libs/i18n/locales/$LOCALE.json',
    pluralSeparator: '_',
    input: [
        'src/**/**.{ts,tsx}',
    ],
    sort: true,
    verbose: false,
    i18nextOptions: {
        compatibilityJSON: 'v4',
    },
};
