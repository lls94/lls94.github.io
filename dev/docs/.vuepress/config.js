module.exports = {
    title: '哭的像条狗',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    base: "/",
    serviceWorker: true,
    configureWebpack: {
        resolve: {
            alias: {
                // '@alias': 'path/to/some/dir'
            }
        }
    }
}