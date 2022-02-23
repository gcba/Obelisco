import React from 'react';
import { Links } from '../links.interface';

export const LinkState = (): JSX.Element => {
  const LINKS: Links[] = [
    { name: 'Default', style: 'link' },
    { name: 'Hover', style: 'active' },
    { name: 'Enlace', style: 'focus' },
    { name: 'Visitado', style: 'visited' }
  ];
  return (
    <div>
      <div className="row my-5">
        {LINKS.map(({ name, style }: Links, index) => (
          <div className="col-md-3" key={index}>
            <h4>{name}</h4>
            <a href="javascript:void(0)" className={`link ${style}`}>
              Enlace
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
