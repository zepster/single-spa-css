import babelParser from "babel-eslint";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("ts-important-stuff"),
  {
    languageOptions: {
      parser: babelParser,
    },
  },
  // https://github.com/eslint/rewrite/tree/main/packages/migrate-config#--ext
  {
    files: ["**/*.ts"],
  },
];
