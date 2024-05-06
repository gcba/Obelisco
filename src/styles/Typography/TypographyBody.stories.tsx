// Base
import React from 'react';
import './Typography.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '.';

// Configuración general del componente
export default {
  title: 'Estilos|Tipografía/Cuerpo',
  decorators: [withA11y]
};

export const CuerpoXl = (): JSX.Element => {
  return (
    <div className="col-12 col-md-6">
      <Typography as="p" className="lead">
        Cuerpo XL: Familia tipográfica: Open Sans | Tamaño: 20px | Interlineado: 28px.
      </Typography>

      <Typography as="p" className="lead">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="lead" weight="font-weight-semibold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="lead" weight="font-weight-bold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="lead font-italic">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="lead underline-1">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>
    </div>
  );
};

CuerpoXl.story = { name: 'Cuerpo XL' };

export const CuerpoL = (): JSX.Element => {
  return (
    <div className="col-12 col-md-6">
      <Typography as="p" className="text-lg">
        Cuerpo L: Familia tipográfica: Open Sans | Tamaño: 18px | Interlineado: 28px.
      </Typography>

      <Typography as="p" className="text-lg">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-lg" weight="font-weight-semibold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-lg" weight="font-weight-bold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-lg font-italic">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-lg underline-1">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>
    </div>
  );
};
//este es el nuevo
CuerpoL.story = { name: 'Cuerpo L' };

export const CuerpoM = (): JSX.Element => {
  return (
    <div className="col-12 col-md-6">
      <Typography as="p" className="text-md">
        Cuerpo M: Familia tipográfica: Open Sans | Tamaño: 16px | Interlineado: 24px.
      </Typography>

      <Typography as="p" className="text-md">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-md" weight="font-weight-semibold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-md" weight="font-weight-bold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-md font-italic">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-md underline-1">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>
    </div>
  );
};
//asignarle los estilos a la p y a la clase text-md ya que es el texto por defecto
CuerpoM.story = {
  name: 'Cuerpo M'
};

export const CuerpoS = (): JSX.Element => {
  return (
    <div className="col-12 col-md-6">
      <Typography as="p" className="text-sm">
        Cuerpo S: Familia tipográfica: Open Sans | Tamaño: 14px | Interlineado: 20px.
      </Typography>

      <Typography as="p" className="text-sm">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-sm" weight="font-weight-semibold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-sm" weight="font-weight-bold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-sm font-italic">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-sm underline-1">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>
    </div>
  );
}; // el ejemplo de la clase small, no se mostraria ya que se da a lugar la nueva clase text-sm
CuerpoS.story = {
  name: 'Cuerpo S'
};

export const CuerpoXs = (): JSX.Element => {
  return (
    <div className="col-12 col-md-6">
      <Typography as="p" className="text-xs">
        Cuerpo XS: Familia tipográfica: Open Sans | Tamaño: 12px | Interlineado: 16px.
      </Typography>

      <Typography as="p" className="text-xs">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-xs" weight="font-weight-semibold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-xs" weight="font-weight-bold">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-xs font-italic">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>

      <Typography as="p" className="text-xs underline-1">
        Este es un párrafo de Obelisco, el sistema de diseño del Gobierno de la Ciudad de Buenos Aires.
      </Typography>
    </div>
  );
};
CuerpoXs.story = {
  name: 'Cuerpo XS'
};
