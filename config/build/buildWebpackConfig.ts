import webpack from "webpack"
import {buildWebpackPlugins} from "./buildWebpackPlugins"
import {buildWebpackLoaders} from "./buildWebpackLoaders"
import {buildWebpackDevServer} from "./buildWebpackDevServer"

import {BuildWebpackOptions} from "./types/config"


export function buildWebpackConfig(options: BuildWebpackOptions): webpack.Configuration {
    const {paths, mode, isDev, chunkFilename} = options

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: chunkFilename,
            path: paths.build,
            clean: true
        },
        plugins:
            buildWebpackPlugins(options), // Plugins
        module: {
            rules: buildWebpackLoaders(options) // Loaders
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', 'jsx'],
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildWebpackDevServer(options) : undefined,
    }
}