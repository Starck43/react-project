import webpack from "webpack"

import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import CopyPlugin from "copy-webpack-plugin"
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin"
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"
import CircularDependencyPlugin from "circular-dependency-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"

import {BuildWebpackOptions} from "./types/config"

require("dotenv").config()


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
            __API__: JSON.stringify(apiUrl || process.env.REACT_APP_SERVER || "http://localhost:7000"),
            __PROJECT__: JSON.stringify(project),
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
        plugins.push(new CopyPlugin({
            patterns: [
                {from: paths.publicLocales, to: paths.buildLocales},
            ],
        }))
    }

    return plugins
}
