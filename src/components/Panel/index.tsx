import React from 'react';

// Components
import { panelBgColor } from '../utils';
import classnames from 'classnames';

export interface PanelAction {
  name: string;
  className?: string;
  url?: string;
  icon?: string;
  isDownload?: boolean;
}

export interface ListPanelAction {
  listTitle: string;
  links?: PanelAction[];
}

export interface ListButtonPanelAction {
  listTitle: string;
  name: string;
  className?: string;
  url?: string;
  icon?: string;
  isDownload?: boolean;
}

export type PanelImage = {
  src: string;
  alt?: string;
  className?: string;
  size?: number;
};

export type PanelPicture = PanelImage;

interface BasePanelProps {
  title?: string;
  description?: string | JSX.Element;
  buttons?: PanelAction[];
  link?: PanelAction;
  bgColor?: panelBgColor;
  direction?: string;
  listLinkPanel?: ListPanelAction;
  listLinkButtonPanel?: ListButtonPanelAction[];
}

export interface SimplePanel extends BasePanelProps {
  picture?: PanelPicture;
  video?: PanelPicture;
}

const getImage = (picture?: PanelImage): JSX.Element | null => {
  if (picture && picture.src !== undefined) {
    return (
      <img
        src={picture.src}
        alt={picture.alt || ''}
        className={picture.className || 'card-img'}
        {...(picture.size && { width: picture.size, height: picture.size })}
      />
    );
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

const ButtonIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <>
    {!icon.includes('bx') && <span className="material-icons-round">{icon}</span>}
    {icon.includes('bx') && <i className={icon}></i>}
  </>
);

const ButtonGroup: React.FC<{ buttons: PanelAction[] }> = ({ buttons }) => (
  <div className="panel-footer">
    {buttons.map(({ className, name, icon }, index) => (
      <button type="button" className={className} key={index}>
        {icon && <ButtonIcon icon={icon} />}
        {name}
      </button>
    ))}
  </div>
);

const LinkGroup: React.FC<{ link: PanelAction; picture?: PanelImage; video?: PanelImage }> = ({
  link,
  picture,
  video
}) => (
  <div className="panel-footer">
    <a
      {...(link.className && { className: link.className })}
      href={!link.url ? (picture ? picture?.src : video?.src) : link.url}
      {...(link.isDownload && { download: true })}
      {...(!link.isDownload && { target: '_blank', rel: 'noreferrer' })}>
      {link.icon && <ButtonIcon icon={link.icon} />}
      {link.name}
    </a>
  </div>
);

const LinkList: React.FC<{ listLinkPanel: ListPanelAction }> = ({ listLinkPanel }) => (
  <div className="list-link">
    <h4 className="list-link-item-title">{listLinkPanel.listTitle}</h4>
    {listLinkPanel.links?.map(({ name, className, url, icon, isDownload }, index) => (
      <a
        key={index}
        {...(className && { className: className })}
        href={url}
        {...(isDownload && { download: true })}
        {...(!isDownload && { target: '_blank', rel: 'noreferrer' })}>
        {icon && <ButtonIcon icon={icon} />}
        {name}
      </a>
    ))}
  </div>
);

const LinkButtonList: React.FC<{ listLinkButtonPanel: ListButtonPanelAction[] }> = ({ listLinkButtonPanel }) => (
  <div className="list-link">
    {listLinkButtonPanel.map(({ listTitle, name, className, url, icon, isDownload }, index) => (
      <React.Fragment key={index}>
        <h4 className="list-link-item-title">{listTitle}</h4>
        <a
          {...(className && { className: className })}
          href={url}
          {...(isDownload && { download: true })}
          {...(!isDownload && { target: '_blank', rel: 'noreferrer' })}>
          {icon && <ButtonIcon icon={icon} />}
          {name}
        </a>
      </React.Fragment>
    ))}
  </div>
);

const PanelFooter: React.FC<SimplePanel> = ({ buttons, link, listLinkPanel, listLinkButtonPanel, picture, video }) => {
  return (
    <>
      {buttons && <ButtonGroup buttons={buttons} />}
      {link && <LinkGroup link={link} picture={picture} video={video} />}
      {listLinkPanel && <LinkList listLinkPanel={listLinkPanel} />}
      {listLinkButtonPanel && <LinkButtonList listLinkButtonPanel={listLinkButtonPanel} />}
    </>
  );
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
        <PanelFooter buttons={buttons} link={link} picture={picture} video={video} />
      </div>
    </div>
  );
};

export const SmallPanel: React.FC<SimplePanel> = (props: React.PropsWithChildren<SimplePanel>) => {
  const { title, description, picture, buttons, link, bgColor, direction, listLinkPanel, listLinkButtonPanel } = props;

  const smallPanelClasses = classnames(
    'card',
    'card-simple',
    {
      [`panel-list-link${direction === 'horizontal' ? ` panel-sm-horizontal` : ''.trim()}`]:
        listLinkPanel || listLinkPanel !== undefined || listLinkButtonPanel || listLinkButtonPanel !== undefined
    },
    {
      [`panel-sm${direction ? `-${direction}` : ''}`]:
        (!listLinkPanel && !listLinkButtonPanel && direction !== 'horizontal') ||
        (listLinkPanel == undefined && listLinkButtonPanel == undefined)
    },
    { [`bg-${bgColor}`]: bgColor !== undefined }
  );

  if (direction === 'horizontal') {
    return (
      <div className={smallPanelClasses.trim()}>
        {picture && getImage(picture as PanelImage)}
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          {description && <p className="card-text">{description}</p>}
          <PanelFooter
            buttons={buttons}
            link={link}
            listLinkPanel={listLinkPanel}
            listLinkButtonPanel={listLinkButtonPanel}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={smallPanelClasses.trim()}>
        {picture && getImage(picture as PanelImage)}
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          {description && <p className="card-text">{description}</p>}
        </div>
        <PanelFooter
          buttons={buttons}
          link={link}
          listLinkPanel={listLinkPanel}
          listLinkButtonPanel={listLinkButtonPanel}
        />
      </div>
    );
  }
};
