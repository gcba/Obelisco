import React from 'react';
import { Form } from '../form.interface';

export const FormRadioButtonComponent = (): JSX.Element => {
  const FORM: Form[] = [
    { name: 'Estado predeterminado', style: '' },
    { name: 'Hover', style: 'active' },
    { name: 'Focus', style: 'focus' },
    { name: 'Completed', style: 'completed' },
    { name: 'Disabled', style: 'disabled' },
    { name: 'Error', style: 'error' }
  ];

  const [value, setValue] = React.useState<boolean>(false);

  return (
    <div>
      {FORM.map(({ name, style, text, val }: Form, index) => {
        return (
          <div key={index}>
            <div className="row align-items-center">
              <div className="col-md-4 p-5">
                <form className="form">
                  <div className={style === 'disabled' ? `form-group ${style}` : 'form-group'}>
                    <label htmlFor={name}>Nombre del campo *</label>
                    <div className="justify-input">
                      <input
                        type="radio"
                        className={`form-control ${style}`}
                        value={val}
                        placeholder={text}
                        onChange={(event) => setValue(event.target.checked)}
                        disabled={style === 'disabled'}
                        checked={style === 'completed'}
                      />
                      <span className={style}>Primera opción</span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-2">{name}</div>
              <div className="col-md-4 bg-form px-5 py-5">
                <form className="form">
                  <div className={style === 'disabled' ? `form-group ${style}` : 'form-group'}>
                    <label htmlFor={name}>Nombre del campo *</label>
                    <div className="justify-input">
                      <input
                        type="radio"
                        className={`form-control ${style}`}
                        value={val}
                        placeholder={text}
                        onChange={(event) => setValue(event.target.checked)}
                        disabled={style === 'disabled'}
                        checked={style === 'completed'}
                      />
                      <span className={style}>Primera opción</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
