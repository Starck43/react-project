import webpack from "webpack"

import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import CopyPlugin from "copy-webpack-plugin"
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"
import CircularDependencyPlugin from "circular-dependency-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"

import {BuildWebpackOptions} from "./types/config"


const Dotenv = require("dotenv-webpack")


export function buildWebpackPlugins({
    isDev,
    paths,
    cssFilename,
    cssChunkFilename,
    apiUrl,
    project,
}: BuildWebpackOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CopyPlugin({
            patterns: [
                {from: paths.publicLocales, to: paths.buildLocales},
            ],
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: "write-references",
            },
        }),
        new Dotenv(),
    ]

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({overlay: false}))
        // change openAnalyzer on true to see in browser by address: localhost:8888
        plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}))
        plugins.push(new webpack.HotModuleReplacementPlugin())
    } else {
        plugins.push(new MiniCssExtractPlugin({
            filename: cssFilename,
            chunkFilename: cssChunkFilename,
            experimentalUseImportModule: true,
        }))
    }

    return plugins
}
