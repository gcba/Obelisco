import React from 'react';
import { Form } from '../form.interface';

export const FormSelectorComponent = (): JSX.Element => {
  const FORM: Form[] = [
    { name: 'Estado predeterminado', style: 'default' },
    { name: 'Focus', style: 'focus' },
    { name: 'Completed', style: 'completed' },
    { name: 'Asistencia', style: 'assistance' },
    { name: 'Error', style: 'error' },
    { name: 'Deshabilitado', style: 'disabled' }
  ];

  return (
    <div>
      {FORM.map(({ name, style }: Form, index) => {
        return (
          <div key={index}>
            <div className="row align-items-center">
              <div className="col-md-4 p-5">
                <div className="form-group">
                  {style === 'assistance' && <small>Campo de asistencia</small>}
                  <select className={`form-control custom-select ${style}`} disabled={style === 'disabled'}>
                    <option>Seleccionar</option>
                  </select>
                  {style === 'error' && <small className="help-error">Este campo es requerido</small>}
                </div>
              </div>
              <div className="col-md-2">{name}</div>
              <div className="col-md-4 bg-form px-5 py-5">
                <div className="form-group">
                  {style === 'assistance' && <small>Campo de asistencia</small>}
                  <select className={`form-control custom-select ${style}`} disabled={style === 'disabled'}>
                    <option>Seleccionar</option>
                  </select>
                  {style === 'error' && <small className="help-error">Este campo es requerido</small>}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
