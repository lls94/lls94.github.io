const navConfig = require("./navConfig.js");
module.exports = {
    title: "杂货铺",
    description: "Just playing around",
    markdown: {
        lineNumbers: true
    },
    head: [
        ["link", { rel: "icon", href: "/logo.jpg" }]
    ],
    base: "/docs/",
    dest: "../docs",
    evergreen: true,
    serviceWorker: true,
    themeConfig: {
        lastUpdated: "Last Updated",
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