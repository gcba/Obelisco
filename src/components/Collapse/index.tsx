import classNames from 'classnames';
import React from 'react';

interface CollapseProps {
  identifier: string;
  description?: string;
  content?: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({ children, description, identifier, content }): JSX.Element => {
  const collapseClass = classNames({
    'card-header collapsed card-link': true,
    'card-info': !!content
  });

  return (
    <div className="card">
      <button className={collapseClass} data-toggle="collapse" data-target={'#' + identifier}>
        {children}
      </button>
      <div id={identifier} className="collapse" data-parent="#accordion">
        {content ?? <div className="card-body">{description}</div>}
      </div>
    </div>
  );
};
