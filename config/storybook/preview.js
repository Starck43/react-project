import {addDecorator} from "@storybook/react"
// import "loki/configure-react"
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator"
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator"


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
    ],
}

addDecorator(StyleDecorator)
addDecorator(RouterDecorator)
