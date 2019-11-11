
module.exports = {
    devServer: {
        proxy: {//代理是从指定的target后面开始匹配的，不是任意位置：配置pathRewrite可以做替换
            '/api':{
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
            '/douban':{
                target: 'https:',
                changeOrigin: true,
                pathRewrite:{ //路径替换
                    '^/douban': '', //axios 访问/douban/v2 == target + '' + /v2
                }
            }
        }
    }
}