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
}

export const SwitchContainer: React.FC<SwitchProps> = (props: SwitchProps) => {
  const { label, id, isSmall, isDark, isDisabled, isChecked, isLabelHidden = false } = props;

  const switchClasses = classNames('switch', {
    'switch-sm': isSmall,
    'switch-dark': isDark
  });

  const labelClasses = classNames('switch-label', {
    disabled: isDisabled,
    'sr-only': isLabelHidden
  });

  return (
    <>
      <label className={switchClasses}>
        <input type="checkbox" id={id} disabled={isDisabled} checked={isChecked}></input>
        <span className="slider"></span>
      </label>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
    </>
  );
};
