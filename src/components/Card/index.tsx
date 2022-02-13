import * as React from 'react';

export type CardImage = {
  src: string;
  alt?: string;
};
export type CardIcon = {
  icon: string;
  color?: string;
};
export type CardPicture = CardImage | CardIcon;

interface BaseCardProps {
  title: string;
  description?: string | JSX.Element;
  href?: string;
  className?: string;
  tags?: string[];
}

export interface SimpleCardProps extends BaseCardProps {
  picture?: CardPicture;
}

export const SimpleCard: React.FC<SimpleCardProps> = (props: React.PropsWithChildren<SimpleCardProps>) => {
  const { title, description, href, picture, tags } = props;
  const hasPicture = (picture as CardImage)?.src != undefined;

  let className = `card card-simple`;
  if (hasPicture) className += ` card-horizontal`;
  if (props.className) className += ` ${props.className}`;

  return (
    <div className={className}>
      {getImage(picture as CardImage, true)}
      <div className="card-body">
        {getIcon(picture as CardIcon)}
        {tags?.map((text) => (
          <span key={text} className="badge badge-info">
            {text}
          </span>
        ))}
        <h4 className="card-title">{href ? <a href={href}>{title}</a> : title}</h4>
        {description && <p className="card-text">{description}</p>}
      </div>
    </div>
  );
};

export interface CardProps extends BaseCardProps {
  picture?: CardPicture;
  footer?: string | JSX.Element;
  orientation?: 'horizontal' | 'vertical';
  onClick?: (event?: React.MouseEvent) => void;
}

export const Card: React.FC<CardProps> = (props: React.PropsWithChildren<CardProps>) => {
  const { title, description, href, picture, footer, orientation, tags, onClick } = props;
  const isHorizontal = orientation === 'horizontal';

  let className = `card`;
  if (isHorizontal) className += ` card-horizontal`;
  if (props.className) className += ` ${props.className}`;

  const containerProps: { [key: string]: unknown } = { className };
  if (href) containerProps.href = href;
  if (onClick) containerProps.onClick = onClick;

  containerProps.children = (
    <>
      {getImage(picture as CardImage, isHorizontal)}
      <div className="card-body">
        {getIcon(picture as CardIcon)}
        <Tags tags={tags} />
        <h4 className="card-title">{title}</h4>
        {description && <p className="card-text">{description}</p>}
      </div>
      {footer && (
        <div className="card-footer">
          <small>{footer}</small>
        </div>
      )}
    </>
  );

  return React.createElement(href ? 'a' : onClick ? 'button' : 'div', containerProps);
};

const getImage = (picture?: CardImage, isHorizontal?: boolean): JSX.Element | null => {
  if (picture && picture.src !== undefined) {
    return <img src={picture.src} className={`card-img-${isHorizontal ? 'left' : 'top'}`} alt={picture.alt || ''} />;
  }
  return null;
};

const getIcon = (picture?: CardIcon): JSX.Element | null => {
  if (picture && picture.icon !== undefined) {
    return <i className={`bx ${picture.icon} card-icon`} style={{ color: picture.color }} />;
  }
  return null;
};

const Tags = ({ tags }: { tags: BaseCardProps['tags'] }): JSX.Element | null => {
  if (tags) {
    return (
      <div className="mb-2">
        {tags?.map((text) => (
          <span key={text} className="badge badge-info">
            {text}
          </span>
        ))}
      </div>
    );
  } else {
    return null;
  }
};
