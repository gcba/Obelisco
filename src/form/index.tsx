import React, { useEffect, useState } from 'react';

export interface InputProps {
  title?: string;
  isMultiple?: boolean;
  files: File[];
  setFiles: (value: File[] | ((prevFiles: File[]) => File[])) => void;
}

interface FileItemProps {
  file: File;
  onRemove: () => void;
}

const FileItem: React.FC<FileItemProps> = ({ file, onRemove }) => {
  const fileName = file.name.length > 20 ? `${file.name.slice(0, 20)}...` : file.name;

  return (
    <div className="file-item">
      <label className="file-name">
        <div className="file-box">
          <i className="bx bx-file"></i>
          {fileName}
        </div>
      </label>
      <div>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={onRemove}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export const InputFile: React.FC<InputProps> = (props) => {
  const { title = 'Arrastrá tus archivos acá o hace click para adjuntar', isMultiple = false, files, setFiles } = props;

  const [inputKey, setInputKey] = useState<number>(0);

  useEffect(() => {
    setInputKey(inputKey + 1);
  }, [files]);

  const handleAddFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      const newFiles = Array.from(fileList);
      setFiles((prevFiles: File[]) => {
        const updatedFiles = newFiles.map((file: File) => file);
        return isMultiple ? [...prevFiles, ...updatedFiles] : updatedFiles;
      });
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles: File[]) => prevFiles.filter((_, i) => i !== index));
    setInputKey((prevKey) => prevKey + 1);
  };

  return (
    <>
      <div className="file-group">
        <label htmlFor="file-input" className="input-file-title">
          <input
            key={inputKey}
            type="file"
            className="form-control-file custom-file"
            id="file-input"
            onChange={handleAddFiles}
            multiple={isMultiple}
          />
          <span className="main-file">
            <i className="bx bx-cloud-upload"></i>
            {title}
          </span>
        </label>
      </div>
      {Boolean(files.length) && (
        <div key={inputKey} className={`filename-detail${isMultiple ? ' multiple' : ''}`}>
          {files.map((file: File, index: number) => (
            <FileItem
              key={`${file.lastModified}-${Math.floor(Math.random() * 1000000)}`}
              file={file}
              onRemove={() => handleRemoveFile(index)}
            />
          ))}
        </div>
      )}
    </>
  );
};
