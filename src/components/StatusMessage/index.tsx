import React from 'react';

type StatusMessageTypes = 'success' | 'danger' | 'primary' | 'info';

export interface StatusMessageProps {
  type: StatusMessageTypes;
  title: string;
  text: string;
  list?: string[];
}

export const StatusMessage = (props: React.PropsWithChildren<StatusMessageProps>): JSX.Element => (
  <div className={`status status-${props.type}`}>
    <h2 className="status-title">{props.title}</h2>
    <p className="status-text">{props.text}</p>

    {props.list && (
      <ul className="status-list">
        {props.list.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
        ))}
      </ul>
    )}

    <button type="button" className="btn btn-secondary">
      Boton
    </button>
  </div>
);
