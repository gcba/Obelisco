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
  return (
    <div className="card">
      <button className="card-header collapsed" data-toggle="collapse" data-target={'#' + identifier}>
        {children}
      </button>
      <div id={identifier} className="collapse" {...(isOnlySelect && dataParent ? { 'data-parent': dataParent } : {})}>
        {content ?? (
          <div className="card-body">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};
