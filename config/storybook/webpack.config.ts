import path from "path"
import webpack, {RuleSetRule} from "webpack"
import {BuildCssLoader} from "../build/loaders/buildCssLoader"
import {BuildSvgLoader} from "../build/loaders/buildSvgLoader"
import {Paths} from "../build/types/config"


export default ({config}: { config: webpack.Configuration }) => {
    const paths: Paths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),

    }
    config.resolve.extensions.push(".ts", ".tsx")
    config.resolve.modules.push(paths.src)
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => (
        /svg/.test(rule.test as string)
            ? {...rule, exclude: /\.svg$/i}
            : rule
        ))
    config.module.rules.push(BuildSvgLoader())
    config.module.rules.push(BuildCssLoader(true))
    return config
}
