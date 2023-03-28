// Base
import React from 'react';
import './Access.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Organismos|Acceso/Acceso completo',
  decorators: [withA11y]
};

export const Simple = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <div className="group-access">
        <div className="card-access">
          <div className="card-access-body reverse">
            <div>
              <h3 className="card-access-title">Título del acceso</h3>
              <p className="mb-0">Descripción del acceso</p>
            </div>
            <span className="card-access-icon descriptive">Nº</span>
          </div>
          <a href="#" className="list-group-item card-item">
            <span className="access-title">
              <i className="bx bxs-info-circle"></i>
              Acceso grande
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const ConListaDeAccesos = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <div className="group-access">
        <div className="card-access">
          <div className="card-access-body">
            <div>
              <h3 className="card-access-title">Título del acceso</h3>
              <p className="mb-0">Descripción del acceso</p>
            </div>
            <span className="card-access-icon descriptive">Nº</span>
          </div>
          <div className="container-access">
            <hr className="clearfix mt-0" />
            <div className="access-option">
              <a href="#" className="list-group-item item-sm">
                <i className="bx bxs-info-circle"></i>
                <div className="access-content">
                  <span className="access-title">Acceso</span>
                  <p className="access-text">Descripción (Opcional)</p>
                </div>
              </a>
              <a href="#" className="list-group-item item-sm">
                <i className="bx bxs-info-circle"></i>
                <div className="access-content">
                  <span className="access-title">Acceso</span>
                  <p className="access-text">Descripción (Opcional)</p>
                </div>
              </a>
              <a href="#" className="list-group-item item-sm">
                <i className="bx bxs-info-circle"></i>
                <div className="access-content">
                  <span className="access-title">Acceso</span>
                  <p className="access-text">Descripción (Opcional)</p>
                </div>
              </a>
              <hr className="clearfix my-0 mt-2" />
            </div>
          </div>
          <a href="#" className="list-group-item card-item no-shadow">
            <span className="access-title">
              <i className="bx bxs-info-circle"></i>
              Acceso grande
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

ConListaDeAccesos.story = {
  name: 'Con lista de accesos'
};

export const ConCategorias = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      <div className="group-access">
        <div className="card-access">
          <div className="card-access-body">
            <div>
              <h3 className="card-access-title">Título del acceso</h3>
              <p className="mb-0">Descripción del acceso</p>
            </div>
            <span className="card-access-icon descriptive">Nº</span>
          </div>
          <div className="container-access">
            <hr className="clearfix mt-0" />
            <div className="access-option">
              <h2 className="title-option font-weight-bold">Categoría 1</h2>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bxs-info-circle"></i>
                  Acceso chico
                </span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bxs-info-circle"></i>
                  Acceso chico
                </span>
              </a>
              <hr className="clearfix clearfix-category" />
              <h2 className="title-option font-weight-bold">Categoría 2</h2>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bxs-info-circle"></i>
                  Acceso chico
                </span>
              </a>
              <a href="#" className="list-group-item item-sm">
                <span className="access-title">
                  <i className="bx bxs-info-circle"></i>
                  Acceso chico
                </span>
              </a>
              <hr className="clearfix my-0 mt-2" />
            </div>
          </div>
          <a href="#" className="list-group-item card-item no-shadow">
            <span className="access-title">
              <i className="bx bxs-info-circle"></i>
              Acceso grande
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

ConCategorias.story = {
  name: 'Con categorías'
};
