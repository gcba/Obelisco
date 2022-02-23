import React from 'react';
import { Form } from '../form.interface';

export const FormSelectorNumericComponent = (): JSX.Element => {
  const FORM: Form[] = [
    { name: 'Estado predeterminado', style: '', text: '0' },
    { name: 'Focus', style: 'focus', text: '0' },
    { name: 'Completed', style: 'completed', text: '0', val: 9 },
    { name: 'Asistencia', style: '', assistance: 'Campo de asistencia', text: '0' },
    { name: 'Error', style: 'error', text: '0' },
    { name: 'Éxito', style: 'success', text: '0' },
    { name: 'Disabled', style: 'disabled', text: '0' }
  ];

  const [value, setValue] = React.useState<string>('');

  return (
    <div>
      {FORM.map(({ name, style, assistance, text, val }: Form, index) => (
        <div className="row align-items-center" key={index}>
          <div className="offset-2 col-md-2 p-5">
            <form className="form">
              <div className={style === 'disabled' ? `form-group ${style}` : 'form-group'}>
                <label>Nombre del campo *</label>
                {assistance && <small className="form-text text-muted">{assistance}</small>}
                <div className="justify-input">
                  <input
                    type="number"
                    className={`form-control ${style}`}
                    placeholder={text}
                    value={val}
                    onChange={(event) => setValue(event.target.value)}
                    disabled={style === 'disabled'}
                  />
                </div>
                {style === 'error' && <small className="help-error">Este campo es requerido</small>}
                {style === 'success' && <small className="help-success">Campo valido</small>}
              </div>
            </form>
          </div>
          <div className="col-md-2">{name}</div>
          <div className="col-md-2 bg-form px-5 py-5">
            <form className="form">
              <div className={style === 'disabled' ? `form-group ${style}` : 'form-group'}>
                <label>Nombre del campo *</label>
                {assistance && <small className="form-text text-muted">{assistance}</small>}
                <div className="justify-input">
                  <input
                    type="number"
                    className={`form-control ${style}`}
                    placeholder={text}
                    value={val}
                    onChange={(event) => setValue(event.target.value)}
                    disabled={style === 'disabled'}
                  />
                </div>
                {style === 'error' && <small className="help-error">Este campo es requerido</small>}
                {style === 'success' && <small className="help-success">Campo valido</small>}
              </div>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};
