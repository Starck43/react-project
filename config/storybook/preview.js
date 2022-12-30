import {addDecorator} from "@storybook/react"

import {i18n} from "shared/config/i18n"

import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator"
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator"
import {SuspenseDecorator} from "../../src/shared/config/storybook/SuspenseDecorator"
import {TranslationDecorator} from "../../src/shared/config/storybook/TranslationDecorator"

// import {Theme} from "../../src"


export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: "primary",
        values: [
            {
                name: "primary",
                value: "var(--theme-primary-bg-color)",
            },
            {
                name: "secondary",
                value: "var(--theme-secondary-bg-color)",
            },
        ],
    },
    themes: [
        {
            name: "Light",
            class: "light",
            color: "#FFFFFF",
            default: true,
        },
        {
            name: "Dark",
            class: "dark",
            color: "#104046",
        },
        {
            name: "Additional",
            class: "additional",
            color: "#144893",
        },
    ],
    layout: "centered",
    i18n,
    locale: "ru",
    locales: {
        en: "English",
        ru: "Russian",
    },
}

export const globalTypes = {
    locale: {
        name: "Locale",
        description: "Internationalization locale",
        toolbar: {
            icon: "globe",
            default: "ru",
            showName: false,
            items: [
                {value: "en", title: "English"},
                {value: "ru", title: "Russian"},
            ],
        },
    },
}

addDecorator(StyleDecorator)
addDecorator(SuspenseDecorator)
addDecorator(RouterDecorator)
addDecorator(TranslationDecorator)
// addDecorator(ThemeDecorator(Theme.DARK))
