import React from 'react';
import { Form } from '../form.interface';

export const FormDateComponent = (): JSX.Element => {
  const FORM: Form[] = [
    { name: 'Default', style: '', text: '', val: '' },
    { name: 'Focus', style: 'focus', text: '', val: '1989-05-14' },
    { name: 'Completed', style: 'completed', text: '', val: '' },
    { name: 'Asistencia', style: 'assistance', text: '', val: '' },
    { name: 'Error', style: 'error', text: '', val: '1989-05-14' },
    { name: 'Éxito', style: 'success', text: '', val: '1989-05-14' },
    {
      name: 'Deshabilitado',
      style: 'disabled',
      text: '',
      val: '1989-05-14'
    }
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
                  <input
                    type="date"
                    id={name}
                    className={`form-control ${style}`}
                    value={val}
                    placeholder={text}
                    onChange={(event) => setValue(event.target.value)}
                    disabled={style === 'disabled'}
                  />
                  {style === 'success' && <small className="help-success">Campo completado</small>}
                  {style === 'error' && <small className="help-error">Este campo es requerido</small>}
                </div>
              </div>
              <div className="col-md-2">{name}</div>
              <div className="col-md-4 bg-form px-5 py-5">
                <div className={style === 'disabled' ? `form-group ${style}` : 'form-group'}>
                  <label htmlFor={name}>Nombre del campo *</label>
                  {style === 'assistance' && <small className="form-text text-muted">Texto de assistencia</small>}
                  <input
                    type="date"
                    id={name}
                    className={`form-control ${style}`}
                    value={val}
                    placeholder={text}
                    onChange={(event) => setValue(event.target.value)}
                    disabled={style === 'disabled'}
                  />
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
