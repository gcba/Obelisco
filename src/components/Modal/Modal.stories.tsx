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
            <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Acción 2</button>
            <button type="button" className="btn btn-primary btn-sm">Acción 1</button>
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
            <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Acción 2</button>
            <button type="button" className="btn btn-primary btn-sm">Acción 1</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

Demo.story = { name: "Demo" };


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
            <form className="form-group">
              <label htmlFor="name-input">Campo simple</label>
              <input type="text" className="form-control" id="name-input" name="name" placeholder="Ejemplo: Camila" />

              <label htmlFor="text-area">Bloque de texto</label>
              <textarea className="form-control" id="text-area" placeholder="Texto" maxlength="100" rows={3}></textarea>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Acción 2</button>
            <button type="button" className="btn btn-primary btn-sm">Acción 1</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

Formulario.story = { name: "Con Formulario" };
