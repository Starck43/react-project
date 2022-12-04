import webpack from "webpack"

import {buildBabelLoader} from "./loaders/buildBabelLoader"
import {buildCssLoader} from "./loaders/buildCssLoader"
import {buildFileLoader} from "./loaders/buildFileLoader"
import {buildSvgLoader} from "./loaders/buildSvgLoader"

import {BuildWebpackOptions} from "./types/config"

export function buildWebpackLoaders(options: BuildWebpackOptions): webpack.RuleSetRule[] {
    const {isDev} = options
    // const typescriptLoader = buildTypescriptLoader()
    // replaced typescriptLoader to BabelLoader for ts && tsx separately
    const tsBabelLoader = buildBabelLoader({isDev, isTsx: false})
    const tsxBabelLoader = buildBabelLoader({isDev, isTsx: true})
    const fileLoader = buildFileLoader()
    const svgLoader = buildSvgLoader()
    const stylesLoader = buildCssLoader(isDev)

    return [
        fileLoader,
        svgLoader,
        tsBabelLoader,
        tsxBabelLoader,
        // typescriptLoader,
        stylesLoader,
    ]
}
