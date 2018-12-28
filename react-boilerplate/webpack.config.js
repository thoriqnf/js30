const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  }
}
//mode development yang normal ada spacing bisa di baca
//mode production itu yang sudah tanpa space dan di minify