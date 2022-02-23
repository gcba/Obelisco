import React from 'react';
import { Form } from '../form.interface';

export const FormCardValidationComponent = (): JSX.Element => {
  const FORMS: Form[] = [
    { name: 'Default', style: 'form-control', text: 'XXXX XXXX XXXX XXXX' },
    { name: 'Focus', style: 'form-control focus', text: 'XXXX XXXX XXXX XXXX' },
    { name: 'Completed', style: '', val: '4574 2832 9238 2328' },
    { name: 'Asistencia', style: '', assistance: 'Texto de asistencia', text: '' },
    { name: 'Error', style: 'error', text: 'XXXX XXXX XXXX XXXX' }
  ];

  const [value, setValue] = React.useState<string>('');

  return (
    <div>
      <div className="row align-items-center">
        {FORMS.map(({ name, style, val, assistance, text }: Form, index) => {
          return (
            <>
              <div className="col-md-2" key={index}>
                <h3>{name}</h3>
              </div>
              <div className="col-md-4 p-2 ">
                <form className="form">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nombre del campo*</label>
                    {assistance && <small className="form-text text-muted">{assistance}</small>}
                    <input
                      type="text"
                      className={`form-control ${style}`}
                      value={val}
                      placeholder={text}
                      onChange={(event) => setValue(event.target.value)}
                    />
                    {style === 'error' && <small className="help-error">Este campo es requerido</small>}
                    {val && style === 'success' && <small className="help-success">Campo valido</small>}
                  </div>
                </form>
              </div>
              <div className="col-md-3 p-2 ">
                <form className="form">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Código de seguridad*</label>
                    {assistance && <small className="form-text text-muted">{assistance}</small>}
                    <input
                      type="number"
                      className={`form-control ${style}`}
                      value={val && val?.length > 4 ? 435 : ''}
                      placeholder={text && text?.length > 4 && style !== 'error' ? 'CVV' : '12'}
                      onChange={(event) => setValue(event.target.value)}
                    />
                    {style === 'error' && <small className="help-error">Este campo es requerido</small>}
                  </div>
                </form>
              </div>
              <div className="col-md-3 p-2 ">
                <form className="form">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Fecha de vencimiento*</label>
                    {assistance && <small className="form-text text-muted">{assistance}</small>}
                    <input
                      type="date"
                      className={`form-control ${style}`}
                      value={val}
                      placeholder={text}
                      onChange={(event) => setValue(event.target.value)}
                    />
                    {style === 'error' && <small className="help-error">Fecha inválida</small>}
                  </div>
                </form>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
