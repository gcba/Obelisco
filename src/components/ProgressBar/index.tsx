import React from 'react';

export interface ProgressBarProps {
  type: string;
  width: number;
  description?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props: React.PropsWithChildren<ProgressBarProps>) => {
  const { type, width, description } = props;

  const className = `progress-bar bg-${type}`;

  return (
    <>
      {description && <p className="steps">{description}</p>}
      <div className="progress">
        <div
          className={className}
          role="progressbar"
          style={{ width: `${width}%` }}
          aria-valuenow={width}
          aria-valuemin={0}
          aria-valuemax={100}></div>
      </div>
    </>
  );
};
