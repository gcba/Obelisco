import React from 'react';

export const SmallAccess = (): JSX.Element => {
  return (
    <div>
      <div className="list-group-container">
        <div className="list-group">
          <a href="#" className="list-group-item item-sm">
            Acceso chico
          </a>
          <a href="#" className="list-group-item item-sm hover">
            Acceso chico
          </a>
          <a href="#" className="list-group-item item-sm focus">
            Acceso chico
          </a>
        </div>
      </div>
    </div>
  );
};
