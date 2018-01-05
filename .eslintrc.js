module.exports = {
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
        "react"
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
        "no-empty":0
    }
};