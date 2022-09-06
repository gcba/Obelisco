import { addDecorator, addParameters } from "@storybook/react";
import { withHTML } from "@whitespace/storybook-addon-html/react";
// import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import "./preview.scss";
import "../src/scss/obelisco.scss";

addDecorator(withHTML);


addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

// addParameters({
//   docs: {
//     container: DocsContainer,
//     page: DocsPage,
//   },
// });
