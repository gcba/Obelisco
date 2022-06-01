// Base
import React, { MouseEvent, useState } from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import './FilterSelected.scss';

// Config
export default {
  title: 'Componentes|Filtros',
  decorators: [withA11y]
};

const LIST = [
  'Abastecimiento y logistica',
  'Administración y contabilidad',
  'Aduana y comercio exterior',
  'Atención al cliente, call center',
  'Comercial, ventas y negocios',
  'Comunicación',
  'Abastecimiento y logistica 2',
  'Administración y contabilidad 2',
  'Aduana y comercio exterior 2',
  'Atención al cliente, call center 2',
  'Comercial, ventas y negocios 2',
  'Comunicación 2',
  'Abastecimiento y logistica 3',
  'Administración y contabilidad 3',
  'Aduana y comercio exterior 3',
  'Atención al cliente, call center 3',
  'Comercial, ventas y negocios 3',
  'Comunicación 3'
];

export const Filtro = (): JSX.Element => {
  return (
    <div>
      <form>
        <fieldset className="dropdown dropdown-multiple" id="drop-multiple">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border dropdown-toggle"
            data-o-toggle="dropdown-multiple">
            Modalidad
          </button>
          <div className="dropdown-menu check-menu" id="drop-menu-multiple">
            <label htmlFor="drop1" className="dropdown-item">
              <input type="checkbox" id="drop1" data-select-item="select-multiple" />
              <span>Presencial</span>
            </label>

            <label htmlFor="drop2" className="dropdown-item">
              <input type="checkbox" id="drop2" data-select-item="select-multiple" />
              <span>Virtual</span>
            </label>

            <label htmlFor="drop3" className="dropdown-item">
              <input type="checkbox" id="drop3" data-select-item="select-multiple" />
              <span>Presencial y virtual</span>
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export const Filtro2 = (): JSX.Element => {
  const [items, setItems] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    if (items.includes(value)) {
      setItems(items.filter((item) => item !== value));
      return;
    }

    if (items.length === 4) return;
    setItems([...items, value]);
  };

  const handleDeleteFruit = (item: string, e: MouseEvent): void => {
    e.stopPropagation();
    setItems(items.filter((i) => i !== item));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
      <div className="dropdown-check-list">
        <span>Categorías</span>
        <div className="anchor" id="category">
          {items.length === 0 && <span>Todas</span>}
          {items.length !== 0 &&
            items.map((item, index) => (
              <span key={index} className="badge badge-secondary">
                <div className="badge-content-item">
                  {item} <i onClick={(e) => handleDeleteFruit(item, e)} className="bx bx-x"></i>
                </div>
              </span>
            ))}
        </div>
        <ul className="dropdown-menu">
          {LIST.map((item, index) => (
            <li className="dropdown-list" key={index}>
              <label
                htmlFor={`item-${index}`}
                className={`dropdown-item ${items.length === 4 ? (items.includes(item) ? '' : 'cancel-input') : ''}`}>
                <input
                  type="checkbox"
                  id={`item-${index}`}
                  value={item}
                  checked={items.includes(item)}
                  onChange={handleInputChange}
                />
                <span id="item">{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
