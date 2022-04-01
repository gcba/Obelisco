// Base
import React from 'react';
import './Options.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes | Opciones',
  decorators: [withA11y]
};

export const OpcionesGrande = (): JSX.Element => (
  <form className="d-flex flex-row justify-content-start options-container">
    <fieldset className="dropdown show">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true">
        Desplegable
      </button>
      <div className="dropdown-menu show">
        <input type="radio" id="options-example1" name="example1" className="sr-only" />
        <label htmlFor="options-example1" className="dropdown-item">
          Opción 1
        </label>

        <input type="radio" id="options-example2" name="example1" className="sr-only" />
        <label htmlFor="options-example2" className="dropdown-item">
          Opción 2
        </label>

        <input type="radio" id="options-example3" name="example1" className="sr-only" />
        <label htmlFor="options-example3" className="dropdown-item">
          Opción 3
        </label>
      </div>
    </fieldset>

    <fieldset className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Desplegable
      </button>
      <div className="dropdown-menu">
        <input type="radio" id="options-example4" name="example2" className="sr-only" />
        <label htmlFor="options-example4" className="dropdown-item">
          Opción 4
        </label>

        <input type="radio" id="options-example5" name="example2" className="sr-only" />
        <label htmlFor="options-example5" className="dropdown-item">
          Opción 5
        </label>

        <input type="radio" id="options-example6" name="example2" className="sr-only" />
        <label htmlFor="options-example6" className="dropdown-item">
          Opción 6
        </label>
      </div>
    </fieldset>

    <fieldset className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Desplegable
      </button>
      <div className="dropdown-menu">
        <input type="radio" id="options-example7" name="example3" className="sr-only" />
        <label htmlFor="options-example7" className="dropdown-item">
          Opción 7
        </label>

        <input type="radio" id="options-example8" name="example3" className="sr-only" />
        <label htmlFor="options-example8" className="dropdown-item">
          Opción 8
        </label>

        <input type="radio" id="options-example9" name="example3" className="sr-only" />
        <label htmlFor="options-example9" className="dropdown-item">
          Opción 9
        </label>
      </div>
    </fieldset>
  </form>
);
OpcionesGrande.story = { name: 'Opciones Grande' };

export const OpcionesMediano = (): JSX.Element => (
  <form className="d-flex flex-row justify-content-start options-container">
    <fieldset className="dropdown show">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true">
        Desplegable
      </button>
      <div className="dropdown-menu show">
        <input type="radio" id="options-example1" name="example1" className="sr-only" />
        <label htmlFor="options-example1" className="dropdown-item">
          Opción 1
        </label>

        <input type="radio" id="options-example2" name="example1" className="sr-only" />
        <label htmlFor="options-example2" className="dropdown-item">
          Opción 2
        </label>

        <input type="radio" id="options-example3" name="example1" className="sr-only" />
        <label htmlFor="options-example3" className="dropdown-item">
          Opción 3
        </label>
      </div>
    </fieldset>

    <fieldset className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Desplegable
      </button>
      <div className="dropdown-menu">
        <input type="radio" id="options-example4" name="example2" className="sr-only" />
        <label htmlFor="options-example4" className="dropdown-item">
          Opción 4
        </label>

        <input type="radio" id="options-example5" name="example2" className="sr-only" />
        <label htmlFor="options-example5" className="dropdown-item">
          Opción 5
        </label>

        <input type="radio" id="options-example6" name="example2" className="sr-only" />
        <label htmlFor="options-example6" className="dropdown-item">
          Opción 6
        </label>
      </div>
    </fieldset>

    <fieldset className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Desplegable
      </button>

      <div className="dropdown-menu">
        <input type="radio" id="options-example7" name="example3" className="sr-only" />
        <label htmlFor="options-example7" className="dropdown-item">
          Opción 7
        </label>

        <input type="radio" id="options-example8" name="example3" className="sr-only" />
        <label htmlFor="options-example8" className="dropdown-item">
          Opción 8
        </label>

        <input type="radio" id="options-example9" name="example3" className="sr-only" />
        <label htmlFor="options-example9" className="dropdown-item">
          Opción 9
        </label>
      </div>
    </fieldset>
  </form>
);
OpcionesMediano.story = { name: 'Opciones Mediano' };

export const OpcionesChico = (): JSX.Element => (
  <form className="d-flex flex-row justify-content-start options-container">
    <fieldset className="dropdown show">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-sm dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="true">
        Desplegable
      </button>
      <div className="dropdown-menu show">
        <input type="radio" id="options-example1" name="example1" className="sr-only" />
        <label htmlFor="options-example1" className="dropdown-item">
          Opción 1
        </label>

        <input type="radio" id="options-example2" name="example1" className="sr-only" />
        <label htmlFor="options-example2" className="dropdown-item">
          Opción 2
        </label>

        <input type="radio" id="options-example3" name="example1" className="sr-only" />
        <label htmlFor="options-example3" className="dropdown-item">
          Opción 3
        </label>
      </div>
    </fieldset>

    <fieldset className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-sm dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Desplegable
      </button>
      <div className="dropdown-menu">
        <input type="radio" id="options-example4" name="example2" className="sr-only" />
        <label htmlFor="options-example4" className="dropdown-item">
          Opción 4
        </label>

        <input type="radio" id="options-example5" name="example2" className="sr-only" />
        <label htmlFor="options-example5" className="dropdown-item">
          Opción 5
        </label>

        <input type="radio" id="options-example6" name="example2" className="sr-only" />
        <label htmlFor="options-example6" className="dropdown-item">
          Opción 6
        </label>
      </div>
    </fieldset>

    <fieldset className="dropdown">
      <button
        type="button"
        className="btn btn-dropdown btn-dropdown-sm dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Desplegable
      </button>

      <div className="dropdown-menu">
        <input type="radio" id="options-example7" name="example3" className="sr-only" />
        <label htmlFor="options-example7" className="dropdown-item">
          Opción 7
        </label>

        <input type="radio" id="options-example8" name="example3" className="sr-only" />
        <label htmlFor="options-example8" className="dropdown-item">
          Opción 8
        </label>

        <input type="radio" id="options-example9" name="example3" className="sr-only" />
        <label htmlFor="options-example9" className="dropdown-item">
          Opción 9
        </label>
      </div>
    </fieldset>
  </form>
);
OpcionesChico.story = { name: 'Opciones Chico' };
