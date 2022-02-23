import React from 'react';

import { withA11y } from '@storybook/addon-a11y';

//config
export default {
  title: 'Componentes|Customize Form Mobile',
  decorators: [withA11y]
};

export const CustomFormMobile = (): JSX.Element => {
  return (
    <div>
      <h2>Enlaces</h2>
      <h2 className="mt-4">Botones</h2>

      <div className="row">
        <div className="col-md-4">
          <form className="form-group">
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="">Nombre del campo *</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="">Nombre del campo *</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="">Nombre del campo *</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12">
                <label htmlFor="">Nombre del campo *</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
