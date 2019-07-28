/*
*Vue-CLI 3.0项目的核心配置文件
*/
// eslint-disable-next-line no-unused-vars
const path = require('path');
const webpack = require('webpack');

module.exports = {
    publicPath: './',//publicPath取代了baseUrl
    outputDir: 'dist', // 不同的环境打不同包名
    lintOnSave: false,
    assetsDir: 'assets',
    runtimeCompiler: true, //关键点在这  原来的 Compiler 换成了 runtimeCompiler
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack: (config) => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{ //配置jquery
            $: 'jquery',
            jquery: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js','default']  //在jquery的配置下添加多这一行配置
        }]);
    },
    configureWebpack: () => {},
// 配置 webpack-dev-server 行为。
    devServer:{
        port:8888,
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        proxy: null, // string | Object
        before: app => {}
    },
};
