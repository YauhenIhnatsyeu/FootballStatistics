const path = require("path");

module.exports = {
    entry: ["babel-polyfill", "./src/js/index.jsx"],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    resolve: {
        alias: {
            Constants: path.resolve(__dirname, "src/js/constants"),

            Components: path.resolve(__dirname, "src/js/components"),
            Containers: path.resolve(__dirname, "src/js/containers"),

            Pages: path.resolve(__dirname, "src/js/components/pages"),
            PlayersPageSections: path.resolve(__dirname, "src/js/components/pages/teamPage/pages/playersPage/sections"),
            FixturesPageSections: path.resolve(__dirname, "src/js/components/pages/teamPage/pages/fixturesPage/sections"),

            ActionTypes: path.resolve(__dirname, "src/js/actions/actionTypes/index"),
            ActionCreators: path.resolve(__dirname, "src/js/actions/actionCreators/index"),

            Utilities: path.resolve(__dirname, "src/js/utils"),
        },
        extensions: [".js", ".jsx"],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
        ],
    },
    devServer: {
        contentBase: [
            __dirname,
            path.join(__dirname, "public"),
        ],
    },
};
