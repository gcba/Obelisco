import React from 'react';

// Components
import { panelBgColor } from '../utils';
import classnames from 'classnames';

export interface LinkAction {
  name: string;
  url?: string;
}

interface BaseMapProps {
  description?: string;
  formSearchId?: string;
  iframe?: LinkAction;
  button?: LinkAction;
  bgColor?: panelBgColor;
}

export const MapComponent: React.FC<BaseMapProps> = (props: React.PropsWithChildren<BaseMapProps>) => {
  const { description, formSearchId, iframe, button, bgColor } = props;

  const MapClasses = classnames('card', 'map', {
    [`bg-${bgColor}`]: bgColor !== undefined
  });

  return (
    <div className={MapClasses.trim()}>
      <div className="card-body">
        <h5 className="card-title">{description ? 'Ubicación' : 'Dirección'}</h5>
        {description && <p className="card-text">{description}</p>}
        {!description && (
          <form className="form-search form-search-sm">
            <div className="form-group">
              <input
                type="search"
                className="form-control form-control-sm input-search"
                id={formSearchId}
                name="name"
                placeholder="Buscar..."
              />
              <button className="reset" type="reset"></button>
            </div>
          </form>
        )}
        {iframe && (
          <div className="map-iframe">
            <iframe
              src={iframe.url}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={iframe.name}></iframe>
          </div>
        )}
        <a href={button?.url} className="btn btn-primary btn-lg">
          {button?.name}
        </a>
      </div>
    </div>
  );
};
