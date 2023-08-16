// Base
import React from 'react';
import './Dropdown.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

import { DropdownOption } from './index';

// Configuración general del componente
export default {
  title: 'Componentes|Desplegables/De selección',
  decorators: [withA11y]
};

const checkboxOptions = [
  { value: 'checkOne', label: 'Opción 1' },
  { value: 'checkTwo', label: 'Opción 2' },
  { value: 'checkThree', label: 'Opción 3' }
];

const radioOptions = [
  { value: 'radioOne', label: 'Opción 1' },
  { value: 'radioTwo', label: 'Opción 2' },
  { value: 'radioThree', label: 'Opción 3' }
];

export const DropdownSelectionCheckbox = (): JSX.Element => {
  return (
    <div className="storybook__container-dropdown">
      <DropdownOption options={checkboxOptions}>
        <i className="bx bxs-check"></i>
      </DropdownOption>
    </div>
  );
};
DropdownSelectionCheckbox.story = { name: 'Con checkbox' };

export const DropdownSelectionRadio = (): JSX.Element => {
  return (
    <div className="storybook__container-dropdown">
      <DropdownOption options={radioOptions} isRadio={true}>
        <span className="material-icons-round">done</span>
      </DropdownOption>
    </div>
  );
};
DropdownSelectionRadio.story = { name: 'Con radio' };

export const DropdownSelectionIcon = (): JSX.Element => {
  return (
    <div className="storybook__container-dropdown">
      <DropdownOption
        options={radioOptions}
        isRadio={true}
        icon={<span className="material-icons-round">event</span>}
        iconType="material">
        <i className="bx bx-check"></i>
      </DropdownOption>
      <DropdownOption options={checkboxOptions} icon="bx-ghost" iconType="boxicon">
        <i className="bx bxs-check"></i>
      </DropdownOption>
    </div>
  );
};
DropdownSelectionIcon.story = { name: 'Con ícono' };

export const DropdownSelectionSizes = (): JSX.Element => {
  return (
    <div className="storybook__container-dropdown">
      <DropdownOption options={radioOptions} isRadio={true} size="small">
        <span className="material-icons-round">done</span>
      </DropdownOption>
      <DropdownOption options={radioOptions} isRadio={true}>
        <span className="material-icons-round">done</span>
      </DropdownOption>
      <DropdownOption options={radioOptions} isRadio={true} size="large">
        <span className="material-icons-round">done</span>
      </DropdownOption>
    </div>
  );
};
DropdownSelectionSizes.story = { name: 'Tamaños' };
