module.exports = {
    title: '哭的像条狗',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    base: "/dev/docs/.vuepress/dist",
    serviceWorker: true,
    configureWebpack: {
        resolve: {
            alias: {
                // '@alias': 'path/to/some/dir'
            }
        }
    }
}