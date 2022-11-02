// eslint-disable-next-line import/no-import-module-exports
import path from "path"

module.exports = {
    i18n: {
        defaultLocale: "ru",
        locales: [ "ru", "en" ],
        localePath: path.resolve("./public/locales"),
    },
}
