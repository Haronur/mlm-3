module.exports = {
  images: {
    src: './resources/assets/img/**/*.{png,gif,jpg,jpeg}',
    dest: './public/assets/img'
  },
  sass_front: {
    src: ['./resources/assets/sass/front/theme.scss', './resources/assets/sass/front/plugins.scss'],
    dest: './public/assets/css/front',
    watch: ['./resources/assets/sass/front/**/*.scss', './resources/assets/sass/preset/**/*.scss']
  },
  sass_back: {
    src: ['./resources/assets/sass/back/theme.scss', './resources/assets/sass/back/plugins.scss'],
    dest: './public/assets/css/back',
    watch: ['./resources/assets/sass/back/**/*.scss', './resources/assets/sass/preset/**/*.scss']
  },
  browserify_front: {
    debug: true,
    extensions: ['.js'],
    watch: './resources/assets/js/front/**/*.{js,html,vue,json}',
    bundleConfigs: [{
      entries: './resources/assets/js/front/index.js',
      dest: './public/assets/js/front',
      outputName: 'index.js'
    }]
  },
  browserify_back: {
    debug: true,
    extensions: ['.js'],
    watch: './resources/assets/js/back/**/*.{js,html,vue,json}',
    bundleConfigs: [{
      entries: './resources/assets/js/back/index.js',
      dest: './public/assets/js/back',
      outputName: 'index.js'
    }]
  }
}
