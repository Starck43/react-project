module.exports = {
    stories: [
        "../../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    staticDirs: [ "../../public" ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        /*
        {
            name: "@storybook/addon-essentials",
            options: {
                backgrounds: false,
            },
        },
        */
        "@storybook/addon-interactions",
        "storybook-addon-themes",
        "storybook-addon-mock",
    ],
    framework: "@storybook/react",
    core: {builder: "@storybook/builder-webpack5"},
}
