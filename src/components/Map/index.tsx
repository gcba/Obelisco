import * as React from 'react';

export interface MapProps {
  title: string;
  description?: string;
  iframe: React.ReactNode;
  link?: string;
  isTitleH2?: boolean;
}

export const MapCard: React.FC<MapProps> = (props: React.PropsWithChildren<MapProps>) => {
  const { title, description, iframe, link, isTitleH2 = false } = props;

  return (
    <div className="card card-map">
      <div className="card-body">
        {isTitleH2 ? <h2 className="card-title">{title}</h2> : <h3 className="card-title">{title}</h3>}
        <p className="card-text">{description}</p>
        <div className="card-iframe">{iframe}</div>
        <a href={link} className="btn btn-primary btn-lg btn-block" target="_blank" rel="noreferrer" tabIndex={0}>
          Cómo llego
        </a>
      </div>
    </div>
  );
};
