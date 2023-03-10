import classNames from 'classnames';
import * as React from 'react';

export interface TooltipProps {
  text: string;
  direction: string;
  iconBox?: boolean;
}

export const TooltipContainer: React.FC<TooltipProps> = (props: React.PropsWithChildren<TooltipProps>) => {
  const { direction, text, children, iconBox } = props;

  const iconBoxClasses = classNames({
    'icon-box': iconBox,
    'bg-light': iconBox
  });

  return (
    <span data-direction={direction} data-tooltip={text} className={iconBoxClasses ? iconBoxClasses : undefined}>
      {children}
    </span>
  );
};
