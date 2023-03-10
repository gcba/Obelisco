// Base
import React from 'react';
import './Tooltip.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { TooltipButtom, TooltipIcon } from '.';
import { Button } from '../Button/index';
import { flowBottom, flowLeft, flowRight, flowTop } from '../utils';

// Configuración general del componente
export default {
  title: 'Componentes|Tooltip',
  decorators: [withA11y]
};

export const Tooltip = (): JSX.Element => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-row">
        {flowTop.map(({ flow, icon, position }, index) => (
          <TooltipButtom key={index} flow={flow} text={`Esta es la descripción de un tooltip "${position}".`}>
            <Button type="link" iconMaterial={icon}></Button>
          </TooltipButtom>
        ))}
      </div>
      <div className="tooltip-row">
        <div className="tooltip-column left">
          {flowLeft.map(({ flow, icon, position }, index) => (
            <TooltipButtom key={index} flow={flow} text={`Esta es la descripción de un tooltip "${position}".`}>
              <Button type="link" iconMaterial={icon}></Button>
            </TooltipButtom>
          ))}
        </div>
        <div className="tooltip-column right">
          {flowRight.map(({ flow, icon, position }, index) => (
            <TooltipButtom key={index} flow={flow} text={`Esta es la descripción de un tooltip "${position}".`}>
              <Button type="link" iconMaterial={icon}></Button>
            </TooltipButtom>
          ))}
        </div>
      </div>
      <div className="tooltip-row">
        {flowBottom.map(({ flow, icon, position }, index) => (
          <TooltipButtom key={index} flow={flow} text={`Esta es la descripción de un tooltip "${position}".`}>
            <Button type="link" iconMaterial={icon}></Button>
          </TooltipButtom>
        ))}
      </div>

      <br />
      <br />

      <div className="tooltip-row">
        {flowTop.map(({ flow, position }, index) => (
          <TooltipIcon key={index} flow={flow} text={`Esta es la descripción de un tooltip "${position}".`} box={true}>
            <span className="material-icons-round">help</span>
          </TooltipIcon>
        ))}
      </div>
      <div className="tooltip-row">
        <div className="tooltip-column left">
          {flowLeft.map(({ flow, position }, index) => (
            <TooltipIcon
              key={index}
              flow={flow}
              text={`Esta es la descripción de un tooltip "${position}".`}
              box={true}>
              <span className="material-icons-round">help</span>
            </TooltipIcon>
          ))}
        </div>
        <div className="tooltip-column right">
          {flowRight.map(({ flow, position }, index) => (
            <TooltipIcon
              key={index}
              flow={flow}
              text={`Esta es la descripción de un tooltip "${position}".`}
              box={true}>
              <span className="material-icons-round">help</span>
            </TooltipIcon>
          ))}
        </div>
      </div>
      <div className="tooltip-row">
        {flowBottom.map(({ flow, position }, index) => (
          <TooltipIcon key={index} flow={flow} text={`Esta es la descripción de un tooltip "${position}".`} box={true}>
            <span className="material-icons-round">help</span>
          </TooltipIcon>
        ))}
      </div>
    </div>
  );
};
