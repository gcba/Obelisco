import * as React from 'react';
import { BadgeType } from '../utils';

export interface BadgeProps {
  type?: BadgeType;
  text: string;
  href?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const { type, text, href } = props;

  let className = `badge badge-info badge-${type}`;
 
  if (props.className) className += ` ${props.className}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {text}
      </a>
    );
  }

  return <span className={className}>{text}</span>;
};
