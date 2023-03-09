// Base
import React from 'react';
import './Tooltip.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

//Components
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
        {flowTop.map(({ flow, icon }, index) => (
          <TooltipButtom key={index} flow={flow} text="Esta es la descripción de un tooltip">
            <Button type="link" iconMaterial={icon}></Button>
          </TooltipButtom>
        ))}
      </div>
      <div className="tooltip-row">
        <div className="tooltip-column left">
          {flowRight.map(({ flow, icon }, index) => (
            <TooltipButtom key={index} flow={flow} text="Esta es la descripción de un tooltip">
              <Button type="link" iconMaterial={icon}></Button>
            </TooltipButtom>
          ))}
        </div>
        <div className="tooltip-column right">
          {flowLeft.map(({ flow, icon }, index) => (
            <TooltipButtom key={index} flow={flow} text="Esta es la descripción de un tooltip">
              <Button type="link" iconMaterial={icon}></Button>
            </TooltipButtom>
          ))}
        </div>
      </div>
      <div className="tooltip-row">
        {flowBottom.map(({ flow, icon }, index) => (
          <TooltipButtom key={index} flow={flow} text="Esta es la descripción de un tooltip">
            <Button type="link" iconMaterial={icon}></Button>
          </TooltipButtom>
        ))}
      </div>

      <br />
      <br />

      <div className="tooltip-row">
        {flowTop.map(({ flow }, index) => (
          <TooltipIcon key={index} flow={flow} text="Esta es la descripción de un tooltip" box={true}>
            <span className="material-icons-round">help</span>
          </TooltipIcon>
        ))}
      </div>
      <div className="tooltip-row">
        <div className="tooltip-column left">
          {flowRight.map(({ flow }, index) => (
            <TooltipIcon key={index} flow={flow} text="Esta es la descripción de un tooltip" box={true}>
              <span className="material-icons-round">help</span>
            </TooltipIcon>
          ))}
        </div>
        <div className="tooltip-column right">
          {flowLeft.map(({ flow }, index) => (
            <TooltipIcon key={index} flow={flow} text="Esta es la descripción de un tooltip" box={true}>
              <span className="material-icons-round">help</span>
            </TooltipIcon>
          ))}
        </div>
      </div>
      <div className="tooltip-row">
        {flowBottom.map(({ flow }, index) => (
          <TooltipIcon key={index} flow={flow} text="Esta es la descripción de un tooltip" box={true}>
            <span className="material-icons-round">help</span>
          </TooltipIcon>
        ))}
      </div>
    </div>
  );
};
