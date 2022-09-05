module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "plugin:react/recommended",
        "standard"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
        "no-console": "off",
        "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "react/display-name": 0,
        "react/jsx-sort-props": 2,
        "react/react-in-jsx-scope": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "jsx-a11y/href-no-hash": "off",
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"]

    }
};
