import * as React from 'react';

export interface BadgeProps {
  text: string;
  href?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const { text, href } = props;

  let className = 'badge'; 
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
