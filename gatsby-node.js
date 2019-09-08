const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

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
  const post = path.resolve('src/containers/post/post.js');
  const postCreate = path.resolve('src/containers/post/create.js');

  createPage({
    path: '/post/:id',
    component: post,
  });

  createPage({
    path: '/create/post',
    component: postCreate,
  });
}
