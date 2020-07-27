// Base
import React from "react";

// Addons
import { withA11y } from "@storybook/addon-a11y";

// Components
import { alertTypes } from "../utils";

// Config
export default {
  title: "Componentes|Alerta",
  decorators: [withA11y]
};

export const Texto = (): JSX.Element => {
  return (
    <div className="alert alert-danger" role="alert">
      Un texto simple para una alerta simple, incluso{" "}
      <a href="#">con hipervínculos</a>.
    </div>
  );
};

export const Titulo = (): JSX.Element => {
  return (
    <div className="alert alert-danger" role="alert">
      <h5>Título de la alerta</h5>
      <p>
        Un texto simple para una alerta simple, incluso{" "}
        <a href="#">con hipervínculos</a>.
      </p>
    </div>
  );
};
Titulo.story = {
  name: "Título y texto"
};

export const Colores = (): JSX.Element[] => {
  return alertTypes.map(type => (
    <div key={type} className={`alert alert-${type}`} role="alert">
      Un texto simple para una alerta simple.
    </div>
  ));
};
