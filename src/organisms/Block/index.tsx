import React from 'react';
import classNames from 'classnames';
import { ProgressBar, ProgressBarProps } from '../../components/ProgressBar';

interface BlockButtonProps {
  className?: string;
  isButton?: boolean;
  url?: string;
  name?: string;
}

interface ButtonBlockProps {
  title?: string;
  text?: string;
  blockProgressBar?: ProgressBarProps;
  button?: BlockButtonProps;
  isLight?: boolean;
}

export const Block: React.FC<ButtonBlockProps> = (props: React.PropsWithChildren<ButtonBlockProps>) => {
  const { title, text, blockProgressBar, button, isLight } = props;

  const BlockClasses = classNames('card', 'border-light-50', { 'bg-light': isLight });

  return (
    <div className={BlockClasses.trim()}>
      <div className="card-body">
        {title && <h4 className="mb-0">{title}</h4>}
        {text && <p className="mb-0 mt-1">{text}</p>}
        {blockProgressBar && <ProgressBar type={blockProgressBar.type} width={blockProgressBar.width}></ProgressBar>}
        {button &&
          (button.isButton ? (
            <button type="button" className={button.className}>
              {button.name}
            </button>
          ) : (
            <a href={button.url} target="_blank" rel="noreferrer" className={button.className}>
              {button.name}
            </a>
          ))}
      </div>
    </div>
  );
};
