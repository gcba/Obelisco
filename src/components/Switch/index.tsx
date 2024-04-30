import React from 'react';
import classNames from 'classnames';

export interface SwitchProps {
  label?: string;
  id?: string;
  isSmall?: boolean;
  isDark?: boolean;
  isDisabled?: boolean;
  isChecked?: boolean;
  isLabelHidden?: boolean;
  labelOn?: string;
  labelOff?: string;
}

export const SwitchContainer: React.FC<SwitchProps> = (props: SwitchProps) => {
  const {
    id,
    isSmall,
    isDark,
    isDisabled,
    isChecked,
    isLabelHidden = false,
    labelOff = isDisabled ? 'Apagado / Deshabilitado' : 'Apagado',
    labelOn = isDisabled ? 'Prendido / Deshabilitado' : 'Prendido'
  } = props;

  const switchClasses = classNames('switch', {
    'switch-sm': isSmall,
    'switch-dark': isDark
  });

  const labelClasses = classNames('switch-label', {
    disabled: isDisabled
  });

  return (
    <>
      <label className={switchClasses} htmlFor={id}>
        <input type="checkbox" id={id} disabled={isDisabled} checked={isChecked}></input>
        <span className="slider"></span>
        <span className={`${labelClasses} on`} aria-label={isLabelHidden ? labelOn : undefined}>
          {!isLabelHidden && labelOn}
        </span>
        <span className={`${labelClasses} off`} aria-label={isLabelHidden ? labelOff : undefined}>
          {!isLabelHidden && labelOff}
        </span>
      </label>
    </>
  );
};
