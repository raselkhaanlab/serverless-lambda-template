const prettierPlugin = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module", // If using ES modules
      globals: {
        require: "readonly",
        process: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier rules
      "prettier/prettier": "error", // Treat prettier formatting as an ESLint error

      // Example of ESLint rules, adjust as needed
      "no-unused-vars": "warn",
      "no-console": "off",
    },
    ignores: ["node_modules", "dist"],
  },
  // Apply Prettier's config to turn off conflicting ESLint rules
  prettierConfig,
];
