const { resolve } = require('node:path')

module.exports = {
  '~': resolve(__dirname),
  '@assets': resolve(__dirname, './assets'),
  '@components': resolve(__dirname, './components'),
  '@atoms': resolve(__dirname, './components/atoms'),
  '@molecules': resolve(__dirname, './components/molecules'),
  '@organisms': resolve(__dirname, './components/organisms'),
  '@templates': resolve(__dirname, './components/templates'),
  '@pages': resolve(__dirname, './components/pages'),
  '@composables': resolve(__dirname, './composables'),
  '@api': resolve(__dirname, './composables/api'),
  '@libs': resolve(__dirname, './libs'),
  '@types': resolve(__dirname, './types'),
  '@locales': resolve(__dirname, './locales'),
  '@constants': resolve(__dirname, './constants'),
  '@stores': resolve(__dirname, './stores'),
}
