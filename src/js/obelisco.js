function dropFunctionability(e) {
  const CLASS_DROP_DOWN_LIST = e.path[1].classList;
  const drop = document.querySelector(`.${CLASS_DROP_DOWN_LIST[0]}`);

  if (!drop) return;

  if (
    e.target.classList.contains('dropdown-item') ||
    e.target.type === 'checkbox' ||
    e.target.classList.contains('dropdown-list') ||
    e.target.classList.contains('bx-x') ||
    e.target.id === 'item'
  ) {
    return;
  }

  if (drop.classList.contains('visible')) {
    drop.classList.remove('visible');
  } else {
    drop.classList.add('visible');
  }

  document.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('cancel-input')) {
      return;
    }

    if (drop.classList.contains('visible') && !drop.contains(e.target)) {
      drop.classList.remove('visible');
    }
  });
}

const CLASS_VISIBLE = 'visible';
const CLASS_CHECK_LIST = '.dropdown-check-list';

function collectionHas(a, b) {
  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] == b) return true;
  }
  return false;
}
function findParentBySelector(elm, selector) {
  var all = document.querySelectorAll(selector);

  if (!elm['parentNode']) return;

  var cur = elm['parentNode'];
  while (cur && !collectionHas(all, cur)) {
    cur = cur.parentNode;
  }
  return cur;
}

function dropDownCheckList(id) {
  var drop = findParentBySelector(document.getElementById(id), CLASS_CHECK_LIST);

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

const CLASS_SHOW = 'show';
const CLASS_DROPDOWN_MENU = '.dropdown-menu';
const CLASS_DROPDOWN = '.dropdown';

function dropDownMultiple() {
  const dropMenu = document.querySelector(CLASS_DROPDOWN_MENU);
  const drop = document.querySelector(CLASS_DROPDOWN);

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

const ARR_CLASS_DROPDOWN_CHECK_LIST = ['anchor', 'badge-content-item'];
const DROPDOWN_MULTIPLE_ID = 'dropdownFilter';
let objDrop = {};
let idDropDown = null;

const hasCheckListClass = (event) => {
  if (!event?.target?.['classList'].value || event?.target?.['classList'].value === '') return;
  return ARR_CLASS_DROPDOWN_CHECK_LIST.some(
    (className) =>
      event?.target?.['classList'].contains(className) ||
      event.target.parentNode?.['classList'].contains(className) ||
      event.target.parentNode.parentNode?.['classList'].contains(className)
  );
};

const removeItem = (e) => {
  e.preventDefault();
  const text = e.target.parentNode.textContent.trim();

  const inputAssociated = document.querySelector(`input[type="checkbox"][value="${text}"]`);

  inputAssociated.checked = false;

  objDrop[idDropDown] = objDrop[idDropDown].filter((el) => el !== text);

  e.target.parentNode.parentNode.remove();

  if (objDrop[idDropDown].length === 0) {
    var initSpan = document.createElement('span');
    initSpan.innerHTML = 'Todas';
    const anchor = document.querySelector(`#${idDropDown}`);
    anchor.appendChild(initSpan);
  }
};

(function (window, document) {
  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener(
      'click',
      function (event) {
        if (hasCheckListClass(event)) {
          if (event.target.localName === 'i') return;

          idDropDown =
            (event.target['id'] === '' && event.target.parentNode['id']) ||
            event.target.parentNode.parentNode['id'] ||
            event.target['id'];

          dropDownCheckList(idDropDown);
        }

        if (event?.target.dataset.filterItem === `filter-${idDropDown}`) {
          if (!objDrop[idDropDown] || objDrop[idDropDown].length === 0) {
            objDrop[idDropDown] = [];
          }

          const anchor = document.querySelector(`#${idDropDown}`);

          if (event.target.localName === 'input') {
            const child = document.createElement('span');
            child.classList.add('badge');
            child.classList.add('badge-secondary');

            if (!event.target.checked) {
              if (anchor?.children.length > 0) {
                anchor?.children[objDrop[idDropDown].indexOf(event.target.value)].remove();
              }
              objDrop[idDropDown].splice(objDrop[idDropDown].indexOf(event.target.value), 1);

              if (objDrop[idDropDown].length === 0) {
                var initSpan = document.createElement('span');
                initSpan.innerHTML = 'Todas';
                anchor.appendChild(initSpan);
              }
            } else {
              if (anchor.firstChild.textContent === 'Todas') {
                anchor.removeChild(anchor.firstChild);
              }

              objDrop[idDropDown].push(event.target.value);
              if (anchor) {
                child.innerHTML = `
                <div class="badge-content-item">${event.target.value} <i onclick="removeItem(event)" class="bx bx-x"></i></div>
                `;
                anchor.appendChild(child);
              }
            }
          }
        }

        if (event?.target?.['id'] === DROPDOWN_MULTIPLE_ID) {
          dropDownMultiple();
        }
      },
      false
    );
  });
})(window, document);
