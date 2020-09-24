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

export const Basico = (): JSX.Element => {
  return (
    <div className="modal" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal</h5>
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

Basico.story = { name: "Básico" };
