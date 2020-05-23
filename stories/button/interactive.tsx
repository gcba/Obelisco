// Base
import React from "react";
import "../../scss/bastrap.scss";

// Addons
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

// Components
import { types, sizes, Size } from "../../components/utils";
import { Button } from "../../components/Button";
// import notes from './button.md';

// Config
export default {
  title: "Interactivo|Componentes",
  component: Button,
  decorators: [withKnobs],
  parameters: { docs: { disable: true } }
};

export const Interactivo = (): JSX.Element => {
  const type = select("Tipo", types, "primary");
  const size = select("Tamaño", sizes, "default") as Size;
  const content = text("Texto", "Texto");
  const disabled = boolean("Deshabilitado", false);
  const block = boolean("Expandible", false);

  return (
    <Button type={type} size={size} disabled={disabled} block={block}>
      {content}
    </Button>
  );
};
Interactivo.story = { name: "Botón" };
