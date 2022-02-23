import React from 'react';
import { Form } from '../form.interface';

export const FormSearchComponent = (): JSX.Element => {
  const FORM: Form[] = [
    { name: 'Default', style: '', text: 'Buscar...', val: '' },
    { name: 'Focus', style: 'focus', text: 'Buscar...', val: '' },
    { name: 'Seleccionado', style: 'selected', text: 'Buscar...', val: 'Coronavirus' },
    { name: 'Completado', style: 'completed', text: 'Buscar...', val: 'Coronavirus' }
  ];

  const [value, setValue] = React.useState<string>('');
  return (
    <div>
      {FORM.map(({ name, style, text, val }: Form, index) => {
        return (
          <div key={index}>
            <div className="row align-items-center">
              <div className="col-md-4 p-5">
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control input-search ${style}`}
                    value={val}
                    placeholder={text}
                    onChange={(event) => setValue(event.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-2">{name}</div>
              <div className="col-md-4 bg-form px-5 py-5">
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control input-search ${style}`}
                    value={val}
                    placeholder={text}
                    onChange={(event) => setValue(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
