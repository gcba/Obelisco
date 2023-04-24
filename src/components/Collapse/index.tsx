import classNames from 'classnames';
import React from 'react';

interface CollapseProps {
  identifier: string;
  description?: string;
  isInfo?: boolean;
  content?: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({
  children,
  description,
  identifier,
  isInfo,
  content
}): JSX.Element => {
  const collapseClass = classNames({
    'card-header collapsed card-link': true,
    'card-info': isInfo
  });

  return (
    <div className="card">
      <button className={collapseClass} data-toggle="collapse" data-target={'#' + identifier}>
        {children}
      </button>
      <div id={identifier} className="collapse" data-parent="#accordion">
        {!isInfo ? <div className="card-body">{description}</div> : content}
      </div>
    </div>
  );
};
