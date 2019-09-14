const navConfig = require("./navConfig.js");
module.exports = {
    title: "杂货铺",
    description: "Just playing around",
    markdown: {
        lineNumbers: true
    },
    plugins: [
        "@vuepress/medium-zoom",
        "@vuepress/nprogress",
        "@vuepress/back-to-top", [
            "@vuepress/pwa",
            {
                serviceWorker: true,
                updatePopup: {
                    message: "杂货铺上新东西了，要看看吗？？？",
                    buttonText: "我要我要"
                }
            }
        ],
        [
            "@vuepress/last-updated",
            {
                transformer: (timestamp, lang) => {
                    return new Date(timestamp).toLocaleString(lang)
                }
            }
        ]
    ],
    head: [
        ["link", { rel: "icon", href: "/logo.webp" }],
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
        ["meta", { name: "msapplication-TileColor", content: "#000000" }]
    ],
    base: "/docs/",
    dest: "../docs",
    evergreen: true,
    themeConfig: {
        lastUpdated: "上次更新时间",
        nav: navConfig,
        sidebar: []
    },
    configureWebpack: {
        resolve: {
            alias: {
                // '@alias': 'path/to/some/dir'
            }
        }
    }
};