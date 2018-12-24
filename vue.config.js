module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
        ? 'dist'
        : 'dist',//默认为dist
    devServer: {
        proxy: {
            '/tree': {
                target: 'http://192.168.10.63:8088',
                secure:false,
                changeOrigin: true,
                pathRewrite: {
                    '^/tree': ''
                }
            },
            '/xinjiang': {
                target: 'http://192.168.10.63:8088',
                secure:false,
                changeOrigin: true,
                pathRewrite: {
                    '^/xinjiang': ''
                }
            }
        }
    }
}