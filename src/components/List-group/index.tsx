import React from 'react';

export type AccessState = '' | 'hover' | 'active' | 'focus';

export type AccessSize = '' | 'item-sm';
export type AccessSizeNames = 'grande' | 'chico';

export interface AccessStateInterface {
  type: AccessState;
}
export interface AccessSizeInterface {
  type: AccessSize;
  name: AccessSizeNames;
}

export const AccessTypes: Array<AccessStateInterface> = [
  { type: '' },
  { type: 'hover' },
  { type: 'active' },
  { type: 'focus' }
];

export const AccessSizes: Array<AccessSizeInterface> = [
  { type: '', name: 'grande' },
  { type: 'item-sm', name: 'chico' }
];

export const AccessBorderComponent: React.FC<AccessStateInterface> = (
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

export const AccessDescriptionComponent: React.FC<AccessStateInterface> = (
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

export const AccessIconComponent: React.FC<AccessStateInterface> = (
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

export const AccessSizesComponent: React.FC<AccessSizeInterface> = (
  props: React.PropsWithChildren<AccessSizeInterface>
) => {
  const className = `list-group-item ${props.type}`.trim();
  return (
    <a href="#" className={className}>
      <span className="access-title">Acceso {props.name}</span>
    </a>
  );
};

export const AccessListHorizontal = (): JSX.Element => {
  return (
    <div className="list-group list-group-row">
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
    </div>
  );
};

export const AccessListVertical = (): JSX.Element => {
  return (
    <div className="list-group">
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
      <a href="#" className="list-group-item item-sm">
        <span className="access-title">
          <i className="bx bxs-info-circle"></i>
          Acceso
        </span>
      </a>
    </div>
  );
};
