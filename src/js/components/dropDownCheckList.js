// const CLASS_VISIBLE = 'visible';
// const CLASS_CHECK_LIST = '.dropdown-check-list';

// export function dropDownCheckList(): void {
//   const drop = document.querySelector(CLASS_CHECK_LIST);

//   if (!drop) return;

//   if (drop.classList.contains(CLASS_VISIBLE)) {
//     drop.classList.remove(CLASS_VISIBLE);
//   } else {
//     drop.classList.add(CLASS_VISIBLE);
//   }

//   document.addEventListener('mousedown', function (e: Event) {
//     const target = e.target as HTMLElement;

//     if (drop?.classList.contains(CLASS_VISIBLE) && !drop?.contains(target)) {
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
