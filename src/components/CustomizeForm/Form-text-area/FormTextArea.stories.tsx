import React from 'react';
import { Form } from '../form.interface';

export const FormTextAreaComponent = (): JSX.Element => {
  const FORM: Form[] = [
    { name: 'Estado predeterminado', style: '', text: 'Mensaje' },
    { name: 'Focus', style: 'focus', text: 'Mensaje' },
    { name: 'Completed', style: 'completed', val: 'Campo de mensaje completado' },
    { name: 'Asistencia', style: 'assistance', text: 'Mensaje' },
    { name: 'Error', style: 'error', text: 'Mensaje' }
  ];

  const [value, setValue] = React.useState<string>('');

  return (
    <div>
      {FORM.map(({ name, style, text, val }: Form, index) => {
        return (
          <div key={index}>
            <div className="row align-items-center">
              <div className="col-md-4 p-5">
                <div className={style === 'disabled' ? `form-group ${style}` : 'form-group'}>
                  <label htmlFor={name}>Nombre del campo *</label>
                  {style === 'assistance' && <small className="form-text text-muted">Texto de assistencia</small>}
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={5}
                    className={`form-control ${style}`}
                    value={val}
                    placeholder={text}
                    onChange={(event) => setValue(event.target.value)}
                    disabled={style === 'disabled'}></textarea>
                  {style === 'success' && <small className="help-success">Campo completado</small>}
                  {style === 'error' && <small className="help-error">Este campo es requerido</small>}
                </div>
              </div>
              <div className="col-md-2">{name}</div>
              <div className="col-md-4 bg-form px-5 py-5">
                <div className={style === 'disabled' ? `form-group ${style}` : 'form-group'}>
                  <label htmlFor={name}>Nombre del campo *</label>
                  {style === 'assistance' && <small className="form-text text-muted">Texto de assistencia</small>}
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={5}
                    className={`form-control ${style}`}
                    value={val}
                    placeholder={text}
                    onChange={(event) => setValue(event.target.value)}
                    disabled={style === 'disabled'}></textarea>
                  {style === 'success' && <small className="help-success">Campo completado</small>}
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
