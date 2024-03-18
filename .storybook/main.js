// module.exports = {
//   stories: ["../src/**/*.stories.tsx"],
//   addons: [
//     "@storybook/addon-a11y",
//     "@whitespace/storybook-addon-html"
//   ],
//   webpackFinal: async (config) => {
//     config.module.rules.push({
//       test: /\.(ts|tsx)$/,
//       loader: require.resolve("babel-loader"),
//       options: {
//         presets: [["react-app", { flow: false, typescript: true }]],
//       },
//     });
//     config.module.rules.push({
//       test: /\.s?[ac]ss$/i,
//       use: ["style-loader", "css-loader", "sass-loader"],
//     });
//     config.resolve.extensions.push(".ts", ".tsx");
//     return config;
//   },
// };

const path = require('path');

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-a11y",
    "@whitespace/storybook-addon-html"
  ],
  webpackFinal: async (config) => {
    // Manipula la configuración de Webpack aquí
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
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    });
    config.resolve.extensions.push(".ts", ".tsx", ".mjs");

    // Devuelve la configuración de Webpack al final
    return config;
  },
};
