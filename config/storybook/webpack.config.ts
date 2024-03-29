import path from "path"
import webpack, { DefinePlugin, RuleSetRule } from "webpack"

import type { Paths } from "../build/types/config"
import { buildFileLoader } from "../build/loaders/buildFileLoader"
import { buildCssLoader } from "../build/loaders/buildCssLoader"

require("dotenv").config()

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: Paths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "../../src"),
        publicLocales: path.resolve(__dirname, "../../public", "locales"),
        buildLocales: path.resolve(__dirname, "../../storybook-static", "locales"),
    }

    config.resolve!.extensions!.push(".ts", ".tsx")
    config.resolve!.modules?.push(paths.src)
    config.resolve!.alias = {
        ...config.resolve!.alias,
        "@": paths.src,
    }

    const rules = config.module!.rules as RuleSetRule[]
    config.module!.rules = rules.map((rule) =>
        /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule,
    )

    config.module!.rules.push(...buildFileLoader())
    config.module!.rules.push(buildCssLoader(true))

    config.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify("http://localhost:8000"),
            __PROJECT__: JSON.stringify("storybook"),
        }),
    )
    return config
}
