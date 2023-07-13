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

interface AlertAction {
  name: string;
  className?: string;
  url?: string;
}
interface AlertFullWidthProps {
  buttons?: AlertAction[];
  isDismissible?: boolean;
  isLink?: boolean;
  alertBgColor?: string;
  isCookie?: boolean;
  isFixed?: boolean;
}

export const AlertFullWidthComponent: React.FC<AlertFullWidthProps> = (
  props: React.PropsWithChildren<AlertFullWidthProps>
) => {
  const { isDismissible, isLink, alertBgColor, buttons, isCookie, isFixed } = props;

  const alertFullWidthClasses = classNames(
    'alert',
    'alert-full-width',
    { [`bg-${alertBgColor}`]: alertBgColor !== undefined },
    { ['alert-dismissible show fade']: isDismissible },
    { ['bg-dark']: isCookie },
    { ['position-fixed fixed-bottom']: isFixed }
  );

  return (
    <div className={alertFullWidthClasses.trim()}>
      <div className="alert-content">
        <span className="material-icons-round">
          {isCookie ? 'cookie' : alertBgColor === 'dark' ? 'directions_bus_filled' : 'info'}
        </span>
        <p className="alert-text">
          <strong>
            {isCookie
              ? 'En nuestro sitio usamos cookies para brindarte una mejor experiencia.'
              : alertBgColor === 'dark'
              ? 'Este es un destacado de una alerta de aviso no semántico de ancho completo.'
              : 'Este es un destacado de una alerta de info de ancho completo.'}
          </strong>
          {(() => {
            switch (true) {
              case isLink:
                return (
                  <>
                    {' '}
                    Versión con{' '}
                    <a href="#" target="_blank" rel="noreferrer">
                      enlace
                    </a>{' '}
                    en línea.
                  </>
                );
              case buttons && !isCookie && buttons?.length === 1:
                return ' Versión con botón.';
              case buttons && !isCookie && buttons?.length !== 1:
                return ' Versión con botones.';
              case isDismissible:
                return ' Versión con cierre.';
              case isCookie:
                return (
                  <>
                    {' '}
                    <a href="#" target="_blank" rel="noreferrer">
                      Conocé más o desactivalas.
                    </a>
                  </>
                );
              default:
                return ' Versión solo texto.';
            }
          })()}
        </p>
        {buttons && (
          <div className="alert-actions">
            {buttons?.map(({ className, name, url }, index) => (
              <a key={index} href={url} target="_blank" rel="noreferrer" className={className}>
                {name}
              </a>
            ))}
          </div>
        )}
        {isDismissible && (
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span className="material-icons-round">close</span>
          </button>
        )}
      </div>
    </div>
  );
};

function createButtons(size: number, text?: string): AlertAction[] {
  const listButtons: AlertAction[] = [];
  for (let i = 1; i <= size; i++) {
    const listItem: AlertAction = {
      name: text ? text : 'Botón',
      className: 'btn btn-sm btn-link',
      url: '#'
    };
    listButtons.push(listItem);
  }
  return listButtons;
}

export const BUTTON_ALERT = createButtons(1);
export const BUTTONS_ALERT = createButtons(2);
export const BUTTONS_ALERT_COOKIE = createButtons(1, 'Aceptar todo');
