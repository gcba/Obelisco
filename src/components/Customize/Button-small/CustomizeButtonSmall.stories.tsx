import React from 'react';
import { Button, ButtonType } from '../button.interface';

export const ButtonSmall = (): JSX.Element => {
  const BUTTONS: ButtonType = {
    default: [
      { name: 'primary', class: 'btn-sm btn-primary' },
      { name: 'secondary', class: 'btn-sm btn-secondary' },
      { name: 'success', class: 'btn-sm btn-success' },
      { name: 'danger', class: 'btn-sm btn-danger' },
      { name: 'link', class: 'btn-sm btn-link' }
    ],
    hover: [
      { name: 'primary', class: 'btn-sm btn-primary active' },
      { name: 'secondary', class: 'btn-sm btn-secondary active' },
      { name: 'success', class: 'btn-sm btn-success active' },
      { name: 'danger', class: 'btn-sm btn-danger active' },
      { name: 'link', class: 'btn-sm btn-link active' }
    ],
    focus: [
      { name: 'primary', class: 'btn-sm btn-primary focus' },
      { name: 'secondary', class: 'btn-sm btn-secondary focus' },
      { name: 'success', class: 'btn-sm btn-success focus' },
      { name: 'danger', class: 'btn-sm btn-danger focus' },
      { name: 'link', class: 'btn-sm btn-link focus' }
    ],
    disabled: [
      { name: 'primary', class: 'btn-sm btn-primary disabled' },
      { name: 'secondary', class: 'btn-sm btn-secondary disabled' },
      { name: 'success', class: 'btn-sm btn-success disabled' },
      { name: 'danger', class: 'btn-sm btn-danger disabled' },
      { name: 'link', class: 'btn-sm btn-link disabled' }
    ],
    outline: [
      { name: 'primary', class: 'btn-sm btn-outline-primary' },
      { name: 'secondary', class: 'btn-sm btn-outline-secondary' },
      { name: 'success', class: 'btn-sm btn-outline-success' },
      { name: 'danger', class: 'btn-sm btn-outline-danger' },
      { name: 'link', class: 'btn-sm btn-outline-link' }
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
