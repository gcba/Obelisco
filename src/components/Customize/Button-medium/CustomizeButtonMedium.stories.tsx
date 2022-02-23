import React from 'react';
import { Button, ButtonType } from '../button.interface';

export const ButtonMedium = (): JSX.Element => {
  const BUTTONS: ButtonType = {
    default: [
      { name: 'primary', class: 'btn-primary' },
      { name: 'secondary', class: 'btn-secondary' },
      { name: 'success', class: 'btn-success' },
      { name: 'danger', class: 'btn-danger' },
      { name: 'link', class: 'btn-link' }
    ],
    hover: [
      { name: 'primary', class: 'btn-primary active' },
      { name: 'secondary', class: 'btn-secondary active' },
      { name: 'success', class: 'btn-success active' },
      { name: 'danger', class: 'btn-danger active' },
      { name: 'link', class: 'btn-link active' }
    ],
    focus: [
      { name: 'primary', class: 'btn-primary focus' },
      { name: 'secondary', class: 'btn-secondary focus' },
      { name: 'success', class: 'btn-success focus' },
      { name: 'danger', class: 'btn-danger focus' },
      { name: 'link', class: 'btn-link focus' }
    ],
    disabled: [
      { name: 'primary', class: 'btn-primary disabled' },
      { name: 'secondary', class: 'btn-secondary disabled' },
      { name: 'success', class: 'btn-success disabled' },
      { name: 'danger', class: 'btn-danger disabled' },
      { name: 'link', class: 'btn-link disabled' }
    ],
    outline: [
      { name: 'primary', class: 'btn-outline-primary' },
      { name: 'secondary', class: 'btn-outline-secondary' },
      { name: 'success', class: 'btn-outline-success' },
      { name: 'danger', class: 'btn-outline-danger' },
      { name: 'link', class: 'btn-outline-link' }
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
