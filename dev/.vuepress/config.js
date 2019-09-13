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
                updatePopup: true
            }
        ],
        [
            "@vuepress/last-updated",
            {
                // transformer: (timestamp, lang) => {
                //     console.log(timestamp, lang, 155555);
                //     return '123'
                // }
            }
        ]
    ],
    head: [
        ["link", { rel: "icon", href: "/logo.jpg" }],
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