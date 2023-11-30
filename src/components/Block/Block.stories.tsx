// Base
import React from 'react';
import './Block.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Block } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Bloque de trámite',
  decorators: [withA11y]
};

const BUTTON_BLOCK = {
  name: 'Iniciar trámite',
  className: 'btn btn-lg btn-primary btn-block',
  url: '#',
  isButton: true
};
const BUTTON_BLOCK_LINK = {
  name: 'Iniciar trámite',
  className: 'btn btn-lg btn-primary btn-block',
  url: '#'
};
const BUTTON_PROGRESS_BAR_BLOCK = {
  name: 'Continuar trámite',
  className: 'btn btn-lg btn-primary btn-block',
  url: '#'
};

const PROGRESS_BAR_BLOCK = {
  type: 'success',
  width: 25
};

export const BlockTitle = (): JSX.Element => {
  return (
    <div className="storybook__container-block">
      <Block title="Iniciá el trámite y completá todos los pasos" button={BUTTON_BLOCK_LINK} positionSticky="48px" />
    </div>
  );
};

BlockTitle.story = { name: 'Con título' };

export const BlockText = (): JSX.Element => {
  return (
    <div className="storybook__container-block">
      <Block
        title="Iniciá el trámite y completá todos los pasos"
        text="Si tenés un trámite iniciado podés continuarlo desde acá."
        button={BUTTON_BLOCK}
        positionSticky="48px"
      />
    </div>
  );
};

BlockText.story = { name: 'Con bajada' };

export const BlockProgressBar = (): JSX.Element => {
  return (
    <div className="storybook__container-block">
      <Block
        title="Este es tu progreso en el trámite"
        button={BUTTON_PROGRESS_BAR_BLOCK}
        blockProgressBar={PROGRESS_BAR_BLOCK}
        positionSticky="48px"
      />
    </div>
  );
};

BlockProgressBar.story = { name: 'Con barra de progreso' };

export const BlockBackground = (): JSX.Element => {
  return (
    <div className="storybook__container-block">
      <Block
        title="Iniciá el trámite y completá todos los pasos"
        text="Si tenés un trámite iniciado podés continuarlo desde acá."
        button={BUTTON_BLOCK}
        isLight={true}
        positionSticky="48px"
      />
    </div>
  );
};

BlockBackground.story = { name: 'Con fondo' };
