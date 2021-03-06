import * as React from 'react';

export type CardImage = {
  src: string;
  alt?: string;
  width?: number;
};
export type CardIcon = {
  icon: string;
  color?: string;
};
export type CardPicture = CardImage | CardIcon;

interface BaseCardProps {
  title: string;
  subTitle?: string;
  description: string | JSX.Element;
  href?: string;
  className?: string;
}

export interface SimpleCardProps extends BaseCardProps {
  picture?: CardIcon;
}

export const SimpleCard: React.FC<SimpleCardProps> = (props: React.PropsWithChildren<SimpleCardProps>) => {
  const { title, subTitle, description, href, picture } = props;

  let className = `card card-simple`;
  if (props.className) className += ` ${props.className}`;

  return (
    <div className={className}>
      <div className="card-body">
        {getIcon(picture)}
        <h3 className="card-title">{href ? <a href={href}>{title}</a> : title}</h3>
        {subTitle && <div className="card-subtitle">{subTitle}</div>}
        <p className="card-text">{description}</p>
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
  const { title, subTitle, description, href, picture, footer, orientation, onClick } = props;
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
        <h3 className="card-title">{title}</h3>
        {subTitle && <div className="card-subtitle">{subTitle}</div>}
        <p className="card-text">{description}</p>
      </div>
      {footer && (
        <div className="card-footer text-right">
          <small>{footer}</small>
        </div>
      )}
    </>
  );

  return React.createElement(href ? 'a' : onClick ? 'button' : 'div', containerProps);
};

const getImage = (picture?: CardImage, isHorizontal?: boolean): JSX.Element | null => {
  if (picture && picture.src !== undefined) {
    return (
      <img
        src={picture.src}
        className={`card-img-${isHorizontal ? 'left' : 'top'}`}
        alt={picture.alt || ''}
        width={picture.width}
      />
    );
  }
  return null;
};

const getIcon = (picture?: CardIcon): JSX.Element | null => {
  if (picture && picture.icon !== undefined) {
    return <i className={`bx ${picture.icon} card-icon`} style={{ color: picture.color }} />;
  }
  return null;
};
