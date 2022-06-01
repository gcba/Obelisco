const CLASS_VISIBLE = 'visible';
const CLASS_CHECK_LIST = '.dropdown-check-list';
const CLASS_SHOW = 'show';
const ARR_CLASS_DROPDOWN_CHECK_LIST = ['anchor', 'badge-content-item'];
let dropChildren = null;
let idDropDownCheckList = null;
let idDropDownMultiple = null;
let objDrop = {};

/**
 * Funcionalidad que verifica si tiene la colleccion de clases.
 * @param {*} a Se requiere todos los  elemento a verificar mediante el selector.
 * @param {*} b Se requiere el elemento padre a verificar.
 * @returns {Boolean} Retorna true si el elemento padre contiene la clase.
 * Si no tiene la clase retorna false.
 */
function collectionHas(a, b) {
  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] == b) return true;
  }
  return false;
}

/**
 * Funcionalidad que encuentra el elemento padre mediante un selector
 * @param {*} elm Se requiere el elemento al que se le busca el padre.
 * @param {*} selector Se requiere el selector para identificar el padre.
 * @returns {Element} Retorna el elemento padre.
 */
function findParentBySelector(elm, selector) {
  var all = document.querySelectorAll(selector);

  if (!elm['parentNode']) return;

  var cur = elm['parentNode'];
  while (cur && !collectionHas(all, cur)) {
    cur = cur.parentNode;
  }
  return cur;
}

/**
 * Funcionalidad que implica en el dropdown check list.
 * @param {*} id Se requiere el id para identificar el drop que se quiere mostrar.
 * Se obtiene el drop, mediante su elemento padre.
 * Se verifica si tiene la clase `show` y se remueve, de lo contrario se agrega.
 * Si se ejecuta cualquier otra accion por fuera del dropdown multiple, se remueve la clase `show`
 */
function dropDownCheckList(id) {
  const drop = findParentBySelector(document.getElementById(id), CLASS_CHECK_LIST);

  if (!drop) return;

  if (drop.classList.contains(CLASS_VISIBLE)) {
    drop.classList.remove(CLASS_VISIBLE);
  } else {
    drop.classList.add(CLASS_VISIBLE);
  }

  document.addEventListener('mousedown', function (e) {
    if (drop?.classList.contains(CLASS_VISIBLE) && !drop?.contains(e.target)) {
      drop?.classList.remove(CLASS_VISIBLE);
    }
  });
}

/**
 * Funcionalidad que implica en el dropdown multiple
 * @param {*} id Se requiere el id para identificar el drop que se quiere mostrar.
 * Se obtiene el drop, su componente hijo y el menu mediante el id.
 * Se verifica si tiene la clase `show` y se remueve, de lo contrario se agrega.
 * Si se ejecuta cualquier otra accion por fuera del dropdown multiple, se remueve la clase `show`
 */
function dropDownMultiple(id) {
  const drop = document.querySelector(`#drop-${id}`);
  dropChildren = drop.children.item(0);

  const dropMenu = document.querySelector(`#drop-menu-${id}`);

  if (!dropMenu || !drop) return;

  if (dropMenu?.classList?.contains(CLASS_SHOW) || drop?.classList?.contains(CLASS_SHOW)) {
    dropMenu.classList.remove(CLASS_SHOW);
    drop.classList.remove(CLASS_SHOW);
  } else {
    dropMenu.classList.add(CLASS_SHOW);
    drop.classList.add(CLASS_SHOW);
  }

  document.addEventListener('mousedown', function (e) {
    if (
      (dropMenu?.classList?.contains(CLASS_SHOW) || drop?.classList?.contains(CLASS_SHOW)) &&
      !dropMenu?.contains(e.target)
    ) {
      dropMenu?.classList.remove(CLASS_SHOW);
      drop.classList.remove(CLASS_SHOW);
    }
  });
}

/**
 * Se verifica si tiene las clases `anchor` o `badge-content-item` desde donde se esta ejecutando la funcionalidad
 * @param e {Event} Se requiere el evento para obtener los valores de las clases.
 * Si no tienen valor directamente no se ejecuta la funcionalidad.
 */
const hasCheckListClass = (event) => {
  if (!event?.target?.['classList'].value || event?.target?.['classList'].value === '') return;
  return ARR_CLASS_DROPDOWN_CHECK_LIST.some(
    (className) =>
      event?.target?.['classList'].contains(className) ||
      event.target.parentNode?.['classList'].contains(className) ||
      event.target.parentNode.parentNode?.['classList'].contains(className)
  );
};

/**
 * Funcionalidad que implica en el click sobre el icono `x` en los elementos del dropdown check list
 * @param e {Event} Se requiere el evento para prevenir el comportamiento por defecto del navegador
 * y obtener el nombre del texto del nodo padre, es decir, el valor dentro del <span>
 * Se asocia el input con el valor del texto del nodo padre,
 * se le agrega el valor false al check, se obtiene el id del input asociado y se elimina el elemento tanto dentro array como del arbol DOM.
 * Si el array esta vacio, se agrega un elemento dentro del arbol DOM con el texto `Todas`
 */
