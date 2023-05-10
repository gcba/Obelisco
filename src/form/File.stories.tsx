// Base
import React, { useState } from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';
import { InputFile } from '.';

// Configuración general del componente
export default {
  title: 'Formulario|Archivo',
  decorators: [withA11y]
};

export const LoadFile = (): JSX.Element => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="form-wrapper-lg">
      <InputFile
        title="Arrastrá tus archivos acá o hace click para adjuntar"
        isMultiple={false}
        files={files}
        setFiles={setFiles}
      />
    </div>
  );
};

LoadFile.story = {
  name: 'Subir un archivo'
};

export const LoadFileMulti = (): JSX.Element => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="form-wrapper-lg">
      <InputFile
        title="Arrastrá tus archivos acá o hace click para adjuntar"
        isMultiple={true}
        files={files}
        setFiles={setFiles}
      />
    </div>
  );
};

LoadFileMulti.story = {
  name: 'Subir un archivo multiple'
};

export const Example = (): JSX.Element => {
  const contenidoUno = 'Este es el contenido del archivo.';
  const contenidoDos = 'Este es el contenido del archivo dos.';
  const [files, setFiles] = useState<File[]>([
    new File([contenidoUno], 'archivo1.txt', { type: 'text/plain' }),
    new File([contenidoDos], 'archivo2.txt', { type: 'text/plain' })
  ]);

  return (
    <div className="form-wrapper-lg">
      <InputFile
        title="Arrastrá tus archivos acá o hace click para adjuntar"
        isMultiple={true}
        files={files}
        setFiles={setFiles}
      />
    </div>
  );
};

Example.story = {
  name: 'Archivo cargado'
};
