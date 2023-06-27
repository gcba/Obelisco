// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Modal',
  decorators: [withA11y]
};

export const Default = (): JSX.Element => {
  return (
    <>
      <div className="modal d-block" tabIndex={-1} role="dialog" id="exampleModal1">
        <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">¡Importante!</h4>
            </div>
            <hr />
            <div className="modal-body">
              <p>
                Antes de realizar la ficha de salud, tené en cuenta haber realizado los pasos previos correspondientes.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-link" data-dismiss="modal">
                Volver atrás
              </button>
              <button type="button" className="btn btn-primary">
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
};

Default.story = { name: 'Predeterminado' };

export const Types = (): JSX.Element => {
  return (
    <>
      <div className="btn-wrapper">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
          Modal de confirmación
        </button>

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">
          Modal de peligro
        </button>

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal3">
          Modal de reconocimiento
        </button>
      </div>

      <div className="modal fade" tabIndex={-1} role="dialog" id="exampleModal1">
        <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">¡Importante!</h4>
            </div>
            <hr />
            <div className="modal-body">
              <p>
                Antes de realizar la ficha de salud, tené en cuenta haber realizado los pasos previos correspondientes.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-link" data-dismiss="modal">
                Volver atrás
              </button>
              <button type="button" className="btn btn-primary">
                Continuar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex={-1} role="dialog" id="exampleModal2">
        <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Eliminar documento</h4>
            </div>
            <hr />
            <div className="modal-body">
              <p>El documento que seleccionaste será eliminado.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">
                Cancelar
              </button>
              <button type="button" className="btn btn-danger">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabIndex={-1} role="dialog" id="exampleModal3">
        <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <small>CARGA EXITOSA</small>
              <h4 className="modal-title">Los archivos se cargaron correctamente</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Types.story = { name: 'Tipos' };
