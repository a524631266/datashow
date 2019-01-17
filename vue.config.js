module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
        ? 'dist'
        : 'dist',//默认为dist
    baseUrl: "/anomaly/",// 设置tomcat中的根目录即顶级项目不如eap/popudist项目下
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
            },
            '/map': {
                target: 'http://192.168.10.63:8088/popudist/',
                secure:false,
                changeOrigin: true,
                pathRewrite: {
                    '^/map': ''
                }
            }
        }
    }
}