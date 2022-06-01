// const CLASS_SHOW = 'show';
// const CLASS_DROPDOWN_MENU = '.dropdown-menu';
// const CLASS_DROPDOWN = '.dropdown';

// export function dropDownMultiple(): void {
//   const dropMenu = document.querySelector(CLASS_DROPDOWN_MENU);
//   const drop = document.querySelector(CLASS_DROPDOWN);

//   if (!dropMenu || !drop) return;

//   if (dropMenu?.classList?.contains(CLASS_SHOW) || drop?.classList?.contains(CLASS_SHOW)) {
//     dropMenu.classList.remove(CLASS_SHOW);
//     drop.classList.remove(CLASS_SHOW);
//   } else {
//     dropMenu.classList.add(CLASS_SHOW);
//     drop.classList.add(CLASS_SHOW);
//   }

//   document.addEventListener('mousedown', function (e: Event) {
//     const target = e.target as HTMLElement;

//     if (
//       (dropMenu?.classList?.contains(CLASS_SHOW) || drop?.classList?.contains(CLASS_SHOW)) &&
//       !dropMenu?.contains(target)
//     ) {
//       dropMenu?.classList.remove(CLASS_SHOW);
//       drop.classList.remove(CLASS_SHOW);
//     }
//   });
// }

const CLASS_SHOW = 'show';
const CLASS_DROPDOWN_MENU = '.dropdown-menu';
const CLASS_DROPDOWN = '.dropdown';

export function dropDownMultiple() {
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
