import React from 'react';
import { Links } from '../links.interface';

export const LinkTypology = (): JSX.Element => {
  const LINKS: Links[] = [
    { name: 'Accesos de icono', style: 'access' },
    { name: 'Descargas', style: 'download' },
    { name: 'Externo', style: 'external' }
  ];
  return (
    <div className="">
      <div className="row mt-5">
        {LINKS.map(({ name, style }: Links, index) => (
          <div className="col-md-2" key={index}>
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
