import * as React from 'react';

export interface ProgressBarProps {
  type: string;
  width: number;
  withDescription?: boolean;
  description?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props: React.PropsWithChildren<ProgressBarProps>) => {
  const { type, width, description } = props;

  const className = `progress-bar bg-${type}`;

  return (
    <div className="progression-container">
      {description && <p className="steps">{description}</p>}
      <div className="progress">
        <div
          className={className}
          role="progressbar"
          style={{ width: `${width}%` }}
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={width}></div>
      </div>
    </div>
  );
};
