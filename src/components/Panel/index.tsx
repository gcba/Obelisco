import * as React from 'react';

// Components
import { panelBgColor } from '../utils';
import classnames from 'classnames';

export interface PannelAction {
  name: string;
  className?: string;
  url?: string;
}

export interface ListPannelAction {
  listTitle: string;
  links?: PannelAction[];
}

export interface ListButtonPannelAction {
  listTitle: string;
  name: string;
  className?: string;
  url?: string;
}

export type PanelImage = {
  src: string;
  alt?: string;
};

export type PanelPicture = PanelImage;

interface BasePanelProps {
  title: string;
  description?: string | JSX.Element;
  buttons?: PannelAction[];
  link?: PannelAction;
  bgColor?: panelBgColor;
  direction?: string;
  listLinkPanel?: ListPannelAction;
  listLinkButtonPanel?: ListButtonPannelAction[];
}

export interface SimplePanel extends BasePanelProps {
  picture?: PanelPicture;
  video?: PanelPicture;
}

const getImage = (picture?: PanelImage): JSX.Element | null => {
  if (picture && picture.src !== undefined) {
    return <img src={picture.src} className="card-img" alt={picture.alt || ''} />;
  }
  return null;
};

const getSmallImage = (picture?: PanelImage): JSX.Element | null => {
  if (picture && picture.src !== undefined) {
    return <img src={picture.src} className="rounded-lg" width={154} height={154} alt={picture.alt || ''} />;
  }
  return null;
};

const getVideo = (video?: PanelImage): JSX.Element | null => {
  if (video && video.src !== undefined) {
    return (
      <video className="card-img" controls>
        <source src={video.src} type="video/mp4"></source>
        <p>Su navegador no soporta vídeos HTML5.</p>
      </video>
    );
  }
  return null;
};

export const LargePanel: React.FC<SimplePanel> = (props: React.PropsWithChildren<SimplePanel>) => {
  const { title, description, picture, video, buttons, link, bgColor, direction } = props;

  const panelClasses = classnames('card', 'card-simple', `panel-${direction ? direction : 'horizontal'}`, {
    [`bg-${bgColor}`]: bgColor !== undefined
  });

  return (
    <div className={panelClasses.trim()}>
      {picture && getImage(picture as PanelImage)}
      {video && getVideo(video as PanelImage)}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {description && <p className="card-text">{description}</p>}
        {buttons && (
          <div className="panel-footer">
            {buttons.map(({ className, name }, index) => (
              <button type="button" className={className} key={index}>
                {name}
              </button>
            ))}
          </div>
        )}
        {link && (
          <div className="panel-footer">
            <a className={link.className} href={picture ? picture?.src : video?.src} download>
              {link.name}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export const SmallPanel: React.FC<SimplePanel> = (props: React.PropsWithChildren<SimplePanel>) => {
  const { title, description, picture, buttons, link, bgColor, listLinkPanel, listLinkButtonPanel } = props;

  const smallPanelClasses = classnames(
    'card',
    'card-simple',
    {
      'panel-list-link':
        listLinkPanel || listLinkPanel !== undefined || listLinkButtonPanel || listLinkButtonPanel !== undefined
    },
    {
      'panel-sm':
        (!listLinkPanel && !listLinkButtonPanel) || (listLinkPanel == undefined && listLinkButtonPanel == undefined)
    },
    { [`bg-${bgColor}`]: bgColor !== undefined }
  );

  return (
    <div className={smallPanelClasses.trim()}>
      {picture && getSmallImage(picture as PanelImage)}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-text">{description}</p>}
      </div>
      {buttons && (
        <div className="panel-footer">
          {buttons.map(({ className, name }, index) => (
            <button type="button" className={className} key={index}>
              {name}
            </button>
          ))}
        </div>
      )}
      {link && (
        <div className="panel-footer">
          <a {...(link.className && { className: link.className })} href={link.url} target="_blank" rel="noreferrer">
            {link.name}
          </a>
        </div>
      )}
      {listLinkPanel && (
        <div className="list-link">
          <h4 className="list-link-item-title">{listLinkPanel.listTitle}</h4>
          {listLinkPanel.links?.map(({ name, className, url }, index) => (
            <a key={index} className={className} href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
          ))}
        </div>
      )}
      {listLinkButtonPanel && (
        <div className="list-link">
          {listLinkButtonPanel.map(({ listTitle, name, className, url }, index) => (
            <React.Fragment key={index}>
              <h4 className="list-link-item-title">{listTitle}</h4>
              <a className={className} href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
