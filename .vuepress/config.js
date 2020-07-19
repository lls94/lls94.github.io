const navConfig = require("./navConfig.js");
module.exports = {
    title: "杂货铺123",
    description: "Just playing around",
    locales: {
        '/': {
            lang: "zh-CN"
        }
    },
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
                    return new Date(timestamp).toLocaleString('zh-CN')
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
    base: "/dist/",
    dest: "./dist",
    evergreen: true,
    themeConfig: {
        smoothScroll: true,
        lastUpdated: "上次更新",
        nav: navConfig,
        sidebar: 'auto',
        repo: 'lls94/lls94.github.io',
        repoLabel: 'github',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        docsDir: 'dev'
    },
    configureWebpack: {
        resolve: {
            alias: {
                // '@alias': 'path/to/some/dir'
            }
        }
    }
};