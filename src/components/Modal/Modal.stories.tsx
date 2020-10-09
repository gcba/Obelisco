// Base
import React from "react";
import "./Modal.stories.scss";

// Addons
import { withA11y } from "@storybook/addon-a11y";

// Components
import { Button } from "../Button";

// Config
export default {
  title: "Componentes | Modal",
  decorators: [withA11y]
};

export const Generico = (): JSX.Element => {
  return (
    <div className="modal d-block" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>The quick, brown fox jumps over a lazy dog. DJs flock by when</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Acción 2</button>
            <button type="button" className="btn btn-primary">Acción 1</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Generico.story = { name: "Genérico" };



export const Demo = (): JSX.Element => {
  return (
  <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Ver modal
    </button>

    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>The quick, brown fox jumps over a lazy dog. DJs flock by when</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary">Otra acción</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

Demo.story = { name: "Demo" };

/*
export const MuchoTexto = (): JSX.Element => {
  return (
  <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#anotherexampleModal">
      Ver modal
    </button>

    <div className="modal fade" id="anotherexampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet sagittis tortor. Nullam vel dolor elementum, consequat ex id, fringilla nulla. Sed est metus, porttitor quis dolor et, rutrum finibus lectus. Aliquam vel mollis justo, sit amet tincidunt mauris. Sed a dapibus urna, vel eleifend lacus. Ut sed efficitur velit, ut commodo libero. Fusce ullamcorper orci laoreet ex venenatis, id dapibus dui tristique. Pellentesque vel justo feugiat, ullamcorper augue vitae, sagittis ante. Donec id metus sed neque accumsan auctor. Etiam nec dolor turpis. Proin a risus sed justo porta venenatis posuere et ex. Ut finibus mi ac bibendum ultricies. Sed bibendum eu felis at consequat. Sed blandit risus blandit tellus aliquam placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

            <p>Fusce nec ultricies mauris. Nam molestie hendrerit magna, at consequat mi rutrum at. Proin dolor arcu, dictum vitae felis eu, vestibulum viverra nisi. Maecenas non tincidunt velit, vel eleifend nulla. Duis vel molestie nibh. Suspendisse accumsan venenatis felis et vulputate. Aenean posuere auctor elit a dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin maximus lorem quis odio maximus, sed venenatis dolor sodales. Ut in augue sed nisl tincidunt vestibulum. Nulla facilisi.</p>

            <p>Praesent sit amet leo sed magna finibus pellentesque. Praesent tristique lorem sed vulputate bibendum. Etiam aliquam augue nulla, a vestibulum metus fringilla sed. Sed mattis fermentum enim nec gravida. Duis consectetur vel massa sed venenatis. Praesent pellentesque massa quis nibh ornare, in sagittis dui maximus. Vivamus id dolor et elit pulvinar eleifend eget sed nibh. Donec quis lorem leo. Maecenas et libero ultricies, gravida justo in, tincidunt nunc. Donec pharetra feugiat purus ut varius.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary">Otra acción</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

MuchoTexto.story = { name: "Mucho Texto" };
*/

export const Formulario = (): JSX.Element => {
  return (
  <div>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#thirdexampleModal">
      Ver modal
    </button>

    <div className="modal fade" id="thirdexampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Modal</h4>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              ...
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary">Otra acción</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

Formulario.story = { name: "Con Formulario" };
