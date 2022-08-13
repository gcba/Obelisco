import * as React from 'react';

export interface PannelAction {
  name: string;
  className: string;
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

export const PanelHorizontal: React.FC<SimplePanel> = (props: React.PropsWithChildren<SimplePanel>) => {
  const { title, description, picture, video, buttons, link } = props;

  return (
    <div className="card card-simple panel-horizontal">
      {picture && getImage(picture as PanelImage)}
      {video && getVideo(video as PanelImage)}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {description && <p className="card-text">{description}</p>}
        {buttons &&
          buttons.map(({ className, name }, index) => (
            <button type="button" className={className} key={index}>
              {name}
            </button>
          ))}
        {link && (
          <a className={link.className} href={picture ? picture?.src : video?.src} download>
            {link.name}
          </a>
        )}
      </div>
    </div>
  );
};

export const PanelVertical: React.FC<SimplePanel> = (props: React.PropsWithChildren<SimplePanel>) => {
  const { title, description, picture, video, buttons, link } = props;

  return (
    <div className="card card-simple panel-vertical">
      {picture && getImage(picture as PanelImage)}
      {video && getVideo(video as PanelImage)}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {description && <p className="card-text">{description}</p>}
        {buttons &&
          buttons.map(({ className, name }, index) => (
            <button type="button" className={className} key={index}>
              {name}
            </button>
          ))}
        {link && (
          <a className={link.className} href={picture ? picture?.src : video?.src} download>
            {link.name}
          </a>
        )}
      </div>
    </div>
  );
};
