module.exports = {
    title: '哭的像条狗',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.jpg' }]
    ],
    base: "/docs/",
    dest: "../docs",
    evergreen: true,
    serviceWorker: true,
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [],
        sidebar: [
            ['test/', 'Explicit link text']
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