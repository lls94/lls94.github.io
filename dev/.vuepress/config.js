const navConfig = require("./navConfig.js");
module.exports = {
    title: "杂货铺",
    description: "Just playing around",
    markdown: {
        lineNumbers: true
    },
    plugins: [
        '@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }
    ],
    head: [
        ["link", { rel: "icon", href: "/logo.jpg" }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
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