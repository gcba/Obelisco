import React from 'react';
import { AlertType } from '../utils';
import classNames from 'classnames';

export const alertTypes: AlertType[] = [
  { type: 'info', text: 'Esta es la descripción de una alerta de información.' },
  { type: 'primary', text: 'Esta es la descripción de una alerta de advertencia.' },
  { type: 'success', text: 'Esta es la descripción de una alerta de éxito.' },
  { type: 'danger', text: 'Esta es la descripción de una alerta de error.' }
];

export const alertHighlight: AlertType[] = [
  {
    type: 'info',
    text: '<strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta de información que continua al texto destacado.'
  },
  {
    type: 'primary',
    text: '<strong>Este es un destacado de una alerta de advertencia.</strong> Esta es la descripción de una alerta de advertencia que continua al texto destacado.'
  },
  {
    type: 'success',
    text: '<strong>Este es un destacado de una alerta de éxito.</strong> Esta es la descripción de una alerta de éxito que continua al texto destacado.'
  },
  {
    type: 'danger',
    text: '<strong>Este es un destacado de una alerta de error.</strong> Esta es la descripción de una alerta de error que continua al texto destacado.'
  }
];

export const alertLink: AlertType[] = [
  {
    type: 'info',
    text: '<strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta de información que continua al texto destacado, incluso con <a href="#">enlace</a>.'
  },
  {
    type: 'primary',
    text: '<strong>Este es un destacado de una alerta de advertencia.</strong> Esta es la descripción de una alerta de advertencia que continua al texto destacado, incluso con <a href="#">enlace</a>.'
  },
  {
    type: 'success',
    text: '<strong>Este es un destacado de una alerta de éxito.</strong> Esta es la descripción de una alerta de éxito que continua al texto destacado, incluso con <a href="#">enlace</a>.'
  },
  {
    type: 'danger',
    text: '<strong>Este es un destacado de una alerta de error.</strong> Esta es la descripción de una alerta de error que continua al texto destacado, incluso con <a href="#">enlace</a>.'
  }
];

interface AlertProps {
  arrayAlerts: AlertType[];
  isDismissible?: boolean;
  isListLinks?: boolean;
  textLink?: string;
}

export const Alert = ({ arrayAlerts, isDismissible }: AlertProps): JSX.Element => {
  const alertClass = classNames({
    'alert-dismissible': isDismissible,
    show: isDismissible,
    fade: isDismissible
  });

  return (
    <>
      {arrayAlerts.map(({ type, text }) => (
        <div key={type} className={`alert alert-${type} ${alertClass}`} role="alert">
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
          {isDismissible && (
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span className="material-icons-round">close</span>
            </button>
          )}
        </div>
      ))}
    </>
  );
};

interface LinkProps {
  text: string;
  index: number;
  isLink: boolean;
}

interface ListLinksProps {
  type: string;
  text: string;
  textLink: string;
  isListLinks: boolean;
}

const Link: React.FC<LinkProps> = ({ text, index, isLink }): JSX.Element => {
  return (
    <li>
      {isLink ? (
        <a href="#">
          {text} {index}
        </a>
      ) : (
        <span>
          {text} {index}
        </span>
      )}
    </li>
  );
};

export const ListLinks: React.FC<ListLinksProps> = ({ type, text, textLink, isListLinks }) => {
  const linkClass = classNames({
    'list-links': isListLinks
  });

  const links = [1, 2, 3, 4, 5].map((_, i) => <Link key={i} text={textLink} index={i + 1} isLink={isListLinks} />);

  return (
    <div className={`alert alert-${type}`} role="alert">
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <ol className={linkClass}>{links}</ol>
    </div>
  );
};
