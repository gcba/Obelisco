import { addDecorator } from "@storybook/react";
import { withHTML } from "@whitespace/storybook-addon-html/react";
// import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import "./preview.scss";
import "../src/scss/obelisco.scss";
import "../src/js/obelisco";

addDecorator(withHTML);

// addParameters({
//   docs: {
//     container: DocsContainer,
//     page: DocsPage,
//   },
// });
