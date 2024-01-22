// Base
import React from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { CalendarMonth } from './calendar';

// Configuración general del componente
export default {
  title: 'Formulario|Calendario',
  decorators: [withA11y]
};

const ACTIVE_DAYS = {
  JANUARY: [
    { day: 10, title: 'Día Mundial del Ave' },
    { day: 26, title: 'Día de la Educación Ambiental' },
    { day: 28, title: 'Día Mundial por la Reducción de las Emisiones de CO2' }
  ],
  FEBRUARY: [
    { day: 2, title: 'Día Mundial de los Humedales' },
    { day: 3, title: 'Día Mundial Sin Sorbetes' },
    { day: 14, title: 'Día Mundial de la Energía' }
  ],
  MARCH: [
    { day: 3, title: 'Día Mundial de la Vida Silvestre' },
    { day: 5, title: 'Día de la Eficiencia Energética' },
    { day: 15, title: 'Día Mundial del Consumo Responsable' },
    { day: 22, title: 'Día Mundial del Agua' },
    { day: 26, title: 'Día Mundial del Clima' }
  ],
  APRIL: [
    { day: 22, title: 'Día Internacional de la Tierra' },
    { day: 28, title: 'Día Internacional de la Conciencia sobre el Ruido' },
    { day: 29, title: 'Día del Animal' }
  ],
  MAY: [
    { day: 9, title: 'Día Internacional de las Aves' },
    { day: 10, title: 'Día del Recuperador Urbano' },
    { day: 17, title: 'Día del Reciclaje' },
    { day: 21, title: 'Día Mundial de la Diversidad Cultural para el Diálogo y el Desarrollo' },
    { day: 22, title: 'Día Mundial de la Biodiversidad' }
  ],
  JUNE: [
    { day: 5, title: 'Día Mundial del Ambiente' },
    { day: 8, title: 'Día Mundial de los Océanos' },
    { day: 17, title: 'Día Mundial de la Lucha contra la Desertificación y la Sequía' }
  ],
  JULY: [
    { day: 3, title: 'Día Internacional Libre de Bolsas de Plástico' },
    { day: 7, title: 'Día Nacional de la Conservación del Suelo' },
    { day: 8, title: 'Día de la Acción Ambiental por la Cuenca Matanza Riachuelo' }
  ],
  AUGUST: [
    { day: 1, title: 'Día de la Pachamama' },
    { day: 9, title: 'Día Internacional de los Pueblos Indígenas' },
    { day: 18, title: 'Día de la Prevención de Incendios Forestales' },
    { day: 26, title: 'Día Internacional contra el Dengue' },
    { day: 29, title: 'Día del Árbol' }
  ],
  SEPTEMBER: [
    { day: 16, title: 'Día Internacional de la Protección de la Capa de Ozono' },
    { day: 22, title: 'Día Mundial sin Automóvil' },
    {
      day: 25,
      title: 'Día Internacional de la Acción (Jornada de los ODS) y Día Nacional de la Ballena Franca Austral'
    },
    { day: 26, title: 'Día Mundial de la Salud Ambiental' },
    { day: 27, title: 'Día de la Conciencia Ambiental' },
    { day: 29, title: 'Día de la Concientización sobre la Pérdida y Desperdicio de Alimentos' }
  ],
  OCTOBER: [
    { day: 5, title: 'Día de la Educación Vial' },
    { day: 13, title: 'Día Internacional para la Reducción de los Desastres Naturales' },
    { day: 18, title: 'Día Mundial para la Protección de la Naturaleza' },
    { day: 24, title: 'Día Internacional contra el Cambio Climático' }
  ],
  NOVEMBER: [
    { day: 1, title: 'Día Mundial de la Ecología' },
    { day: 6, title: 'Día de los Parques Nacionales' },
    { day: 16, title: '3er jueves Día Mundial del Aire Puro' },
    { day: 22, title: 'Día de la Flor Nacional' }
  ],
  DECEMBER: [
    { day: 5, title: 'Día del Ciudadano Ambiental' },
    { day: 10, title: 'Día Internacional de los Derechos Humanos y de los Animales' },
    { day: 11, title: 'Día Internacional de las Montañas' }
  ]
};

export const CalendarLinkTooltip = (): JSX.Element => {
  return <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS.JANUARY}></CalendarMonth>;
};
CalendarLinkTooltip.story = { name: 'Con enlace y tooltip' };

export const CalendarYear = (): JSX.Element => {
  return (
    <div className="d-flex flex-wrap">
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={1} start={1} activeDays={ACTIVE_DAYS.JANUARY}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={2} start={4} activeDays={ACTIVE_DAYS.FEBRUARY}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={3} start={5} activeDays={ACTIVE_DAYS.MARCH}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={4} start={1} activeDays={ACTIVE_DAYS.APRIL}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={5} start={3} activeDays={ACTIVE_DAYS.MAY}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={6} start={6} activeDays={ACTIVE_DAYS.JUNE}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={7} start={1} activeDays={ACTIVE_DAYS.JULY}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={8} start={4} activeDays={ACTIVE_DAYS.AUGUST}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={9} start={0} activeDays={ACTIVE_DAYS.SEPTEMBER}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={10} start={2} activeDays={ACTIVE_DAYS.OCTOBER}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={11} start={5} activeDays={ACTIVE_DAYS.NOVEMBER}></CalendarMonth>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-inline-block my-4">
        <CalendarMonth monthNumber={12} start={0} activeDays={ACTIVE_DAYS.DECEMBER}></CalendarMonth>
      </div>
    </div>
  );
};
CalendarYear.story = { name: 'Calendario anual' };

export const CalendarTitle = (): JSX.Element => {
  return <CalendarMonth monthNumber={12} start={0} activeDays={ACTIVE_DAYS.DECEMBER} hasTitle></CalendarMonth>;
};
CalendarTitle.story = { name: 'Con title' };

export const CalendarTooltip = (): JSX.Element => {
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
              <td>
                <span data-direction="top-right" data-tooltip="Inmaculada Concepción de María">
                  <span className="active">8</span>
                </span>
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
              <td>
                <span data-direction="top-right" data-tooltip="Navidad">
                  <span className="active">25</span>
                </span>
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
CalendarTooltip.story = { name: 'Con tooltip' };

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
