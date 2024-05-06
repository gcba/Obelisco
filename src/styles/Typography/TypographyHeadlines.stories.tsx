// Base
import React from 'react';
import './Typography.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '.';

// Configuración general del componente
export default {
  title: 'Estilos|Tipografía/Titulares',
  decorators: [withA11y]
};

export const TagL = (): JSX.Element => {
  return (
    <>
      <Typography as="p" className="headline-lg">
        Titular L: Familia tipográfica: Nunito | Tamaño: 20px | Interlineado: 24px.
      </Typography>
      <Typography as="p" className="headline-lg">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-lg" weight="font-weight-semibold">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-lg" weight="font-weight-bold">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-lg underline-1">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-lg underline-1" weight="font-weight-bold">
        Esto es un texto de titulares
      </Typography>
    </>
  );
};

TagL.story = { name: 'Titulares L' };

export const TagM = (): JSX.Element => {
  return (
    <>
      <Typography as="p" className="headline-md">
        Titular M: Familia tipográfica: Nunito | Tamaño: 18px | Interlineado: 24px.
      </Typography>
      <Typography as="p" className="headline-md">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-md" weight="font-weight-semibold">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-md" weight="font-weight-bold">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-md underline-1">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-md underline-1" weight="font-weight-bold">
        Esto es un texto de titulares
      </Typography>
    </>
  );
};

TagM.story = { name: 'Titulares M' };

export const TagS = (): JSX.Element => {
  return (
    <>
      <Typography as="p" className="headline-sm">
        Titular M: Familia tipográfica: Nunito | Tamaño: 16px | Interlineado: 20px.
      </Typography>
      <Typography as="p" className="headline-sm">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-sm" weight="font-weight-semibold">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-sm" weight="font-weight-bold">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-sm underline-1">
        Esto es un texto de titulares
      </Typography>
      <Typography as="p" className="headline-sm underline-1" weight="font-weight-bold">
        Esto es un texto de titulares
      </Typography>
    </>
  );
};

TagS.story = { name: 'Titulares S' };
