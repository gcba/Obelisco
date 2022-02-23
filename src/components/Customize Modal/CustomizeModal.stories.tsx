import React from 'react';
import { withA11Y } from '@storybook/addon-a11y';

//config
export default {
  title: 'Componentes|Customize Modal',
  decorators: [withA11Y]
};

export const CardTypeOne = (): JSX.Element => {
  const MODALS = [
    { color: 'btn-secondary', secondColor: 'btn-danger' },
    { color: 'btn-link', secondColor: 'btn-primary' }
  ];
  return (
    <div>
      <h2>Modal</h2>

      {MODALS.map(({ color, secondColor }, index) => (
        <div
          className="modal d-block"
          tabIndex={index}
          role="dialog"
          key={index}
          style={{ top: index === 1 ? 300 : 0 }}>
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed </h4>
              </div>
              <div className="modal-body">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className={`btn ${color}`} data-dismiss="modal">
                  Acción 2
                </button>
                <button type="button" className={`btn ${secondColor}`}>
                  Acción 1
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="modal-backdrop show"></div>
    </div>
  );
};
