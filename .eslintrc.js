module.exports = {
    extends: "airbnb-base",
    rules: {
        indent: ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-cond-assign": ["error", "always"],
        "no-underscore-dangle": [
            "error",
            {
                allow: ["_id"],
            },
        ],
    },
};
