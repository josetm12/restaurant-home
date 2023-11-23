import header from './header.js';
import main from './mainbody.js';
import styles from './assets/css/styles.css';

let rootEl = document.querySelector('#root');

var toggle = document.getElementById('theme-toggle');

var storedTheme =
  localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light');
if (storedTheme)
  document.documentElement.setAttribute('data-theme', storedTheme);

toggle.onclick = function () {
  var currentTheme = document.documentElement.getAttribute('data-theme');
  var targetTheme = 'light';

  if (currentTheme === 'light') {
    targetTheme = 'dark';
  }

  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
};

function updateTab(event) {
  console.log(event);
}

function renderPage(state) {
  let headerEl = header(state);
  let mainEl = main(state);

  rootEl.replaceChildren();

  headerEl.addEventListener('click', (event) => {
    event.preventDefault();

    if ([...event.target.classList].indexOf('nav-item') > -1)
      renderPage({ active: event.target.innerText });
  });

  rootEl.append(headerEl, mainEl);
}

renderPage({ active: 'Home' });
