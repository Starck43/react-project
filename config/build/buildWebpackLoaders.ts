import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {BuildWebpackOptions} from "./types/config"


export function buildWebpackLoaders(options: BuildWebpackOptions): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const stylesLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            !options.isDev ? MiniCssExtractPlugin.loader : 'style-loader',
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.cssFileIdentName,
                        exportLocalsConvention: "camelCase",
                    }
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        tsLoader,
        stylesLoader
    ]
}