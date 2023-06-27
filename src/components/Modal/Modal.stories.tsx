// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Componentes|Modal',
  decorators: [withA11y]
};

export const Generico = (): JSX.Element => {
  return (
    <>
      <div className="modal d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal</h4>
            </div>
            <div className="modal-body">
              <p>Esta es la descripción del modal.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Acción 2
              </button>
              <button type="button" className="btn btn-danger">
                Acción 1
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
};

Generico.story = { name: 'Genérico' };

export const Demo = (): JSX.Element => {
  return (
    <div>
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Ver modal
      </button>

      <div className="modal fade" tabIndex={-1} role="dialog" id="exampleModal">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal</h4>
            </div>
            <div className="modal-body">
              <p>Esta es la descripción del modal.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-link" data-dismiss="modal">
                Acción 2
              </button>
              <button type="button" className="btn btn-primary">
                Acción 1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Demo.story = { name: 'Demo' };

export const Test = (): JSX.Element => {
  return (
    <div>
      <div className="btn-wrapper">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
          Ejemplo 1
        </button>

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">
          Ejemplo 2
        </button>

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal3">
          Ejemplo 3
        </button>
      </div>

      <div className="modal fade" tabIndex={-1} role="dialog" id="exampleModal1">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <small>CARGA EXITOSA</small>
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

      <div className="modal fade" tabIndex={-1} role="dialog" id="exampleModal2" data-backdrop="static">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <small>CARGA EXITOSA</small>
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
        <div className="modal-dialog modal-sm" role="document">
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
    </div>
  );
};
