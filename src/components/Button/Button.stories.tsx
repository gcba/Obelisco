// Base
import React from "react";
import "../../scss/obelisco.scss";
import "./Button.stories.scss";

// Addons
import { withA11y } from "@storybook/addon-a11y";
import { withXD } from "storybook-addon-xd-designs";

// Components
import { types, sizes } from "../utils";
import { Button } from "./Button";
import * as notes from "./Button.md";

// Config
export default {
  title: "Componentes|Botón",
  component: Button,
  decorators: [withA11y, withXD],
  parameters: {
    notes
  }
};

export const Colores = (): JSX.Element[] => {
  return types.map(type => (
    <Button key={type} type={type}>
      {type}
    </Button>
  ));
};
Colores.story = {
  parameters: {
    design: {
      artboardUrl:
        "https://xd.adobe.com/view/fccdcd08-c6ec-4a4c-5bd4-97fe07baaf7b-8afc/screen/a7f688b8-475d-4fa0-83bf-01002ef05018/Colores"
    }
  }
};

export const Sizes = (): JSX.Element[] => {
  return sizes.map(size => (
    <Button key={size} type="secondary" size={size}>
      {size}
    </Button>
  ));
};
Sizes.story = {
  name: "Tamaños",
  parameters: {
    design: {
      artboardUrl:
        "https://xd.adobe.com/view/fccdcd08-c6ec-4a4c-5bd4-97fe07baaf7b-8afc/screen/1345bc77-fc2b-4242-a246-8a371090fa1b/Tama-os"
    }
  }
};

export const Deshabilitado = (): JSX.Element => {
  return (
    <Button type="secondary" disabled={true}>
      Deshabilitado
    </Button>
  );
};
Deshabilitado.story = {
  parameters: {
    design: {
      artboardUrl:
        "https://xd.adobe.com/view/fccdcd08-c6ec-4a4c-5bd4-97fe07baaf7b-8afc/screen/bb9c94a8-fe83-4fa6-aafd-4ee74ee35c9f/Deshabilitado"
    }
  }
};

export const Expandible = (): JSX.Element => {
  return (
    <div className="btn-block-wrapper">
      <Button type="secondary" block={true}>
        Expandible
      </Button>
    </div>
  );
};
Expandible.story = {
  parameters: {
    design: {
      artboardUrl:
        "https://xd.adobe.com/view/fccdcd08-c6ec-4a4c-5bd4-97fe07baaf7b-8afc/screen/20f346ea-c2f4-423a-b908-8577f046fd10/Expandible"
    }
  }
};
