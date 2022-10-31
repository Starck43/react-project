import path from "path"
import webpack, {DefinePlugin, RuleSetRule} from "webpack"

import {buildCssLoader} from "../build/loaders/buildCssLoader"
import {buildSvgLoader} from "../build/loaders/buildSvgLoader"
import {Paths} from "../build/types/config"


export default ({config}: { config: webpack.Configuration }) => {
    const paths: Paths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    }

    config.resolve!.extensions!.push(".ts", ".tsx")
    config.resolve!.modules = [ paths.src, "node_modules" ]

    const rules = config.module!.rules as RuleSetRule[]
    config.module!.rules = rules.map((rule) => (
        /svg/.test(rule.test as string)
            ? {...rule, exclude: /\.svg$/i}
            : rule
    ))
    config.module!.rules.push(buildSvgLoader())
    config.module!.rules.push(buildCssLoader(true))

    config.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(""),
        __PROJECT__: JSON.stringify("storybook"),
    }))
    return config
}
