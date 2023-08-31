import classNames from 'classnames';
import React from 'react';

interface CollapseProps {
  identifier: string;
  description?: string;
  content?: React.ReactNode;
  isOnlySelect?: boolean;
}

export const Collapse: React.FC<CollapseProps> = ({
  children,
  description,
  identifier,
  content,
  isOnlySelect
}): JSX.Element => {
  const collapseClass = classNames({
    'card-header collapsed card-link': true,
    'card-info': !!content
  });

  return (
    <div className="card">
      <button className={collapseClass} data-toggle="collapse" data-target={'#' + identifier}>
        {children}
      </button>
      <div id={identifier} className="collapse" {...(isOnlySelect ? { 'data-parent': '#accordionExample' } : {})}>
        {content ?? <div className="card-body">{description}</div>}
      </div>
    </div>
  );
};
