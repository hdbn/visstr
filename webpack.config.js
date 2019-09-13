const path = require('path')
const TypedocWebpackPlugin = require('typedoc-webpack-plugin')

module.exports = {
  mode: 'development',
  // devtool: 'source-map',
  // devtool: 'cheap-eval-source-map',
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'inline-source-map',
  entry: {
    vis_str: './src/vis_str.ts',
    vis_str_demo: './src/vis_str_demo.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: ['node_modules', 'color-convert', path.resolve(__dirname, 'src')],
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new TypedocWebpackPlugin(
      {
        out: '../docs',
        name: 'VisStr API',
        mode: 'file',
        target: 'es6',
        includeDeclarations: false,
        ignoreCompilerErrors: true,
        excludePrivate: true,
      },
      ['./src/vis_str.ts'],
    ),
  ],
}