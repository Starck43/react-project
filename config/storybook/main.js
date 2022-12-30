module.exports = {
    stories: [
        "../../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    staticDirs: [ "../../public" ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "storybook-addon-themes",
        "storybook-addon-mock",
        // "storybook-i18next",
    ],
    reactOptions: {legacyRootApi: true},
    framework: "@storybook/react",
    core: {builder: "@storybook/builder-webpack5"},
}
