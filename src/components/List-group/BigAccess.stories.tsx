import React from 'react';

export const BigAccess = (): JSX.Element => {
  return (
    <div>
      <div className="list-group-container">
        <div className="list-group">
          <a href="#" className="list-group-item">
            Acceso grande
          </a>
          <a href="#" className="list-group-item hover">
            Acceso grande
          </a>
          <a href="#" className="list-group-item focus">
            Acceso grande
          </a>
          <a href="#" className="list-group-item list-group-item-logout">
            Cerrar sesión
          </a>
        </div>
      </div>
    </div>
  );
};
