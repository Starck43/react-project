import clearAttributesPlugin from "../../@babel/clearAttributesPlugin"


interface buildBabelLoaderProps {
    isDev?: boolean
    isTsx?: boolean
}

export function buildBabelLoader({isDev, isTsx}: buildBabelLoaderProps) {
    return {
        test: isTsx ? /\.[jt]sx$/ : /\.[jt]s$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "babel-loader",
                options: {
                    presets: [ "@babel/preset-env" ],
                    plugins: [
                        [
                            "@babel/plugin-transform-typescript",
                            {
                                isTsx,
                            },
                        ],
                        "@babel/plugin-transform-runtime",
                        isTsx && !isDev && [
                            clearAttributesPlugin,
                            {
                                props: [ "data-testid" ],
                            },
                        ],
                        isDev && require.resolve("react-refresh/babel"),
                    ].filter(Boolean),
                },
            },
        ],
    }
}
