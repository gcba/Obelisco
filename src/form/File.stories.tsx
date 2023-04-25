// Base
import React, { useState } from 'react';
import './Form.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración general del componente
export default {
  title: 'Formulario|Archivo',
  decorators: [withA11y]
};

interface InputFileProps {
  label: string;
  onFileSelect: (file: File) => void;
}

export const LoadFile = ({ label, onFileSelect }: InputFileProps): JSX.Element => {
  const [file, setFile] = useState<File | null>(null);
  const [inputKey, setInputKey] = useState<number>(0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      onFileSelect(file);
    }
  };

  const handleDeleteFile = () => {
    setFile(null);
    setInputKey((prevKey) => prevKey + 1); // Incrementa el key para renderizar un nuevo input
  };

  return (
    <div className="form-wrapper-lg">
      <div className="file-group bg-light">
        <i className="bx bx-cloud-upload"></i>
        <label htmlFor="file-input" className="label">
          Arrastrá tus archivos acá o hace click para adjuntar
        </label>
        <input
          key={inputKey} // Añade un key único para que React cree un nuevo input
          type="file"
          className="form-control-file bg-light custom-file"
          id="file-input"
          onChange={handleFileUpload}
        />
      </div>
      {file && (
        <div className="filename-container">
          <label>
            <i className="bx bx-file"></i>
            {file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name}
          </label>
          <button type="button" className="btn btn-outline-danger btn-sm" onClick={handleDeleteFile}>
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
};

LoadFile.story = {
  name: 'Subir un archivo'
};
