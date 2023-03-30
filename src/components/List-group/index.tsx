import * as React from 'react';

export type AccessState = '' | 'hover' | 'active' | 'focus';

export interface AccessStateInterface {
  type: AccessState;
}

export const AccessTypes: Array<AccessStateInterface> = [
  { type: '' },
  { type: 'hover' },
  { type: 'active' },
  { type: 'focus' }
];

export const AccesosBordeComponent: React.FC<AccessStateInterface> = (
  props: React.PropsWithChildren<AccessStateInterface>
) => {
  const { type } = props;
  const className = `list-group-item item-sm ${type}`.trim();
  return (
    <a href="#" className={className}>
      <span className="access-title">Acceso</span>
    </a>
  );
};

export const AccesoDescripcionComponent: React.FC<AccessStateInterface> = (
  props: React.PropsWithChildren<AccessStateInterface>
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

export const AccesoIconoComponent: React.FC<AccessStateInterface> = (
  props: React.PropsWithChildren<AccessStateInterface>
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
