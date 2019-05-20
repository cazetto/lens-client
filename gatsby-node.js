const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const refraction = path.resolve('src/containers/refraction/refraction.js');

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin({
        exclude: /node_modules/
      })],
    },
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/ref/:id',
    component: refraction,
  })
}
