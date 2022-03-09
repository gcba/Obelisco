import React from 'react';

export const BigAccess = (): JSX.Element => {
  return (
    <div>
      <div className="list-group-container">
        <div className="list-group">
          <a href="#" className="list-group-item">
            <span className="access-title">Acceso grande</span>
          </a>
          <a href="#" className="list-group-item hover">
            <span className="access-title">Acceso grande</span>
          </a>
          <a href="#" className="list-group-item focus">
            <span className="access-title">Acceso grande</span>
          </a>
          <a href="#" className="list-group-item list-group-item-logout">
            <span className="access-title">Cerrar sesión </span>
          </a>
        </div>
      </div>
    </div>
  );
};
