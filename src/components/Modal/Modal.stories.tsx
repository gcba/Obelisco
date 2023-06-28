// Base
import React from 'react';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { Modal } from '.';

// Configuración general del componente
export default {
  title: 'Componentes|Modal',
  decorators: [withA11y]
};

export const Default = (): JSX.Element => {
  return (
    <>
      <Modal
        id="exampleModal"
        title="¡Importante!"
        description="Antes de realizar la ficha de salud, tené en cuenta haber realizado los pasos previos correspondientes."
        isBlock>
        <button type="button" className="btn btn-outline-link" data-dismiss="modal">
          Volver atrás
        </button>
        <button type="button" className="btn btn-primary">
          Continuar
        </button>
      </Modal>
      <div className="modal-backdrop show"></div>
    </>
  );
};

Default.story = { name: 'Predeterminado' };

export const Types = (): JSX.Element => {
  return (
    <>
      <div className="btn-wrapper">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
          Modal de confirmación
        </button>

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal2">
          Modal de peligro
        </button>

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal3">
          Modal de reconocimiento
        </button>
      </div>

      <Modal
        id="exampleModal1"
        title="¡Importante!"
        description="Antes de realizar la ficha de salud, tené en cuenta haber realizado los pasos previos correspondientes.">
        <button type="button" className="btn btn-outline-link" data-dismiss="modal">
          Volver atrás
        </button>
        <button type="button" className="btn btn-primary">
          Continuar
        </button>
      </Modal>

      <Modal id="exampleModal2" title="Eliminar documento" description="El documento que seleccionaste será eliminado.">
        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">
          Cancelar
        </button>
        <button type="button" className="btn btn-danger">
          Eliminar
        </button>
      </Modal>

      <Modal id="exampleModal3" title="Los archivos se cargaron correctamente" subtitle="CARGA EXITOSA" isUnbordered>
        <button type="button" className="btn btn-primary" data-dismiss="modal">
          Aceptar
        </button>
      </Modal>
    </>
  );
};

Types.story = { name: 'Tipos' };
