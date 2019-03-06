module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
        ? 'dist'
        : 'dist',//默认为dist
    baseUrl: "/anomaly/",// 设置tomcat中的根目录即顶级项目不如eap/popudist项目下
    // publicPath: "/anomaly/",// 设置tomcat中的根目录即顶级项目不如eap/popudist项目下
    // autoOpenBrowser: true,
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
                target:  process.env.NODE_ENV === 'production'?'http://192.168.10.63:8098/anomaly':'http://192.168.40.148:8080/anomaly',
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
    },
    pages : {
        home: {
            // page 的入口
            entry: 'src/multipages/home.ts',
            // 模板来源
            template: 'public/home.html',
            // 在 dist/index.html 的输出
            filename: 'home.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            // title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        login: {
            // page 的入口
            entry: 'src/multipages/login.ts',
            // 模板来源
            template: 'public/login.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            // title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    }
}