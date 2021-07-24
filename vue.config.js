module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/lab-vue-unit/'
        : '/',
    configureWebpack:{
        entry:'./src/main.js',
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 244000,
            }
        }
    }
}