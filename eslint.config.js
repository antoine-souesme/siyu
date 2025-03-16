import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist', 'cypress.config.ts'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react': react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

            "indent": [
                "error",
                4,
                {
                    "SwitchCase": 1,
                },
            ],
            "semi": [
                "error",
                "always",
            ],
            "comma-dangle": [
                "error",
                {
                    "arrays": "always-multiline",
                    "objects": "always-multiline",
                    "imports": "always-multiline",
                    "exports": "always-multiline",
                    "functions": "always-multiline",
                },
            ],

            "react/jsx-max-props-per-line": [
                "error",
                {
                    "maximum": 1,
                },
            ],
            "react/jsx-curly-spacing": [
                "error",
                {
                    "when": "always",
                },
            ],
            'react/jsx-first-prop-new-line': [
                'error',
                'multiline',
            ],
            "react/jsx-closing-bracket-location": [
                "error",
                "line-aligned",
            ],
        },
    },
)
