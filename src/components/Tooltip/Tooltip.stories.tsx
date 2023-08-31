// Base
import React from 'react';
import './Tooltip.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { TooltipContainer } from '.';
import { Button } from '../Button/index';
import { directionBottom, directionLeft, directionRight, directionTop } from '../utils';

// Configuración general del componente
export default {
  title: 'Componentes|Tooltip',
  decorators: [withA11y]
};

export const Tooltip = (): JSX.Element => {
  return (
    <div className="storybook__container-tooltip">
      <div className="storybook__container-tooltip-row">
        {directionTop.map(({ direction, icon, position }, index) => (
          <TooltipContainer
            key={index}
            direction={direction}
            text={`Esta es la descripción de un tooltip "${position}".`}>
            <Button type="link" isIconSpinner={<span className="material-icons-round">{icon}</span>}></Button>
          </TooltipContainer>
        ))}
      </div>
      <div className="storybook__container-tooltip-row">
        <div className="storybook__container-tooltip-column left">
          {directionLeft.map(({ direction, icon, position }, index) => (
            <TooltipContainer
              key={index}
              direction={direction}
              text={`Esta es la descripción de un tooltip "${position}".`}>
              <Button type="link" isIconSpinner={<span className="material-icons-round">{icon}</span>}></Button>
            </TooltipContainer>
          ))}
        </div>
        <div className="storybook__container-tooltip-column right">
          {directionRight.map(({ direction, icon, position }, index) => (
            <TooltipContainer
              key={index}
              direction={direction}
              text={`Esta es la descripción de un tooltip "${position}".`}>
              <Button type="link" isIconSpinner={<span className="material-icons-round">{icon}</span>}></Button>
            </TooltipContainer>
          ))}
        </div>
      </div>
      <div className="storybook__container-tooltip-row">
        {directionBottom.map(({ direction, icon, position }, index) => (
          <TooltipContainer
            key={index}
            direction={direction}
            text={`Esta es la descripción de un tooltip "${position}".`}>
            <Button type="link" isIconSpinner={<span className="material-icons-round">{icon}</span>}></Button>
          </TooltipContainer>
        ))}
      </div>

      <br />
      <br />

      <div className="storybook__container-tooltip-row">
        {directionTop.map(({ direction, position }, index) => (
          <TooltipContainer
            key={index}
            direction={direction}
            text={`Esta es la descripción de un tooltip "${position}".`}
            iconBox={true}>
            <span className="material-icons-round">help</span>
          </TooltipContainer>
        ))}
      </div>
      <div className="storybook__container-tooltip-row">
        <div className="storybook__container-tooltip-column left">
          {directionLeft.map(({ direction, position }, index) => (
            <TooltipContainer
              key={index}
              direction={direction}
              text={`Esta es la descripción de un tooltip "${position}".`}
              iconBox={true}>
              <span className="material-icons-round">help</span>
            </TooltipContainer>
          ))}
        </div>
        <div className="storybook__container-tooltip-column right">
          {directionRight.map(({ direction, position }, index) => (
            <TooltipContainer
              key={index}
              direction={direction}
              text={`Esta es la descripción de un tooltip "${position}".`}
              iconBox={true}>
              <span className="material-icons-round">help</span>
            </TooltipContainer>
          ))}
        </div>
      </div>
      <div className="storybook__container-tooltip-row">
        {directionBottom.map(({ direction, position }, index) => (
          <TooltipContainer
            key={index}
            direction={direction}
            text={`Esta es la descripción de un tooltip "${position}".`}
            iconBox={true}>
            <span className="material-icons-round">help</span>
          </TooltipContainer>
        ))}
      </div>
    </div>
  );
};
