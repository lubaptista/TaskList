import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        ...globals.node,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
    },
    // Extensões de estilo
    extends: [
      "js/recommended", // equivalente a eslint:recommended
      prettier,         // desativa regras conflitantes com Prettier
    ],
    rules: {
      "prettier/prettier": "error", // força formatação prettier como erro
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "no-underscore-dangle": "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
    },
  },
]);
