import * as React from 'react';
import classNames from 'classnames';

export interface ModalProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  isUnbordered?: boolean;
  isBlock?: boolean;
}

export const Modal: React.FC<ModalProps> = (props: React.PropsWithChildren<ModalProps>) => {
  const { id, title, subtitle, description, isUnbordered = false, isBlock = false, children } = props;

  const modalClass = classNames('modal', {
    fade: !isBlock,
    'd-block': isBlock
  });

  const modalHeaderClass = classNames('modal-header', {
    unbordered: isUnbordered
  });

  return (
    <div className={modalClass} tabIndex={-1} role="dialog" id={id}>
      <div className="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div className="modal-content">
          <div className={modalHeaderClass}>
            {subtitle && <small>{subtitle}</small>}
            <h4 className="modal-title">{title}</h4>
          </div>
          {description && (
            <div className="modal-body">
              <p>{description}</p>
            </div>
          )}
          <div className="modal-footer">{children}</div>
        </div>
      </div>
    </div>
  );
};
