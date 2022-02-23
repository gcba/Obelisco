import { withA11Y } from '@storybook/addon-a11y';
import React from 'react';

//config
export default {
  title: 'Componentes|Customize Pagination',
  decorators: [withA11Y]
};

export const CustomizePagination = (): JSX.Element => {
  const PAGINATIONS = {
    default: [
      { pagination: [{ previus: false, next: true }] },
      { pagination: [{ previus: true, next: true }] },
      { pagination: [{ previus: true, next: false }] }
    ],
    hoverAndFocus: [
      {
        name: 'Hover',
        style: 'hover'
      },
      {
        name: 'Focus',
        style: 'focus'
      }
    ]
  };
  return (
    <div>
      <h2>Paginado</h2>
      <h4 className="mt-5">Default</h4>
      {PAGINATIONS.default.map(({ pagination }, index) => (
        <nav className="mt-4" key={index}>
          <ul className="pagination">
            {pagination?.map(
              ({ previus }) =>
                previus && (
                  <li className="page-item" key={index}>
                    <a className="btn page-link" href="javascript:void(0)">
                      <span className="page-previous-icon" aria-hidden="true"></span>
                      <span className="page-previous-text">Anterior</span>
                    </a>
                  </li>
                )
            )}
            <li className="page-item">
              <a className="btn page-link active" href="javascript:void(0)">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="btn page-link" href="javascript:void(0)">
                2
              </a>
            </li>
            <li className="page-item disabled">
              <span className="page-link">...</span>
            </li>
            <li className="page-item">
              <a className="btn page-link" href="javascript:void(0)">
                56
              </a>
            </li>
            {pagination?.map(
              ({ next }) =>
                next && (
                  <li className="page-item">
                    <a className="btn page-link" href="javascript:void(0)">
                      <span className="page-next-text">Siguiente</span>
                      <span className="page-next-icon" aria-hidden="true"></span>
                    </a>
                  </li>
                )
            )}
          </ul>
        </nav>
      ))}
      {PAGINATIONS.hoverAndFocus.map(({ name, style }, index) => (
        <div className="mt-5" key={index}>
          <h4>{name}</h4>
          <nav className="mt-4">
            <ul className="pagination">
              <li className="page-item">
                <a className="btn page-link active" href="javascript:void(0)">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="btn page-link" href="javascript:void(0)">
                  2
                </a>
              </li>
              <li className="page-item disabled">
                <span className="page-link">...</span>
              </li>
              <li className="page-item">
                <a className="btn page-link" href="javascript:void(0)">
                  56
                </a>
              </li>
              <li className="page-item">
                <a className={`btn page-link ${style}`} href="javascript:void(0)">
                  <span className="page-next-text">Siguiente</span>
                  <span className="page-next-icon" aria-hidden="true"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ))}

      <h4 className="mt-5">Uso en documentacion</h4>
      <div className="pagination">
        <div className="page-navigation page-item">
          <a className="btn page-link page-navitation" href="#">
            <span className="page-previous-icon" aria-hidden="true"></span>
            <span className="page-next-text">Anterior</span>
          </a>
          <a className="btn page-link page-navitation" href="#">
            <span className="page-next-text">Siguiente</span>
            <span className="page-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const CustomizePaginationMobile = (): JSX.Element => {
  const PAGINATIONS = {
    default: [
      { pagination: [{ previus: false, next: true }] },
      { pagination: [{ previus: true, next: true }] },
      { pagination: [{ previus: true, next: false }] }
    ],
    hoverAndFocus: [
      {
        name: 'Hover',
        style: 'hover'
      },
      {
        name: 'Focus',
        style: 'focus'
      }
    ]
  };
  return (
    <div>
      <h2>Paginado</h2>
      <h4 className="mt-5">Tipologia</h4>
      <div className="row">
        <div className="col-md-4">
          {PAGINATIONS.default.map(({ pagination }, index) => (
            <nav className="mt-4" key={index}>
              <ul className="pagination">
                {pagination?.map(
                  ({ previus }) =>
                    previus && (
                      <li className="page-item" key={index}>
                        <a className="btn page-link" href="javascript:void(0)">
                          <span className="page-previous-icon" aria-hidden="true"></span>
                          <span className="page-previous-text">Anterior</span>
                        </a>
                      </li>
                    )
                )}
                <li className="page-item">
                  <a className="btn page-link active" href="javascript:void(0)">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="btn page-link" href="javascript:void(0)">
                    2
                  </a>
                </li>
                <li className="page-item disabled">
                  <span className="page-link">...</span>
                </li>
                <li className="page-item">
                  <a className="btn page-link" href="javascript:void(0)">
                    56
                  </a>
                </li>
                {pagination?.map(
                  ({ next }) =>
                    next && (
                      <li className="page-item">
                        <a className="btn page-link" href="javascript:void(0)">
                          <span className="page-next-text">Siguiente</span>
                          <span className="page-next-icon" aria-hidden="true"></span>
                        </a>
                      </li>
                    )
                )}
              </ul>
            </nav>
          ))}
          {PAGINATIONS.hoverAndFocus.map(({ name, style }, index) => (
            <div className="mt-5" key={index}>
              <h4>{name}</h4>
              <nav className="mt-4">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="btn page-link active" href="javascript:void(0)">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="btn page-link" href="javascript:void(0)">
                      2
                    </a>
                  </li>
                  <li className="page-item disabled">
                    <span className="page-link">...</span>
                  </li>
                  <li className="page-item">
                    <a className="btn page-link" href="javascript:void(0)">
                      56
                    </a>
                  </li>
                  <li className="page-item">
                    <a className={`btn page-link ${style}`} href="javascript:void(0)">
                      <span className="page-next-text">Siguiente</span>
                      <span className="page-next-icon" aria-hidden="true"></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          ))}

          <h4 className="mt-5">Uso en documentacion</h4>
          <div className="pagination">
            <div className="page-navigation page-item">
              <a className="btn page-link page-navitation" href="#">
                <span className="page-previous-icon" aria-hidden="true"></span>
                <span className="page-next-text">Anterior</span>
              </a>
              <a className="btn page-link page-navitation" href="#">
                <span className="page-next-text">Siguiente</span>
                <span className="page-next-icon" aria-hidden="true"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
