module.exports = {
    //You only need to use babel-eslint if you are using types (Flow) or experimental features not supported in ESLint itself yet.
    "parser": "babel-eslint",

    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "eslint-plugin-class-property"
    ],
    "rules": {
        "indent": 0,
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": 0,
        "semi": 0,
        "no-console":0,
        "no-unused-vars":0,
        "no-empty":0,
        "no-case-declarations":0
    }
};