const removeItem = (e) => {
  e.preventDefault();
  const text = e.target.parentNode.textContent.trim();

  const inputAssociated = document.querySelector(`input[type="checkbox"][value="${text}"]`);

  inputAssociated.checked = false;
  const getIdByInput = inputAssociated.dataset.filterItem.split('filter-')[1];

  objDrop[getIdByInput] = objDrop[getIdByInput].filter((el) => el !== text);

  e.target.parentNode.parentNode.remove();

  if (objDrop[getIdByInput].length === 0) {
    var initSpan = document.createElement('span');
    initSpan.innerHTML = 'Todas';
    const anchor = document.querySelector(`#${getIdByInput}`);
    anchor.appendChild(initSpan);
  }
};

/**
 * Funcionalidad que implica en el menu sobre los items del dropdown check list
 * @param event {Event} Se requiere el evento para verificar si es una etiqueta input,si esto ocurre,
 * se crea una equiteca <span> dentro de la clase `anchor`.
 * se verifica si no esta checked, se ejecuta la funcionalidad de agregar o quitar un item del dropdown check list
 */
function dropDownCheckListItems(event) {
  if (!objDrop[idDropDownCheckList] || objDrop[idDropDownCheckList].length === 0) {
    objDrop[idDropDownCheckList] = [];
  }

  const anchor = document.querySelector(`#${idDropDownCheckList}`);

  if (event.target.localName === 'input') {
    const child = document.createElement('span');
    child.classList.add('badge');
    child.classList.add('badge-secondary');

    if (!event.target.checked) {
      if (anchor?.children.length > 0) {
        anchor?.children[objDrop[idDropDownCheckList].indexOf(event.target.value)].remove();
      }
      objDrop[idDropDownCheckList].splice(objDrop[idDropDownCheckList].indexOf(event.target.value), 1);

      if (objDrop[idDropDownCheckList].length === 0) {
        var initSpan = document.createElement('span');
        initSpan.innerHTML = 'Todas';
        anchor.appendChild(initSpan);
      }
    } else {
      if (anchor.firstChild.textContent === 'Todas') {
        anchor.removeChild(anchor.firstChild);
      }

      objDrop[idDropDownCheckList].push(event.target.value);
      if (anchor) {
        child.innerHTML = `
        <div class="badge-content-item">${event.target.value} <i onclick="removeItem(event)" class="bx bx-x"></i></div>
        `;
        anchor.appendChild(child);
      }
    }
  }
}

/**
 * Funcionalidad que implica en el menu sobre los items del dropdown multiple
 * @param event {Event} Se requiere el evento para verificar si es una etiqueta input.
 * Si es asi se verifica si no esta checked y se ejecuta la funcionalidad de agregar o quitar un item del dropdown multiple
 */
function dropDownSelectedItems(event) {
  if (!objDrop[idDropDownMultiple] || objDrop[idDropDownMultiple].length === 0) {
    objDrop[idDropDownMultiple] = [];
  }

  if (event.target.localName === 'input') {
    if (!event.target.checked) {
      objDrop[idDropDownMultiple].splice(objDrop[idDropDownMultiple].indexOf(event.target.value), 1);
    } else {
      objDrop[idDropDownMultiple].push(event.target.value);
    }
  }

  if (objDrop[idDropDownMultiple].length === 0) {
    dropChildren.innerHTML = `${dropChildren.textContent.split('(')[0]}`;
  } else {
    dropChildren.innerHTML = `${dropChildren.textContent.split('(')[0]} (${objDrop[idDropDownMultiple].length})`;
  }
}

// Init
(function (window, document) {
  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener(
      'click',
      function (event) {
        // Dropdown check list
        if (hasCheckListClass(event)) {
          if (event.target.localName === 'i') return;

          idDropDownCheckList =
            (event.target['id'] === '' && event.target.parentNode['id']) ||
            event.target.parentNode.parentNode['id'] ||
            event.target['id'];

          dropDownCheckList(idDropDownCheckList);
        }

        if (event?.target.dataset.filterItem === `filter-${idDropDownCheckList}`) {
          dropDownCheckListItems(event);
        }

        // Dropdown multiple
        if (!!event?.target.dataset.oToggle && event?.target.dataset.oToggle.includes('dropdown-')) {
          idDropDownMultiple = event.target.dataset.oToggle.split('dropdown-')[1];

          dropDownMultiple(idDropDownMultiple);
        }

        if (event?.target.dataset.selectItem === `select-${idDropDownMultiple}`) {
          dropDownSelectedItems(event);
        }
      },
      false
    );
  });
})(window, document);
