// Base
import React from "react";
import "../../scss/bastrap.scss";

// Addons
import { withA11y } from "@storybook/addon-a11y";

// Components
import { types, sizes } from "../../components/utils";
import { Button } from "../../components/Button";
import * as notes from "./button.md";

// Config
export default {
  title: "Componentes|Botón",
  component: Button,
  decorators: [withA11y],
  parameters: { notes }
};

export const Colores = (): JSX.Element[] => {
  return types.map(type => (
    <Button key={type} type={type}>
      {type}
    </Button>
  ));
};

export const Sizes = (): JSX.Element[] => {
  return sizes.map(size => (
    <Button key={size} type="secondary" size={size}>
      {size}
    </Button>
  ));
};
Sizes.story = { name: "Tamaños" };

export const Deshabilitado = (): JSX.Element => {
  return (
    <Button type="secondary" disabled={true}>
      Deshabilitado
    </Button>
  );
};

export const Expandible = (): JSX.Element => {
  return (
    <Button type="secondary" block={true}>
      Expandible
    </Button>
  );
};
