// Base
import React from 'react';
import './Scrollbar.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components
import { Scrollbar } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Barra de desplazamiento',
  component: Scrollbar,
  decorators: [withA11y]
};

export const SimpleScrollbarComponent = (): JSX.Element => {
  return (
    <div className="storybook__container-scrollbar">
      <Scrollbar>
        <div className="example-text">
          <h1>Title example</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit officia soluta nostrum totam.
            Recusandae, doloribus iste? Perspiciatis maiores, odio error doloribus eum saepe laboriosam eveniet
            cupiditate, aut earum tempore.
          </p>

          <br />
          <hr />
          <br />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam esse pariatur non deserunt, velit ut
            nesciunt quam neque nulla? Pariatur consectetur minima sit. Praesentium libero quibusdam fugit amet itaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates facilis quidem consequatur,
            iusto obcaecati aspernatur officiis incidunt fuga vero consequuntur quasi quas doloremque facere enim
            deleniti! Ut, amet ipsa?
          </p>

          <br />
          <hr />
          <br />

          <h2>Title example</h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, asperiores amet. Optio est voluptatem
            aliquam eveniet accusamus ipsam deserunt accusantium nobis? Quia porro nulla commodi accusamus ad fugit
            quidem totam.
          </p>

          <br />
          <hr />
          <br />

          <h2>Title example</h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, asperiores amet. Optio est voluptatem
            aliquam eveniet accusamus ipsam deserunt accusantium nobis? Quia porro nulla commodi accusamus ad fugit
            quidem totam.
          </p>
        </div>
      </Scrollbar>
    </div>
  );
};

SimpleScrollbarComponent.story = {
  name: 'Simple'
};

export const ScrollbarComponent = (): JSX.Element => {
  return (
    <div className="storybook__container-scrollbar">
      <Scrollbar>
        <div className="example-box">
          <div className="example-box-nav">
            <nav>
              <ul className="nav flex-column nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>Link</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <span>Activo</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span>Link</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#">
                    <span>Link</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="example-box-text">
            <h1>Title example</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit officia soluta nostrum totam.
              Recusandae, doloribus iste? Perspiciatis maiores, odio error doloribus eum saepe laboriosam eveniet
              cupiditate, aut earum tempore.
            </p>

            <br />
            <hr />
            <br />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam esse pariatur non deserunt, velit
              ut nesciunt quam neque nulla? Pariatur consectetur minima sit. Praesentium libero quibusdam fugit amet
              itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates facilis quidem
              consequatur, iusto obcaecati aspernatur officiis incidunt fuga vero consequuntur quasi quas doloremque
              facere enim deleniti! Ut, amet ipsa?
            </p>

            <br />
            <hr />
            <br />

            <h2>Title example</h2>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, asperiores amet. Optio est voluptatem
              aliquam eveniet accusamus ipsam deserunt accusantium nobis? Quia porro nulla commodi accusamus ad fugit
              quidem totam.
            </p>

            <br />
            <hr />
            <br />

            <h2>Title example</h2>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, asperiores amet. Optio est voluptatem
              aliquam eveniet accusamus ipsam deserunt accusantium nobis? Quia porro nulla commodi accusamus ad fugit
              quidem totam.
            </p>
          </div>
        </div>
      </Scrollbar>
    </div>
  );
};

ScrollbarComponent.story = {
  name: 'Ejemplo de uso'
};
