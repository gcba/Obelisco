import * as React from 'react';

export interface TooltipProps {
  text?: string;
  flow?: string;
  box?: boolean;
}

export const TooltipButtom: React.FC<TooltipProps> = (props: React.PropsWithChildren<TooltipProps>) => {
  const { flow, text, children } = props;

  return (
    <span data-flow={flow} data-tooltip={text}>
      {children}
    </span>
  );
};

export const TooltipIcon: React.FC<TooltipProps> = (props: React.PropsWithChildren<TooltipProps>) => {
  const { flow, text, box, children } = props;

  let className = '';
  if (box) className += ` icon-box bg-light`;

  return (
    <span data-flow={flow} data-tooltip={text} className={className}>
      {children}
    </span>
  );
};
