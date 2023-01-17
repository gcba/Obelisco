import React from 'react';

type StatusMessageTypes = 'success' | 'danger' | 'primary' | 'info' | 'institutional';

export interface StatusMessageProps {
  type: StatusMessageTypes;
  title: string;
  text: string | string[];
  list?: string[];
  isTwoButtons?: boolean;
}

export const StatusMessage = (props: React.PropsWithChildren<StatusMessageProps>): JSX.Element => (
  <div className={`status status-${props.type}`}>
    <h2 className="status-title">{props.title}</h2>
    {Array.isArray(props.text) ? (
      props.text?.map((text, index) => (
        <p key={index} className="status-text" dangerouslySetInnerHTML={{ __html: text }}></p>
      ))
    ) : (
      <p className="status-text" dangerouslySetInnerHTML={{ __html: props.text }}></p>
    )}

    {props.list && (
      <ul className="status-list">
        {props.list.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
    )}

    {props.type === 'institutional' ? (
      <button type="button" className="btn btn-outline-link">
        Ir al sitio web
      </button>
    ) : (
      <>
        {props.isTwoButtons ? (
          <>
            <button type="button" className="btn btn-secondary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Botón
            </button>
          </>
        ) : (
          <>
            <button type="button" className="btn btn-secondary">
              Botón
            </button>
          </>
        )}
      </>
    )}
  </div>
);
