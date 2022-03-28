// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes | Modal',
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
