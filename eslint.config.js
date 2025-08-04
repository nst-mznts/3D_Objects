import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";

export default [
    {
        ignores: ["src/three.core.min.js", "src/three.module.min.js"],
    },
    js.configs.recommended,
    {
        files: ["src/**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: 12,
            sourceType: "module",
            globals: {
                browser: true,
                node: true,
                es2021: true,
                document: "readonly",
                window: "readonly",
            },
        },
        plugins: {
            prettier,
        },
        rules: {
            "prettier/prettier": ["error", {}, { usePrettierrc: true }],
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "eqeqeq": ["error", "always"],
            "curly": "error",
            "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "no-undef": "error",
        },
    },
];