import * as React from 'react';

export interface BadgeProps {
  text: string;
  href?: string;
}

export const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const { text, href } = props;

  if (href) {
    return (
      <a href={href} className="badge badge-info">
        {text}
      </a>
    );
  }

  return <span className="badge badge-info">{text}</span>;
};
