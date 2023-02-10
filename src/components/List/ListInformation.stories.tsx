// Base
import React from 'react';
import './List.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Config
export default {
  title: 'Componentes|Listas',
  decorators: [withA11y]
};

export const Informacion = (): JSX.Element => {
  return (
    <>
      <div className="lists-wrapper">
        <div className="list-information">
          <span className="material-icons-round list-icon">local_police</span>
          <div className="list-body">
            <div className="list-text">
              <p className="small">Label</p>
              <div className="list-title">
                <h6 className="d-inline">Información importante</h6>
                <p className="small d-inline">Opcional más información</p>
              </div>
              <p className="small">
                <span className="material-icons-round list-text-icon">check_circle</span>
                Validación
              </p>
              <p className="small">
                Texto sin ícono{' '}
                <a href="#" target="_blank" rel="noreferrer">
                  Opcional Ubicación
                </a>
              </p>
            </div>
            <button className="btn btn-link btn-sm">Botón</button>
          </div>
        </div>
      </div>
      <div className="lists-wrapper">
        <div className="list-information-ul">
          <div className="list-body">
            <p className="list-text small">Lista con buleteado</p>
            <ul className="list-items small">
              <li className="list-item">
                <span className="material-icons-round list-item-icon">check</span>Bulet Uno
              </li>
              <li className="list-item">
                <span className="material-icons-round list-item-icon">check</span>Bulet Dos
              </li>
              <li className="list-item">
                <span className="material-icons-round list-item-icon">check</span>Bulet Tres
              </li>
              <li className="list-item">
                <span className="material-icons-round list-item-icon">check</span>Bulet Cuatro
              </li>
              <li className="list-item">
                <span className="material-icons-round list-item-icon">check</span>Bulet Cinco
              </li>
            </ul>
          </div>
          <button className="btn btn-link btn-sm">Botón</button>
        </div>
      </div>
      <div className="lists-wrapper">
        <div className="list-information-icon">
          <span className="material-icons-round list-icon">info</span>
          <div className="list-body">
            <p className="list-text">
              Información importante Para el examen práctico te brindaremos un turno en otra fecha en la Pista de Parque
              Extremo
            </p>
          </div>
        </div>
      </div>
      <div className="lists-wrapper">
        <div className="list-information-text">
          <div className="list-body">
            <h6 className="list-title">Texto en Bold</h6>
            <p className="small">Texto y información en regular</p>
          </div>
        </div>
      </div>
    </>
  );
};
Informacion.story = { name: 'Información' };
