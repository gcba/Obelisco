// Importamos react y todas las librerías que usemos en el componente.

import * as React from 'react';

// Definimos los tipos que usemos.
// También podemos definirlos en ../utils.ts e importarlos.

type Language = 'es' | 'en';

// Definimos la interfaz de las props del componente,
// esto nos ayuda a tener ordenados los parámetros.

export interface ExampleProps {
  type: 'real' | 'example';
  onClick: () => void;
  language?: Language;
}

// Definimos los componentes como funciones de React, con sus props la interfaz.

export const Example: React.FC<ExampleProps> = (props: ExampleProps) => {
  // Podemos definir variables que nos ayudan a dejar el render más limpio.

  let className = `component component-${props.type}`;
  if (props.language) className += ` component-${props.language}`;

  // Podemos agregar diferentes funciones que vamos a llamar desde el render
  // o desde otras funciones internas del componente.

  const getText = (language?: Language) => {
    switch (language) {
      case 'es':
        return 'Componente de ejemplo';
      case 'en':
        return 'Example component';
      default:
        return 'No se definió el lenguaje / Missing language';
    }
  };

  // En el return definimos el JSX que se va a renderizar.

  return (
    <div className={className} onClick={() => props.onClick()}>
      {getText(props.language)}
    </div>
  );
};
