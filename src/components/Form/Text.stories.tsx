// Base
import React from "react";

// Addons
import { withA11y } from "@storybook/addon-a11y";

// Components

// Config
export default {
  title: "Componentes|Formulario/Texto",
  decorators: [withA11y]
};

export const Texto = (): JSX.Element => {
  return (
    <div className="form-group">
      <label htmlFor="name-input">Nombre</label>
      <input
        type="text"
        className="form-control"
        id="name-input"
        name="name"
        placeholder="Ejemplo: Camila"
      />
    </div>
  );
};

export const Numero = (): JSX.Element => {
  return (
    <div className="form-group">
      <label htmlFor="number-input">Edad</label>
      <input
        type="number"
        className="form-control"
        id="number-input"
        name="number"
        placeholder=""
      />
    </div>
  );
};
Numero.story = { name: "Número" };

export const CorreoElectronico = (): JSX.Element => {
  return (
    <div className="form-group">
      <label htmlFor="email-input">Correo electrónico</label>
      <input
        type="email"
        className="form-control"
        id="email-input"
        name="email"
        aria-describedby="email-help"
        placeholder="nombre@ejemplo.com"
      />
      <small id="email-help" className="form-text text-muted">
        Nunca vamos a compartir tu correo electrónico con nadie.
      </small>
    </div>
  );
};
CorreoElectronico.story = { name: "Correo electrónico" };

export const Fecha = (): JSX.Element => {
  return (
    <div className="form-group">
      <label htmlFor="date-input">Fecha</label>
      <input
        type="date"
        className="form-control"
        id="date-input"
        name="date"
        aria-describedby="date-help"
      />
      <small id="date-help" className="form-text text-muted">
        Ingrese una fecha posterior a hoy.
      </small>
    </div>
  );
};

export const BloqueDeTexto = (): JSX.Element => {
  return (
    <div className="form-group">
      <label htmlFor="text-area">Bloque de texto</label>
      <textarea className="form-control" id="text-area" rows={3}></textarea>
    </div>
  );
};
BloqueDeTexto.story = { name: "Bloque de texto" };
