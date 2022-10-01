import webpack from "webpack"
import {BuildCssLoader} from "./loaders/buildCssLoader"
import {BuildSvgLoader} from "./loaders/buildSvgLoader"
import {BuildWebpackOptions} from "./types/config"


export function buildWebpackLoaders(options: BuildWebpackOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "babel-loader",
                options: {
                    presets: [ "@babel/preset-env" ],
                    plugins: [ "i18next-extract" ],
                },
            },
        ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {loader: "file-loader"},
        ],
    }

    const svgLoader = BuildSvgLoader()
    const stylesLoader = BuildCssLoader(options.isDev)

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        stylesLoader,
    ]
}
