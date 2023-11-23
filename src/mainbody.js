export default function (state) {
  let mainEl = document.createElement('main');

  mainEl.innerText = state.active;

  return mainEl;
}
