/* eslint-disable prettier/prettier */
// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Config
export default {
  title: 'Componentes|Panel',
  decorators: [withA11y]
};

export const PanelInformacion = (): JSX.Element => {
  return (
    <div className="container">
      <div className="panel-deck max-cards-2">
        <div className="card card-simple card-horizontal">
          <img src="horizontal-panel/Icono1.svg" className="card-img-left-panel" alt="descripción alternativa" />
          <div className="card-body">
            <h4 className="card-title">Plataformas digitales</h4>
            <p className="card-text-panel">Mantenemos las plataformas y damos soporte a las áreas de gobierno.</p>
          </div>
        </div>
        <div className="card card-simple card-horizontal">
          <img src="horizontal-panel/Icono3.svg" className="card-img-left-panel" alt="descripción alternativa" />
          <div className="card-body">
            <h4 className="card-title">Experiencia Digital</h4>
            <p className="card-text-panel">
              Diseñamos estrategias y productos digitales para mejorar la experiencia de los vecinos.
            </p>
          </div>
        </div>
        <div className="card card-simple card-horizontal">
          <img src="horizontal-panel/Icono2.svg" className="card-img-left-panel" alt="descripción alternativa" />
          <div className="card-body">
            <h4 className="card-title">Sistema de atención integral</h4>
            <p className="card-text-panel">Asistencia ante emergencias y desastres.</p>
          </div>
        </div>
        <div className="card card-simple card-horizontal">
          <img src="horizontal-panel/Icono4.svg" className="card-img-left-panel" alt="descripción alternativa" />
          <div className="card-body">
            <h4 className="card-title">Trámites en línea</h4>
            <p className="card-text-panel">Gestioná trámites y solicitudes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

PanelInformacion.story = { name: 'Panel de informacion' };
