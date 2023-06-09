import classNames from 'classnames';
import React, { useState } from 'react';

interface CollapseProps {
  identifier: string;
  description?: string;
  volanta?: string;
  reason?: string;
  detail?: string;
  content?: React.ReactNode;
  contentList?: {
    title: string;
    value: string;
    positive?: boolean;
  }[];
  children?: React.ReactNode;
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

//test

export const CollapseListScoring: React.FC<CollapseProps> = ({
  identifier,
  volanta,
  reason,
  detail,
  contentList,
  description
}): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const isOpen = !isCollapsed;

  const collapseClass = classNames({
    'card-header card-link': true,
    'card-info': !!contentList,
    collapsed: isCollapsed
  });

  // Función para alternar el estado de colapso
  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Función para manejar el cambio de la casilla de verificación
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const checked = event.target.checked;
    setIsChecked(checked);
  };

  const titleClass = classNames('collapse-title', {
    'text-info': !isOpen && isChecked
  });

  return (
    <div className="card">
      <button
        className={collapseClass}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${identifier}`}
        aria-expanded={isOpen}
        onClick={handleCollapseToggle}>
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id={`skills-${identifier}-input`}
            name="skills"
            value={identifier}
            onChange={handleCheckboxChange}
          />
          <label className="custom-control-label" htmlFor={`skills-${identifier}-input`} />
        </div>
        <div className="d-block">
          <span className="collapse-label">{volanta}</span>
          <h4 id={`title-${identifier}`} className={titleClass}>
            {reason}
          </h4>
          <span className="collapse-subtitle">{detail}</span>
        </div>
      </button>
      <div id={identifier} className={`collapse${isOpen ? ' show' : ''}`} data-bs-parent="#accordion">
        {contentList ? (
          <div className="card-body">
            <ul>
              {contentList.map((item, index) => (
                <li key={index}>
                  <p
                    className={classNames({
                      'text-success': item.positive === true,
                      'text-danger': item.positive === false,
                      '': item.positive === undefined
                    })}>
                    <strong>{item.title}</strong>
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
            <a className="btn btn-secondary btn-sm download-link" href="#" target="_blank" rel="noreferrer">
              Descargar foto
            </a>
          </div>
        ) : (
          <div className="card-body">{description}</div>
        )}
      </div>
    </div>
  );
};
