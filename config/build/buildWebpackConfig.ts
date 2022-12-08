import webpack from "webpack"
import {buildWebpackPlugins} from "./buildWebpackPlugins"
import {buildWebpackLoaders} from "./buildWebpackLoaders"
import {buildWebpackDevServer} from "./buildWebpackDevServer"

import type {BuildWebpackOptions} from "./types/config"

export function buildWebpackConfig(options: BuildWebpackOptions): webpack.Configuration {
    const {
        paths,
        mode,
        isDev,
        chunkFilename,
    } = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: chunkFilename,
            path: paths.build,
            clean: true,
            publicPath: "/",
        },
        plugins:
            buildWebpackPlugins(options), // Plugins
        module: {rules: buildWebpackLoaders(options)}, // Loaders
        resolve: {
            extensions: [ ".tsx", ".ts", ".js", "jsx" ],
            preferAbsolute: true,
            modules: [ options.paths.src, "node_modules" ],
            mainFiles: [ "index" ],
            alias: {
               "@": options.paths.src, // '@' added in tsconfig as well
            },
        },
        devtool: isDev ? "eval-source-map" : undefined,
        devServer: isDev ? buildWebpackDevServer(options) : undefined,
    }
}
