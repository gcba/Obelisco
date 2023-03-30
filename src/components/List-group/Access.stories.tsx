// Base
import React from 'react';
import './List-group.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { AccesoDescripcionComponent, AccesosBordeComponent, AccesoIconoComponent, AccessTypes } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Accesos',
  decorators: [withA11y]
};

export const testeoHorizontal = (): JSX.Element => (
  <>
    <div className="list-group list-group-row">
      <a href="#" className="list-group-item">
        <span className="access-title">Acceso grande</span>
      </a>
      <a href="#" className="list-group-item hover">
        <span className="access-title">Acceso grande</span>
      </a>
      <a href="#" className="list-group-item focus">
        <span className="access-title">Acceso grande</span>
      </a>
      <a href="#" className="list-group-item list-group-item-logout">
        <span className="access-title">Cerrar sesión</span>
      </a>
    </div>
    <br />
    <div className="list-group list-group-row">
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">Acceso chico</span>
      </a>
      <a href="#" className="list-group-item item-sm hover">
        <span className="access-title">Acceso chico</span>
      </a>
      <a href="#" className="list-group-item item-sm focus">
        <span className="access-title">Acceso chico</span>
      </a>
      <a href="#" className="list-group-item item-sm list-group-item-logout">
        <span className="access-title">Cerrar sesión</span>
      </a>
    </div>
    <br />
    <div className="list-group list-group-row">
      <a href="#" className="list-group-item item-sm">
        <div className="access-content">
          <span className="access-title">Acceso chico</span>
          <p className="access-text">Descripción</p>
        </div>
      </a>
      <a href="#" className="list-group-item item-sm hover">
        <div className="access-content">
          <span className="access-title">Acceso chico</span>
          <p className="access-text">Descripción</p>
        </div>
      </a>
      <a href="#" className="list-group-item item-sm focus">
        <div className="access-content">
          <span className="access-title">Acceso chico</span>
          <p className="access-text">Descripción</p>
        </div>
      </a>
    </div>
    <br />
    <div className="list-group list-group-row">
      <a href="#" className="list-group-item">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-facebook-circle"></i>
          Acceso grande
        </span>
      </a>
      <a href="#" className="list-group-item">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-instagram"></i>
          Acceso grande
        </span>
      </a>
      <a href="#" className="list-group-item">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-twitter"></i>
          Acceso grande
        </span>
      </a>
      <a href="#" className="list-group-item">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-youtube"></i>
          Acceso grande
        </span>
      </a>
    </div>
    <br />
    <div className="card-deck max-cards-2">
      <div className="group-access">
        <div className="card-access">
          <div className="card-access-body reverse">
            <div>
              <h3 className="card-access-title">Título</h3>
              <p className="card-access-text">Bajada</p>
            </div>
            <i className="bx bxs-shield-x card-access-icon"></i>
          </div>
          <a href="#" className="list-group-item card-item">
            <span className="access-title">Acceso grande</span>
          </a>
        </div>
      </div>
      <div className="group-access">
        <div className="card-access">
          <div className="card-access-body reverse">
            <div>
              <h3 className="card-access-title">Título</h3>
              <p className="card-access-text">Bajada</p>
            </div>
            <i className="bx bxs-shield-x card-access-icon"></i>
          </div>
          <a href="#" className="list-group-item card-item">
            <span className="access-title">Acceso grande</span>
          </a>
        </div>
      </div>
      <div className="group-access">
        <div className="card-access">
          <div className="card-access-body reverse">
            <div>
              <h3 className="card-access-title">Título</h3>
              <p className="card-access-text">Bajada</p>
            </div>
            <i className="bx bxs-shield-x card-access-icon"></i>
          </div>
          <a href="#" className="list-group-item card-item">
            <span className="access-title">Acceso grande</span>
          </a>
        </div>
      </div>
    </div>
    <br />
    <div className="list-group list-group-row">
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-facebook-circle"></i>
          Acceso chico
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-instagram"></i>
          Acceso chico
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-twitter"></i>
          Acceso chico
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bx-sm align-middle mr-2 bxl-youtube"></i>
          Acceso chico
        </span>
      </a>
    </div>
  </>
);

