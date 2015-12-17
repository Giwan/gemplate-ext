/*
 * Webpack config file creates a bundle for the extension.
 * This bundle can then be loaded into Chrome for testing.
 */


module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: './index.js'
  },

  output: {
    filename: "index.js",
    /*
     * The location where the generated files are stored.
     * This entire directory is uploaded to the deployment location
     */
    path: __dirname + "/dev",
  },

  module: {
    loaders: [
      {
        /*
         * Apply transform to all .js files that
         * are not in node_modules
         */

        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          "react-hot",
          "eslint-loader",
          "babel-loader"
        ],
      },

      {
        /*
         * Process SCSS files from bottom to top
         * first SASS and then autoprefixer
         */
        test: /\.(scss)$/,
        include: /src/,
        loaders: [
                'style',
                'css',
                'autoprefixer?browsers=last 3 versions',
                'sass?outputStyle=expanded'
            ]
        },
        {
          /*
           * Process SCSS files from bottom to top
           * first SASS and then autoprefixer
           */
          test: /\.(css)$/,
          include: /src/,
          loader: "file?name=[name].[ext]",
          },

      {
        /*
         * Copy all html files to dist dir
         */
        test: /\.(html|json)$/,
        loader: "file?name=[name].[ext]",
      },

      {
        /*
         * Move all image type files to public folder
         * use require to pick them up again
         */
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file?name=[name].[ext]",
      },

      {
        test: /\.(ico)$/i,
        loader: "file?name=[name].[ext]"
      },

    ],
  },
  resolve: {
    root: __dirname,
    // alias directories to search for
    alias: {},
    modulesDirectories: ["node_modules","api", "images", "skin"],
    // allows files to be required without extensions
    extensions: ["", ".js", ".jsx", ".json"]
  }
}
