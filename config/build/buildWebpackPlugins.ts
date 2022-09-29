import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer"

import {BuildWebpackOptions} from "./types/config"

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

export function buildWebpackPlugins({
    paths,
    cssFilename,
    isDev,
    chunkFilename,
}: BuildWebpackOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: cssFilename,
            chunkFilename,
        }),
        new webpack.DefinePlugin({__IS_DEV__: JSON.stringify(isDev)}),
    ]

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin({overlay: false}))
        plugins.push(new webpack.HotModuleReplacementPlugin())
        // change openAnalyzer on true to see in browser by address: localhost:8888
        plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}))
    }

    return plugins
}
