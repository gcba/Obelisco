// Base
import React from "react";
import "../../scss/bastrap.scss";

// Addons
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

// Components
import { types, sizes, Size } from "../utils";
import { Button } from "./Button";

// Config
export default {
  title: "Interactivo|Componentes",
  component: Button,
  decorators: [withKnobs],
  parameters: {
    chromatic: { disable: true },
    design: null
  }
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
