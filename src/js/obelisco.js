// import { dropDownCheckList } from './components/dropDownCheckList';
// import { dropDownMultiple } from './components/dropDownMultiple';

// const ARR_CLASS_DROPDOWN_CHECK_LIST = ['anchor', 'badge-content-item'];
// const DROPDOWN_MULTIPLE_ID = 'dropdownFilter';

// (function (window, document) {
//   document.addEventListener('DOMContentLoaded', () => {
//     document.addEventListener(
//       'click',
//       function (event: Event) {
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

import { dropDownCheckList } from './components/dropDownCheckList';
import { dropDownMultiple } from './components/dropDownMultiple';

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
