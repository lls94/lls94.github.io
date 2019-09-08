module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    markdown: {
        lineNumbers: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                // '@alias': 'path/to/some/dir'
            }
        }
    }
}