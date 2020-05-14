
module.exports = {
  entry: `${__dirname}/client/src/index.jsx`,
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: [
              require('precss'),
              require('autoprefixer'),
            ],
          },
        },
        {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/client/dist`,
  },
};
