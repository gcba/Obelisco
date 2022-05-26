export function dropFunctionability(e) {
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
