import * as React from 'react';

export interface MapaProps {
  title: string;
  description?: string;
  iframe: React.ReactNode;
  link?: string;
}

export const MapaCard: React.FC<MapaProps> = (props: React.PropsWithChildren<MapaProps>) => {
  const { title, description, iframe, link } = props;

  return (
    <div className="card card-map">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <div className="card-iframe">{iframe}</div>
        <a href={link} className="btn btn-primary btn-lg btn-block" target="_blank" rel="noreferrer" tabIndex={0}>
          Cómo llego
        </a>
      </div>
    </div>
  );
};
