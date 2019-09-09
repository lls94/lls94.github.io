module.exports = {
    title: '哭的像条狗',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    base: "/docs/",
    dest: "../docs",
    serviceWorker: true,
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ]
    },
    configureWebpack: {
        resolve: {
            alias: {
                // '@alias': 'path/to/some/dir'
            }
        }
    }
}