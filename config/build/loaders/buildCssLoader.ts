import MiniCssExtractPlugin from "mini-css-extract-plugin"


export function BuildCssLoader(isDev: boolean) {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            !isDev ? MiniCssExtractPlugin.loader : "style-loader",
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]", // different *.module.css classes names for dev or prod mode
                        exportLocalsConvention: "camelCase",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }
}
