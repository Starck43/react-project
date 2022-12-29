module.exports = {
    diffingEngine: "pixelmatch",
    chromeSelector: "body > #root > *",
    configurations: {
        "chrome.laptop": {
            target: "chrome.app",
            width: 1366,
            height: 768,
            deviceScaleFactor: 2,
            mobile: false,
        },
        /*
        "chrome.iphone7": {
            target: "chrome.app",
            preset: "iPhone 7",
        },
        */
    },
}
