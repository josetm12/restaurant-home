export default function (state) {
  let header;

  let divEl = document.createElement('div');
  let logoImg = new Image();
  let logoTextEl = document.createElement('span');
  let nav = createNav(state);

  divEl.classList.add('logo');
  logoImg.src = './assets/icons/menu.svg';
  logoTextEl.innerText = 'LOGO';

  divEl.appendChild(logoImg);
  divEl.appendChild(logoTextEl);

  header = document.createElement('header');

  header.append(divEl, nav);

  return header;
}

function createNav(state) {
  let nav = document.createElement('nav');

  debugger;
  ['Home', 'Menu', 'About Us'].forEach(function (item) {
    let aTag = document.createElement('a');
    aTag.classList.add('nav-item');
    aTag.setAttribute('href', '#');
    aTag.innerText = item;

    if (state.active === item) aTag.classList.add('active');

    nav.appendChild(aTag);
  });

  return nav;
}
