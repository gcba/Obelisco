// Base
import React from 'react';
import './Button.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { buttonTypes, sizes, sizesButton, buttonSpinnerTypes, buttonOutlineSpinnerTypes } from '../utils';
import { Button } from '.';
import { Spinner } from '../Spinner';

// Configuración general del componente
export default {
  title: 'Componentes|Botones',
  component: Button,
  decorators: [withA11y]
};

export const ButtonTypes = (): JSX.Element => {
  return (
    <>
      <div className="storybook__container-btn">
        {buttonTypes.map((item) => (
          <Button key={item.type} type={item.type}>
            {item.name}
          </Button>
        ))}
        <a className="btn btn-primary" href="#" target="_blank">
          Enlace
        </a>
      </div>
      <div className="storybook__container-btn">
        {buttonTypes.map((item) => (
          <Button key={item.type} type={item.type} isOutline>
            {item.name}
          </Button>
        ))}
        <a className="btn btn-outline-primary" href="#" target="_blank">
          Enlace
        </a>
      </div>
    </>
  );
};
ButtonTypes.story = { name: 'Tipos' };

export const ButtonSizes = (): JSX.Element => {
  return (
    <div className="storybook__container-btn">
      {sizesButton.map((item) => (
        <Button key={item.size} type="secondary" size={item.size}>
          {item.name}
        </Button>
      ))}
      <a className="btn btn-secondary" href="#" target="_blank">
        Enlace
      </a>
    </div>
  );
};
ButtonSizes.story = { name: 'Tamaños' };

export const ButtonBlock = (): JSX.Element => {
  return (
    <div className="storybook__container-btn-block">
      <Button type="secondary" isBlock>
        Expandible
      </Button>
    </div>
  );
};
ButtonBlock.story = { name: 'Expandible' };

export const ButtonWithIcon = (): JSX.Element => {
  return (
    <>
      <div className="storybook__container-btn">
        {sizes.map((size) => (
          <Button key={size} type="primary" size={size} isIconSpinner={<i className="bx bxs-info-circle"></i>}>
            Botón
          </Button>
        ))}
        {sizes.map((size) => (
          <Button
            key={size}
            type="primary"
            isOutline
            size={size}
            isIconSpinner={<span className="material-icons-round">info</span>}>
            Botón
          </Button>
        ))}
      </div>
      <div className="storybook__container-btn">
        {sizes.map((size) => (
          <Button
            key={size}
            type="primary"
            size={size}
            isIconSpinner={<i className="bx bxs-info-circle"></i>}
            ariaLabel="Botón"></Button>
        ))}
        {sizes.map((size) => (
          <Button
            key={size}
            type="primary"
            isOutline
            size={size}
            isIconSpinner={<span className="material-icons-round">info</span>}
            ariaLabel="Botón"></Button>
        ))}
      </div>
    </>
  );
};
ButtonWithIcon.story = { name: 'Con ícono' };

export const ButtonWithSpinner = (): JSX.Element => (
  <>
    <div className="storybook__container-btn">
      {buttonSpinnerTypes.map((item) => (
        <Button key={item.type} type={item.type} isIconSpinner={<Spinner type={item.spinner} size="small"></Spinner>}>
          Botón
        </Button>
      ))}
    </div>
    <div className="storybook__container-btn">
      {buttonOutlineSpinnerTypes.map((item) => (
        <Button
          key={item.type}
          type={item.type}
          isOutline
          isIconSpinner={<Spinner type={item.spinner} size="small"></Spinner>}>
          Botón
        </Button>
      ))}
    </div>
  </>
);
ButtonWithSpinner.story = { name: 'Con spinner' };
