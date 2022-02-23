import React from 'react';
import { Form } from '../form.interface';
import './FormSimple.scss';

export const FormSimpleComponent = (): JSX.Element => {
  const FORMS: Form[] = [
    { name: 'Estado predeterminado', style: 'form-control ' },
    { name: 'Focus', style: 'form-control focus' },
    { name: 'Completed', style: '', val: 'Campo completado' },
    { name: 'Asistencia', style: '', assistance: 'Texto de asistencia' },
    { name: 'Error', style: 'error', text: 'Ejemplo:...' },
    { name: 'Éxito', style: 'success', val: 'Campo completado' }
  ];

  return (
    <>
      {FORMS.map(({ name, style, val, assistance, text }: Form, index) => {
        return (
          <>
            <div className="offset-1 col-md-5 p-4 content" key={index}>
              <form className="form">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nombre del campo*</label>
                  {assistance && <small className="form-text text-muted">{assistance}</small>}
                  <input type="text" className={`form-control ${style}`} value={val} placeholder={text} />
                  {style === 'error' && <small className="help-error">Este campo es requerido</small>}
                  {val && style === 'success' && <small className="help-success">Campo valido</small>}
                </div>
              </form>
              <h3>{name}</h3>
            </div>

            <div className="offset-1 col-md-4 p-5 bg-form" key={index}>
              <form className="form">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nombre del campo*</label>
                  {assistance && <small className="form-text text-muted">{assistance}</small>}
                  <input type="text" className={`form-control ${style}`} value={val} placeholder={text} />
                  {style === 'error' && <small className="help-error">Este campo es requerido</small>}
                  {val && style === 'success' && <small className="help-success">Campo valido</small>}
                </div>
              </form>
            </div>
          </>
        );
      })}
    </>
  );
};
