const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-a11y",
    "@whitespace/storybook-addon-html",
    /* "@storybook/addon-docs" */
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    }
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.module.rules.push({
      test: /\.s?[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    });
    config.module.rules.push({
      // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
      //     the docs page from the markdown
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          // may or may not need this line depending on your app's setup
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre',
    });
    config.resolve.extensions.push(".ts", ".tsx", ".mdx");
    /* config.resolve.extensions.push(".mdx"); */
    return config;
  },
};
