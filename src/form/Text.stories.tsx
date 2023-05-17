// Base
import React from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Formulario|Texto',
  decorators: [withA11y]
};

export const Texto = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="name-input">Nombre *</label>
        <input type="text" className="form-control" id="name-input" name="name" placeholder="Ejemplo: Camila" />
      </div>
    </div>
  );
};

export const Numero = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="number-input">Campo numérico *</label>
        <input type="number" className="form-control" id="number-input" name="number" value="30" />
      </div>
    </div>
  );
};

Numero.story = { name: 'Número' };

export const CorreoElectronico = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="email-input">Correo electrónico</label>
        <span id="email-help" className="form-text">
          Nunca lo vamos a compartir con nadie.
        </span>
        <input
          type="email"
          className="form-control"
          id="email-input"
          name="email"
          aria-describedby="email-help"
          placeholder="nombre@ejemplo.com"
        />
      </div>
    </div>
  );
};

CorreoElectronico.story = { name: 'Correo electrónico' };

export const Fecha = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="date-input">Fecha</label>
        <span id="date-help" className="form-text">
          Ingrese una fecha posterior a hoy.
        </span>
        <input type="date" className="form-control" id="date-input" name="date" aria-describedby="date-help" />
      </div>
    </div>
  );
};

export const Calendario = (): JSX.Element => {
  return (
    <div className="calendar">
      <div className="date-header">
        <h4>Diciembre</h4>
        <span>2023</span>
      </div>
      <div className="date-body">
        <table>
          <tbody>
            <tr className="date-week">
              <th>D</th>
              <th>L</th>
              <th>M</th>
              <th>M</th>
              <th>J</th>
              <th>V</th>
              <th>S</th>
            </tr>
            <tr className="date-numbers">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
            </tr>
            <tr className="date-numbers">
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
              <td>
                <span>6</span>
              </td>
              <td>
                <span>7</span>
              </td>
              <td title="Inmaculada Concepción de María">
                <span className="active">8</span>
              </td>
              <td>
                <span>9</span>
              </td>
            </tr>
            <tr className="date-numbers">
              <td>
                <span>10</span>
              </td>
              <td>
                <span>11</span>
              </td>
              <td>
                <span>12</span>
              </td>
              <td>
                <span>13</span>
              </td>
              <td>
                <span>14</span>
              </td>
              <td>
                <span>15</span>
              </td>
              <td>
                <span>16</span>
              </td>
            </tr>
            <tr className="date-numbers">
              <td>
                <span>17</span>
              </td>
              <td>
                <span>18</span>
              </td>
              <td>
                <span>19</span>
              </td>
              <td>
                <span>20</span>
              </td>
              <td>
                <span>21</span>
              </td>
              <td>
                <span>22</span>
              </td>
              <td>
                <span>23</span>
              </td>
            </tr>
            <tr className="date-numbers">
              <td>
                <span>24</span>
              </td>
              <td title="Navidad">
                <span className="active">25</span>
              </td>
              <td>
                <span>26</span>
              </td>
              <td>
                <span>27</span>
              </td>
              <td>
                <span>28</span>
              </td>
              <td>
                <span>29</span>
              </td>
              <td>
                <span>30</span>
              </td>
            </tr>
            <tr className="date-numbers">
              <td>
                <span>31</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="date-footer">
        <ul className="date-footer-list">
          <li>
            <strong>8.</strong> Inmaculada Concepción de María
          </li>
          <li>
            <strong>25.</strong> Navidad
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Dia = (): JSX.Element => {
  return (
    <div className="calendar">
      <h5 className="date-title">Seleccioná un día</h5>
      <div className="date-header">
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-sm dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Agosto
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button">
              Septiembre
            </button>
            <button className="dropdown-item" type="button">
              Octubre
            </button>
            <button className="dropdown-item" type="button">
              Noviembre
            </button>
          </div>
        </div>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-sm dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            2023
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button">
              2024
            </button>
            <button className="dropdown-item" type="button">
              2025
            </button>
            <button className="dropdown-item" type="button">
              2026
            </button>
          </div>
        </div>
      </div>
      <form className="date-body" data-toggle="buttons">
        <table>
          <tbody>
            <tr className="date-week">
              <th>D</th>
              <th>L</th>
              <th>M</th>
              <th>M</th>
              <th>J</th>
              <th>V</th>
              <th>S</th>
            </tr>
            <tr className="date-numbers">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span>1</span>
              </td>
              <td>
                <span>2</span>
              </td>
            </tr>
            <tr className="date-numbers">
              <td>
                <span>3</span>
              </td>
              <td>
                <span>4</span>
              </td>
              <td>
                <span>5</span>
              </td>
              <td>
                <span>6</span>
              </td>
              <td>
                <label className="label-radio btn active" htmlFor="7">
                  <input type="radio" className="date-radio" name="7" id="7" />7
                </label>
              </td>
              <td>
                <span>8</span>
              </td>
              <td>
                <span>9</span>
              </td>
            </tr>
            <tr className="date-numbers">
              <td>
                <span>10</span>
              </td>
              <td>
                <label className="label-radio btn" htmlFor="11">
                  <input type="radio" className="date-radio" name="11" id="11" />
                  11
                </label>
              </td>
              <td>
                <label className="label-radio btn" htmlFor="12">
                  <input type="radio" className="date-radio" name="12" id="12" />
                  12
                </label>
              </td>
              <td>
                <span>13</span>
              </td>
              <td>
                <span>14</span>
              </td>
              <td>
                <label className="label-radio btn" htmlFor="15">
                  <input type="radio" className="date-radio" name="15" id="15" />
                  15
                </label>
              </td>
              <td>
                <span>16</span>
              </td>
            </tr>
            <tr className="date-numbers">
              <td>
                <span>17</span>
              </td>
              <td>
                <label className="label-radio btn" htmlFor="18">
                  <input type="radio" className="date-radio" name="18" id="18" />
                  18
                </label>
              </td>
              <td>
                <label className="label-radio btn" htmlFor="19">
                  <input type="radio" className="date-radio" name="19" id="19" />
                  19
                </label>
              </td>
              <td>
                <span>20</span>
              </td>
              <td>
                <span>21</span>
              </td>
              <td>
                <label className="label-radio btn" htmlFor="22">
                  <input type="radio" className="date-radio" name="22" id="22" />
                  22
                </label>
              </td>
              <td>
                <span>23</span>
              </td>
            </tr>
            <tr className="date-numbers">
              <td>
                <span>24</span>
              </td>
              <td>
                <label className="label-radio btn" htmlFor="25">
                  <input type="radio" className="date-radio" name="25" id="25" />
                  25
                </label>
              </td>
              <td>
                <label className="label-radio btn" htmlFor="26">
                  <input type="radio" className="date-radio" name="26" id="26" />
                  26
                </label>
              </td>
              <td>
                <span>27</span>
              </td>
              <td>
                <label className="label-radio btn" htmlFor="28">
                  <input type="radio" className="date-radio" name="28" id="28" />
                  28
                </label>
              </td>
              <td>
                <label className="label-radio btn" htmlFor="29">
                  <input type="radio" className="date-radio" name="29" id="29" />
                  29
                </label>
              </td>
              <td>
                <span>30</span>
              </td>
            </tr>
            <tr className="date-numbers">
              <td>
                <span>31</span>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="date-footer">
        <ul className="date-footer-list list-inline">
          <li>
            <span className="material-icons-round date-icon-available">circle</span> Fecha disponible.
          </li>
          <li>
            <span className="material-icons-round date-icon-active">circle</span> Fecha seleccionada.
          </li>
        </ul>
      </div>
    </div>
  );
};

export const DiaYHorario = (): JSX.Element => {
  return (
    <div className="calendar-wrapper">
      <div className="calendar-picker">
        <div className="calendar">
          <h5 className="date-title">Seleccioná un día</h5>
          <div className="date-header">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-sm dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Agosto
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Septiembre
                </button>
                <button className="dropdown-item" type="button">
                  Octubre
                </button>
                <button className="dropdown-item" type="button">
                  Noviembre
                </button>
              </div>
            </div>
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-sm dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                2023
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  2024
                </button>
                <button className="dropdown-item" type="button">
                  2025
                </button>
                <button className="dropdown-item" type="button">
                  2026
                </button>
              </div>
            </div>
          </div>
          <form className="date-body" data-toggle="buttons">
            <table>
              <tbody>
                <tr className="date-week">
                  <th>D</th>
                  <th>L</th>
                  <th>M</th>
                  <th>M</th>
                  <th>J</th>
                  <th>V</th>
                  <th>S</th>
                </tr>
                <tr className="date-numbers">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <span>1</span>
                  </td>
                  <td>
                    <span>2</span>
                  </td>
                </tr>
                <tr className="date-numbers">
                  <td>
                    <span>3</span>
                  </td>
                  <td>
                    <span>4</span>
                  </td>
                  <td>
                    <span>5</span>
                  </td>
                  <td>
                    <span>6</span>
                  </td>
                  <td>
                    <label className="label-radio btn active" htmlFor="7">
                      <input type="radio" className="date-radio" name="7" id="7" />7
                    </label>
                  </td>
                  <td>
                    <span>8</span>
                  </td>
                  <td>
                    <span>9</span>
                  </td>
                </tr>
                <tr className="date-numbers">
                  <td>
                    <span>10</span>
                  </td>
                  <td>
                    <label className="label-radio btn" htmlFor="11">
                      <input type="radio" className="date-radio" name="11" id="11" />
                      11
                    </label>
                  </td>
                  <td>
                    <label className="label-radio btn" htmlFor="12">
                      <input type="radio" className="date-radio" name="12" id="12" />
                      12
                    </label>
                  </td>
                  <td>
                    <span>13</span>
                  </td>
                  <td>
                    <span>14</span>
                  </td>
                  <td>
                    <label className="label-radio btn" htmlFor="15">
                      <input type="radio" className="date-radio" name="15" id="15" />
                      15
                    </label>
                  </td>
                  <td>
                    <span>16</span>
                  </td>
                </tr>
                <tr className="date-numbers">
                  <td>
                    <span>17</span>
                  </td>
                  <td>
                    <label className="label-radio btn" htmlFor="18">
                      <input type="radio" className="date-radio" name="18" id="18" />
                      18
                    </label>
                  </td>
                  <td>
                    <label className="label-radio btn" htmlFor="19">
                      <input type="radio" className="date-radio" name="19" id="19" />
                      19
                    </label>
                  </td>
                  <td>
                    <span>20</span>
                  </td>
                  <td>
                    <span>21</span>
                  </td>
                  <td>
                    <label className="label-radio btn" htmlFor="22">
                      <input type="radio" className="date-radio" name="22" id="22" />
                      22
                    </label>
                  </td>
                  <td>
                    <span>23</span>
                  </td>
                </tr>
                <tr className="date-numbers">
                  <td>
                    <span>24</span>
                  </td>
                  <td>
                    <label className="label-radio btn" htmlFor="25">
                      <input type="radio" className="date-radio" name="25" id="25" />
                      25
                    </label>
                  </td>
                  <td>
                    <label className="label-radio btn" htmlFor="26">
                      <input type="radio" className="date-radio" name="26" id="26" />
                      26
                    </label>
                  </td>
                  <td>
                    <span>27</span>
                  </td>
                  <td>
                    <label className="label-radio btn" htmlFor="28">
                      <input type="radio" className="date-radio" name="28" id="28" />
                      28
                    </label>
                  </td>
                  <td>
                    <label className="label-radio btn" htmlFor="29">
                      <input type="radio" className="date-radio" name="29" id="29" />
                      29
                    </label>
                  </td>
                  <td>
                    <span>30</span>
                  </td>
                </tr>
                <tr className="date-numbers">
                  <td>
                    <span>31</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </form>
          <div className="date-footer">
            <ul className="date-footer-list list-inline">
              <li>
                <span className="material-icons-round date-icon-available">circle</span> Fecha disponible.
              </li>
              <li>
                <span className="material-icons-round date-icon-active">circle</span> Fecha seleccionada.
              </li>
            </ul>
          </div>
        </div>
        <div className="calendar-time">
          <h5 className="time-title">Seleccioná un horario</h5>
          <div className="custom-control custom-radio time-custom-radio">
            <input
              className="custom-control-input"
              type="radio"
              name="date-time"
              id="primera-opcion"
              value="primera"
              defaultChecked={true}
            />
            <label className="custom-control-label" htmlFor="primera-opcion">
              Primera opción
            </label>
          </div>
          <div className="custom-control custom-radio time-custom-radio">
            <input
              className="custom-control-input"
              type="radio"
              name="date-time"
              id="segunda-opcion"
              value="segunda"
              defaultChecked={true}
            />
            <label className="custom-control-label" htmlFor="segunda-opcion">
              Segunda opción
            </label>
          </div>
          <div className="custom-control custom-radio time-custom-radio">
            <input
              className="custom-control-input"
              type="radio"
              name="date-time"
              id="tercera-opcion"
              value="tercera"
              defaultChecked={true}
            />
            <label className="custom-control-label" htmlFor="tercera-opcion">
              Tercera opción
            </label>
          </div>
          <div className="custom-control custom-radio time-custom-radio">
            <input
              className="custom-control-input"
              type="radio"
              name="date-time"
              id="cuarta-opcion"
              value="cuarta"
              defaultChecked={true}
            />
            <label className="custom-control-label" htmlFor="cuarta-opcion">
              Cuarta opción
            </label>
          </div>
          <div className="custom-control custom-radio time-custom-radio">
            <input
              className="custom-control-input"
              type="radio"
              name="date-time"
              id="quinta-opcion"
              value="quinta"
              defaultChecked={true}
            />
            <label className="custom-control-label" htmlFor="quinta-opcion">
              Quinta opción
            </label>
          </div>
          <div className="custom-control custom-radio time-custom-radio">
            <input
              className="custom-control-input"
              type="radio"
              name="date-time"
              id="sexta-opcion"
              value="sexta"
              defaultChecked={true}
            />
            <label className="custom-control-label" htmlFor="sexta-opcion">
              Sexta opción
            </label>
          </div>
          <div className="custom-control custom-radio time-custom-radio">
            <input
              className="custom-control-input"
              type="radio"
              name="date-time"
              id="septima-opcion"
              value="septima"
              defaultChecked={true}
            />
            <label className="custom-control-label" htmlFor="septima-opcion">
              Séptima opción
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BloqueDeTexto = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group">
        <label htmlFor="text-area">Bloque de texto</label>
        <textarea className="form-control" id="text-area" rows={3}></textarea>
      </div>
    </div>
  );
};

BloqueDeTexto.story = { name: 'Bloque de texto' };

export const Deshabilitado = (): JSX.Element => {
  return (
    <div className="form-wrapper">
      <div className="form-group disabled">
        <label htmlFor="name-input">Nombre</label>
        <input type="text" className="form-control" id="name-input" name="name" value="Camila" disabled />
      </div>
    </div>
  );
};
