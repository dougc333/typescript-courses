module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking" 
    ],
    "overrides": [
        {
            "env": {
                "node": true,
                "jest" : true
            },
            "files": "tests/**/*.ts",
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project":true,
        "tsconfigRootDir": __dirname
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
      "prefer-const":"error",
      "@typescript-eslint/no-unused-vars":"error",
      "@typescript-eslint/no-unused-params":"off"
    }
}
