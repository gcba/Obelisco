import * as React from 'react';

export type AccesoEstado = '' | 'hover' | 'active' | 'focus';

export interface AccesoEstadoInterface {
  type: AccesoEstado;
}

export const AccessTypes: Array<AccesoEstadoInterface> = [
  { type: '' },
  { type: 'hover' },
  { type: 'active' },
  { type: 'focus' }
];

export const AccesosBordeComponent: React.FC<AccesoEstadoInterface> = (
  props: React.PropsWithChildren<AccesoEstadoInterface>
) => {
  const { type } = props;
  const className = `list-group-item item-sm ${type}`.trim();
  return (
    <a href="#" className={className}>
      <span className="access-title">Acceso</span>
    </a>
  );
};

export const AccesoDescripcionComponent: React.FC<AccesoEstadoInterface> = (
  props: React.PropsWithChildren<AccesoEstadoInterface>
) => {
  const { type } = props;
  const className = `list-group-item item-sm ${type}`.trim();
  return (
    <a href="#" className={className}>
      <div className="access-content">
        <span className="access-title">Acceso</span>
        <p className="access-text">Descripción (Opcional)</p>
      </div>
    </a>
  );
};

export const AccesoIconoComponent: React.FC<AccesoEstadoInterface> = (
  props: React.PropsWithChildren<AccesoEstadoInterface>
) => {
  const { type } = props;
  const className = `list-group-item item-sm ${type}`.trim();
  return (
    <a href="#" className={className}>
      <i className="bx bxs-info-circle"></i>
      <div className="access-content">
        <span className="access-title">Acceso</span>
        <p className="access-text">Descripción (Opcional)</p>
      </div>
    </a>
  );
};
