import React from 'react';
import { Button, ButtonType } from '../button.interface';

export const ButtonLG = (): JSX.Element => {
  const BUTTONS: ButtonType = {
    default: [
      { name: 'primary', class: 'btn-lg btn-primary' },
      { name: 'secondary', class: 'btn-lg btn-secondary' },
      { name: 'success', class: 'btn-lg btn-success' },
      { name: 'danger', class: 'btn-lg btn-danger' },
      { name: 'link', class: 'btn-lg btn-link' }
    ],
    hover: [
      { name: 'primary', class: 'btn-lg btn-primary active' },
      { name: 'secondary', class: 'btn-lg btn-secondary active' },
      { name: 'success', class: 'btn-lg btn-success active' },
      { name: 'danger', class: 'btn-lg btn-danger active' },
      { name: 'link', class: 'btn-lg btn-link active' }
    ],
    focus: [
      { name: 'primary', class: 'btn-lg btn-primary focus' },
      { name: 'secondary', class: 'btn-lg btn-secondary focus' },
      { name: 'success', class: 'btn-lg btn-success focus' },
      { name: 'danger', class: 'btn-lg btn-danger focus' },
      { name: 'link', class: 'btn-lg btn-link focus' }
    ],
    disabled: [
      { name: 'primary', class: 'btn-lg btn-primary disabled' },
      { name: 'secondary', class: 'btn-lg btn-secondary disabled' },
      { name: 'success', class: 'btn-lg btn-success disabled' },
      { name: 'danger', class: 'btn-lg btn-danger disabled' },
      { name: 'link', class: 'btn-lg btn-link disabled' }
    ],
    outline: [
      { name: 'primary', class: 'btn-lg btn-outline-primary' },
      { name: 'secondary', class: 'btn-lg btn-outline-secondary' },
      { name: 'success', class: 'btn-lg btn-outline-success' },
      { name: 'danger', class: 'btn-lg btn-outline-danger' },
      { name: 'link', class: 'btn-lg btn-outline-link' }
    ]
  };

  return (
    <div>
      <div className="row">
        {BUTTONS.default.map((button: Button) => (
          <div className="col-md-2 mt-5" key={button.name}>
            <h4>Default</h4>
            <button type="button" className={`btn ${button.class}`}>
              {button.name}
            </button>
          </div>
        ))}
      </div>
      <div className="row">
        {BUTTONS.hover.map((button: Button) => (
          <div className="col-md-2 mt-5" key={button.name}>
            <h4>Hover</h4>
            <button type="button" className={`btn ${button.class}`}>
              {button.name}
            </button>
          </div>
        ))}
      </div>
      <div className="row">
        {BUTTONS.focus.map((button: Button) => (
          <div className="col-md-2 mt-5" key={button.name}>
            <h4>Focus</h4>
            <button type="button" className={`btn ${button.class}`}>
              {button.name}
            </button>
          </div>
        ))}
      </div>
      <div className="row">
        {BUTTONS.disabled.map((button: Button) => (
          <div className="col-md-2 mt-5" key={button.name}>
            <h4>Disabled</h4>
            <button type="button" className={`btn ${button.class}`} disabled={true}>
              {button.name}
            </button>
          </div>
        ))}
      </div>
      <div className="row">
        {BUTTONS.outline.map((button: Button) => (
          <div className="col-md-2 mt-5" key={button.name}>
            <h4>Outline</h4>
            <button type="button" className={`btn ${button.class}`}>
              {button.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
