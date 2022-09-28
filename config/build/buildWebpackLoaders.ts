import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {BuildWebpackOptions} from "./types/config"

export function buildWebpackLoaders(options: BuildWebpackOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: ["i18next-extract"],
                },
            },
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {loader: "file-loader"},
        ],
    }

    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            !options.isDev ? MiniCssExtractPlugin.loader : "style-loader",
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: options.cssFileIdentName,
                        exportLocalsConvention: "camelCase",
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        stylesLoader,
    ]
}
