import classNames from 'classnames';
import React from 'react';

interface CollapseProps {
  identifier: string;
  description?: string;
  content?: React.ReactNode;
  isOnlySelect?: boolean;
  dataParent?: string;
}

export const Collapse: React.FC<CollapseProps> = ({
  children,
  description,
  identifier,
  content,
  isOnlySelect,
  dataParent
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
      <div id={identifier} className="collapse" {...(isOnlySelect && dataParent ? { 'data-parent': dataParent } : {})}>
        {content ?? <div className="card-body">{description}</div>}
      </div>
    </div>
  );
};
