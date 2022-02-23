import React from 'react';
import { Form } from '../form.interface';

export const FormRadioButtonGroupComponent = (): JSX.Element => {
  const FORM: Form[] = [
    { name: 'Estado predeterminado', style: '' },
    { name: 'Asistencia', style: '', assistance: 'Texto de asistencia' },
    { name: 'Completed', style: 'completed' },
    { name: 'Error', style: 'error' }
  ];

  const [value, setValue] = React.useState<boolean>(false);

  return (
    <div>
      {FORM.map(({ name, style, assistance }: Form, index) => (
        <div className="row align-items-center" key={index}>
          <div className="col-md-4 p-5">
            <form className="form">
              <div className="form-group">
                <label>Nombre del campo *</label>
                {assistance && <small className="form-text text-muted">{assistance}</small>}
                <div className="justify-input">
                  <input
                    type="radio"
                    className={`form-control ${style}`}
                    name="radio"
                    onChange={(event) => setValue(event.target.checked)}
                  />
                  <span>Primera opción</span>
                </div>
                <div className="justify-input">
                  <input
                    type="radio"
                    className={`form-control ${style}`}
                    name="radio"
                    onChange={(event) => setValue(event.target.checked)}
                  />
                  <span>Primera opción</span>
                </div>
                <div className="justify-input">
                  <input
                    type="radio"
                    className={`form-control ${style}`}
                    name="radio"
                    onChange={(event) => setValue(event.target.checked)}
                    checked={style === 'completed'}
                  />
                  <span>Primera opción</span>
                </div>
                {style === 'error' && <small className="help-error">Este campo es requerido</small>}
              </div>
            </form>
          </div>
          <div className="col-md-2">{name}</div>
          <div className="col-md-4 bg-form px-5 py-5">
            <form className="form">
              <div className="form-group">
                <label>Nombre del campo *</label>
                {assistance && <small className="form-text text-muted">{assistance}</small>}
                <div className="justify-input">
                  <input
                    type="radio"
                    className={`form-control ${style}`}
                    name="radio2"
                    onChange={(event) => setValue(event.target.checked)}
                  />
                  <span>Primera opción</span>
                </div>
                <div className="justify-input">
                  <input
                    type="radio"
                    className={`form-control ${style}`}
                    name="radio2"
                    onChange={(event) => setValue(event.target.checked)}
                  />
                  <span>Primera opción</span>
                </div>
                <div className="justify-input">
                  <input
                    type="radio"
                    className={`form-control ${style}`}
                    name="radio2"
                    onChange={(event) => setValue(event.target.checked)}
                    checked={style === 'completed'}
                  />
                  <span>Primera opción</span>
                </div>
                {style === 'error' && <small className="help-error">Este campo es requerido</small>}
              </div>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};
