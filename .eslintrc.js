module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-empty": ["error", {
            allowEmptyCatch: true
        }],
        "indent": [2, 4],
        "no-underscore-dangle": ["error", { "allow": ["_links"] }],
    },
    "parser": "babel-eslint",
    "settings": {
        "react": {
          "createClass": "createReactClass",
          "pragma": "React",
          "version": "15.0",
          "flowVersion": "0.53"
        },
        "propWrapperFunctions": [ "forbidExtraProps" ],
        "import/resolver": {
            "webpack": {
                "config": "webpack.config.js"
            }
        }
    }
};