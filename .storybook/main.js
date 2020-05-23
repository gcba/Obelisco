module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-knobs/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      }
    });
    config.module.rules.push({
      test: /\.s?[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader']
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};