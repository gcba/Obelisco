import React, { useRef, useState, useEffect } from 'react';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  isRadio: boolean;
}

export const DropdownOption = ({ options, isRadio }: DropdownProps): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar si el desplegable está abierto o cerrado
  const [checkboxStates, setCheckboxStates] = useState<{ [key: string]: boolean }>({}); // Estado para mantener el estado de las opciones seleccionadas
  const dropdownRef = useRef<HTMLDivElement>(null); // Referencia al elemento del desplegable

  // Maneja el cambio en una opción de checkbox, es decir en el button muestra la cantiad seleccionada
  const handleCheckboxChange = (checkboxName: string) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName]
    }));
  };

  // Maneja el cambio en una opción de radio, es decir en el button muestra si se seleciono un radio
  const handleRadioChange = (radioName: string) => {
    const updatedCheckboxStates = {};
    options.forEach((option) => {
      updatedCheckboxStates[option.value] = option.value === radioName;
    });
    setCheckboxStates(updatedCheckboxStates);
  };

  // Maneja el evento de clic en el botón del desplegable para abrirlo o cerrarlo
  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  // Maneja el evento de clic fuera del desplegable para cerrarlo si está abierto
  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownOpen(false);
    }
  };

  // Agrega un efecto de escucha de clics globales para cerrar el desplegable cuando se hace clic fuera de él
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const selectedCheckboxCount = Object.values(checkboxStates).filter((checked) => checked).length; // Calcula la cantidad de opciones seleccionadas

  return (
    <>
      <div className="dropdown-container">
        <div className={`dropdown mb-3 ${dropdownOpen ? 'show' : ''}`} ref={dropdownRef}>
          <button
            type="button"
            className={`btn btn-dropdown btn-dropdown-border btn-dropdown-lg dropdown-toggle ${
              dropdownOpen ? 'active' : ''
            }`}
            onClick={handleDropdownToggle}
            aria-haspopup="true"
            aria-expanded={dropdownOpen ? 'true' : 'false'}>
            Desplegable {selectedCheckboxCount > 0 ? `(${selectedCheckboxCount})` : ''}
          </button>
          <div className={`dropdown-menu dropdown-body ${dropdownOpen ? 'show' : ''}`}>
            {options.map((option) => (
              <div className={`custom-control ${isRadio ? 'custom-radio' : 'custom-checkbox'}`} key={option.value}>
                <input
                  className="custom-control-input"
                  type={isRadio ? 'radio' : 'checkbox'}
                  id={`skills-${option.value}-input`}
                  name="skills"
                  value={option.value}
                  checked={checkboxStates[option.value]}
                  onChange={() => (isRadio ? handleRadioChange(option.value) : handleCheckboxChange(option.value))}
                />
                <label className="custom-control-label" htmlFor={`skills-${option.value}-input`}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
