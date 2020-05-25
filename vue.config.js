module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        //如果@/common，则会报错
        'common': '@/components/common'
      }
    }
  }
}