export const testeoListaDeAccesos = (): JSX.Element => (
  <>
    <div className="list-group-container">
      <div className="list-group">
        <div className="group-access">
          <div className="card-access">
            <div className="card-access-body p-list">
              <div className="">
                <h3 className="card-access-title">Titulo</h3>
                <p className="card-access-text">Bajada</p>
              </div>
              <i className="bx bxs-shield-x card-access-icon"></i>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
              </div>
            </div>
            <a href="#" className="list-group-item card-item">
              <span className="access-title">Acceso grande</span>
            </a>
          </div>
        </div>
        <div className="group-access">
          <div className="card-access">
            <div className="card-access-body p-list">
              <div className="">
                <h3 className="card-access-title">Titulo</h3>
                <p className="card-access-text">Bajada</p>
              </div>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
              </div>
            </div>
            <a href="#" className="list-group-item card-item">
              <span className="access-title">Acceso grande</span>
            </a>
          </div>
        </div>
        <div className="group-access">
          <div className="card-access">
            <div className="card-access-body p-list">
              <div className="">
                <h3 className="card-access-title">Titulo</h3>
                <p className="card-access-text">Bajada</p>
              </div>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="list-group-container">
      <div className="list-group">
        <div className="group-access">
          <div className="card-access">
            <div className="card-access-body p-list">
              <div className="">
                <h3 className="card-access-title">Titulo</h3>
                <p className="card-access-text">Bajada</p>
              </div>
              <i className="bx bxs-shield-x card-access-icon"></i>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
                <h2 className="title-option">Categoria 1</h2>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <h2 className="title-option">Categoria 2</h2>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <span className="access-title">Acceso chico</span>
                </a>
              </div>
            </div>
            <a href="#" className="list-group-item card-item">
              <span className="access-title">Acceso grande</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="list-group-container">
      <div className="list-group">
        <div className="group-access">
          <div className="card-access">
            <div className="card-access-body p-list">
              <div className="">
                <h3 className="card-access-title">Titulo</h3>
                <p className="card-access-text">Bajada</p>
              </div>
              <span className="card-access-icon descriptive">Nº</span>
            </div>
            <div className="container-access">
              <hr className="clearfix" />
              <div className="access-option">
                <a href="#" className="list-group-item item-sm">
                  <div className="access-content">
                    <span className="access-title">Acceso chico</span>
                    <p className="access-text">Descripción</p>
                  </div>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <div className="access-content">
                    <span className="access-title">Acceso chico</span>
                    <p className="access-text">Descripción</p>
                  </div>
                </a>
                <a href="#" className="list-group-item item-sm">
                  <div className="access-content">
                    <span className="access-title">Acceso chico</span>
                    <p className="access-text">Descripción</p>
                  </div>
                </a>
              </div>
            </div>
            <a href="#" className="list-group-item card-item">
              <span className="access-title">Acceso grande</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export const testeoVertical = (): JSX.Element => (
  <>
    <div className="list-group-container">
      <div className="list-group">
        <a href="#" className="list-group-item">
          <span className="access-title">Acceso grande</span>
        </a>
        <a href="#" className="list-group-item hover">
          <span className="access-title">Acceso grande</span>
        </a>
        <a href="#" className="list-group-item focus">
          <span className="access-title">Acceso grande</span>
        </a>
        <a href="#" className="list-group-item list-group-item-logout">
          <span className="access-title">Cerrar sesión</span>
        </a>
      </div>
    </div>
    <br />
    <div className="list-group-container">
      <div className="list-group">
        <a href="#" className="list-group-item item-sm">
          <span className="access-title">Acceso chico</span>
        </a>
        <a href="#" className="list-group-item item-sm hover">
          <span className="access-title">Acceso chico</span>
        </a>
        <a href="#" className="list-group-item item-sm focus">
          <span className="access-title">Acceso chico</span>
        </a>
        <a href="#" className="list-group-item item-sm list-group-item-logout">
          <span className="access-title">Cerrar sesión</span>
        </a>
      </div>
    </div>
    <br />
    <div className="list-group-container">
      <div className="list-group">
        <a href="#" className="list-group-item item-sm">
          <div className="access-content">
            <span className="access-title">Acceso chico</span>
            <p className="access-text">Descripción</p>
          </div>
        </a>
        <a href="#" className="list-group-item item-sm hover">
          <div className="access-content">
            <span className="access-title">Acceso chico</span>
            <p className="access-text">Descripción</p>
          </div>
        </a>
        <a href="#" className="list-group-item item-sm focus">
          <div className="access-content">
            <span className="access-title">Acceso chico</span>
            <p className="access-text">Descripción</p>
          </div>
        </a>
      </div>
    </div>
    <br />
    <div className="list-group-container">
      <div className="list-group">
        <a href="#" className="list-group-item">
          <span className="access-title">
            <i className="bx bx-sm align-middle mr-2 bxl-facebook-circle"></i>
            Acceso grande
          </span>
        </a>
        <a href="#" className="list-group-item">
          <span className="access-title">
            <i className="bx bx-sm align-middle mr-2 bxl-instagram"></i>
            Acceso grande
          </span>
        </a>
        <a href="#" className="list-group-item">
          <span className="access-title">
            <i className="bx bx-sm align-middle mr-2 bxl-twitter"></i>
            Acceso grande
          </span>
        </a>
        <a href="#" className="list-group-item">
          <span className="access-title">
            <i className="bx bx-sm align-middle mr-2 bxl-youtube"></i>
            Acceso grande
          </span>
        </a>
      </div>
      <br />
      <div className="group-access">
        <div className="card-access">
          <div className="card-access-body">
            <div>
              <h3 className="card-access-title">Título</h3>
              <p className="card-access-text">Bajada</p>
            </div>
            <i className="bx bxs-shield-x card-access-icon"></i>
          </div>
          <a href="#" className="list-group-item card-item">
            <span className="access-title">Acceso grande</span>
          </a>
        </div>
      </div>
      <div className="group-access">
        <div className="card-access">
          <div className="card-access-body reverse">
            <div>
              <h3 className="card-access-title">Título</h3>
              <p className="card-access-text">Bajada</p>
            </div>
            <i className="bx bxs-shield-x card-access-icon"></i>
          </div>
          <a href="#" className="list-group-item card-item">
            <span className="access-title">Acceso grande</span>
          </a>
        </div>
      </div>
    </div>
    <br />
    <div className="list-group-container">
      <div className="list-group">
        <a href="#" className="list-group-item item-sm">
          <span className="access-title">
            <i className="bx bx-sm align-middle mr-2 bxl-facebook-circle"></i>
            Acceso chico
          </span>
        </a>
        <a href="#" className="list-group-item item-sm">
          <span className="access-title">
            <i className="bx bx-sm align-middle mr-2 bxl-instagram"></i>
            Acceso chico
          </span>
        </a>
        <a href="#" className="list-group-item item-sm">
          <span className="access-title">
            <i className="bx bx-sm align-middle mr-2 bxl-twitter"></i>
            Acceso chico
          </span>
        </a>
        <a href="#" className="list-group-item item-sm">
          <span className="access-title">
            <i className="bx bx-sm align-middle mr-2 bxl-youtube"></i>
            Acceso chico
          </span>
        </a>
      </div>
    </div>
  </>
);

export const AccesosConBorde = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      {AccessTypes.map((item, index) => (
        <AccesosBordeComponent key={index} type={item.type} />
      ))}
    </div>
  </div>
);

AccesosConBorde.story = {
  name: 'Accesos con borde'
};

export const AccesoConDescripcion = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      {AccessTypes.map((item, index) => (
        <AccesoDescripcionComponent key={index} type={item.type} />
      ))}
    </div>
  </div>
);

AccesoConDescripcion.story = {
  name: 'Accesos con descripción'
};

export const AccesosConIcono = (): JSX.Element => (
  <div className="list-group-container">
    <div className="list-group">
      {AccessTypes.map((item, index) => (
        <AccesoIconoComponent key={index} type={item.type} />
      ))}
    </div>
  </div>
);

AccesosConIcono.story = {
  name: 'Accesos con ícono'
};

export const AccesosTamanos = (): JSX.Element => (
  <div className="list-group-container-sizes">
    <div className="list-group">
      <a href="#" className="list-group-item">
        <span className="access-title">Acceso grande</span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">Acceso chico</span>
      </a>
    </div>
  </div>
);

AccesosTamanos.story = {
  name: 'Tamaños de accesos'
};
