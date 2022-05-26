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

// const CLASS_VISIBLE = 'visible';
// const CLASS_CHECK_LIST = '.dropdown-check-list';

// function dropDownCheckList() {
//   const drop = document.querySelector(CLASS_CHECK_LIST);

//   if (!drop) return;

//   if (drop.classList.contains(CLASS_VISIBLE)) {
//     drop.classList.remove(CLASS_VISIBLE);
//   } else {
//     drop.classList.add(CLASS_VISIBLE);
//   }

//   document.addEventListener('mousedown', function (e) {
//     if (drop?.classList.contains(CLASS_VISIBLE) && !drop?.contains(e.target)) {
//       drop?.classList.remove(CLASS_VISIBLE);
//     }
//   });
// }

const CLASS_VISIBLE = 'visible';
const CLASS_CHECK_LIST = '.dropdown-check-list';

function collectionHas(a, b) {
  //helper function (see below)
  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] == b) return true;
  }
  return false;
}
function findParentBySelector(elm, selector) {
  var all = document.querySelectorAll(selector);
  var cur = elm['parentNode'];
  while (cur && !collectionHas(all, cur)) {
    //keep going up until you find a match
    cur = cur.parentNode; //go up
  }
  return cur; //will return null if not found
}

export function dropDownCheckList(id) {
  // const drop = document.querySelector(CLASS_CHECK_LIST);
  // const drop = document.querySelector(`#${id}`);

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

// const ARR_CLASS_DROPDOWN_CHECK_LIST = ['anchor', 'badge-content-item'];
// const DROPDOWN_MULTIPLE_ID = 'dropdownFilter';

// (function (window, document) {
//   document.addEventListener('DOMContentLoaded', () => {
//     document.addEventListener(
//       'click',
//       function (event) {
//         if (ARR_CLASS_DROPDOWN_CHECK_LIST.some((className) => event?.target?.['classList'].contains(className))) {
//           dropDownCheckList();
//         }

//         if (event?.target?.['id'] === DROPDOWN_MULTIPLE_ID) {
//           dropDownMultiple();
//         }
//       },
//       false
//     );
//   });
// })(window, document);

const ARR_CLASS_DROPDOWN_CHECK_LIST = ['anchor', 'badge-content-item'];
const DROPDOWN_MULTIPLE_ID = 'dropdownFilter';
const arrDropDownInputItems = [];

let idDropDown = null;
(function (window, document) {
  document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener(
      'click',
      function (event) {
        if (ARR_CLASS_DROPDOWN_CHECK_LIST.some((className) => event?.target?.['classList'].contains(className))) {
          idDropDown = event.target['id'];
          dropDownCheckList(event.target['id']);
        }

        if (event?.target?.['id'].includes('item')) {
          // const anchor = document.querySelector('.anchor');
          // const anchor = document.querySelector('#' + event.target['id']);
          const anchor = document.querySelector(`#${idDropDown}`);

          if (event.target.localName === 'input') {
            const child = document.createElement('span');
            child.classList.add('badge');
            child.classList.add('badge-secondary');
            if (!event.target.checked) {
              if (anchor?.children.length > 0) {
                anchor?.children[arrDropDownInputItems.indexOf(event.target.value)].remove();
              }
              arrDropDownInputItems.splice(arrDropDownInputItems.indexOf(event.target.value), 1);
            } else {
              arrDropDownInputItems.push(event.target.value);
              if (anchor) {
                child.innerHTML = `
                <div class="badge-content-item">${event.target.value} <i id="close" class="bx bx-x"></i></div>
                `;
                anchor.appendChild(child);
              }
            }

            // document.querySelector('#close').addEventListener('click', function () {
            //   console.log();
            //   // event.target.checked = false;
            //   // if (anchor?.children.length > 0) {
            //   //   anchor?.children[arrDropDownInputItems.indexOf(event.target.value)].remove();
            //   // }
            //   // arrDropDownInputItems.splice(arrDropDownInputItems.indexOf(event.target.value), 1);
            // });
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
