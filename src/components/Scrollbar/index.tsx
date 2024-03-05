import React, { ReactNode } from 'react';

export interface ScrollbarProps {
  children: ReactNode;
}

export const Scrollbar: React.FC<ScrollbarProps> = (props: React.PropsWithChildren<ScrollbarProps>) => {
  const { children } = props;

  const className = `responsive-scroll`;

  return (
    <div className={className} tabIndex={0}>
      {children}
    </div>
  );
};
