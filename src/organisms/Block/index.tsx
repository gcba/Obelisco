import React from 'react';
import classNames from 'classnames';
import { ProgressBar, ProgressBarProps } from '../../components/ProgressBar';

interface BlockButtonProps {
  className?: string;
  isButton?: boolean;
  url?: string;
  name?: string;
}

interface BlockProps {
  title?: string;
  text?: string;
  blockProgressBar?: ProgressBarProps;
  button?: BlockButtonProps;
  isLight?: boolean;
}

export const Block: React.FC<BlockProps> = (props: React.PropsWithChildren<BlockProps>) => {
  const { title, text, blockProgressBar, button, isLight } = props;

  const BlockClasses = classNames('block', { 'bg-light': isLight });

  return (
    <div className={BlockClasses.trim()}>
      <div className="block-body">
        <h4 className="block-title">{title}</h4>
        {text && <p className="block-text">{text}</p>}
        {blockProgressBar && <ProgressBar type={blockProgressBar.type} width={blockProgressBar.width}></ProgressBar>}
      </div>
      {button && (
        <div className="block-footer">
          {button.isButton ? (
            <button type="button" className={button.className}>
              {button.name}
            </button>
          ) : (
            <a href={button.url} target="_blank" rel="noreferrer" className={button.className}>
              {button.name}
            </a>
          )}
        </div>
      )}
    </div>
  );
};
