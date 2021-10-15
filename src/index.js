import theme from './js/theme';
import menuTemplate from './templates/menu.hbs';
import menu from './templates/menu.json';
import './styles.css';

const refs = {
  input: document.querySelector('.theme-switch__toggle'),
  menu: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
};

if (localStorage.getItem('theme') === theme.DARK) {
  refs.input.checked = true;
  refs.body.classList.add(theme.DARK);
} else {
  refs.body.classList.add(theme.LIGHT);
}

const changeBodyCLass = theme => {
  refs.body.classList.add(theme);
};

const changeLocalStorage = (set, del) => {
  localStorage.setItem('theme', set);
  refs.body.classList.remove(del);
};

const themeSwitcher = () => {
  if (refs.input.checked) {
    changeLocalStorage(theme.DARK, theme.LIGHT);
    changeBodyCLass(theme.DARK);
  } else {
    changeLocalStorage(theme.LIGHT, theme.DARK);
    changeBodyCLass(theme.LIGHT);
  }
};

refs.input.addEventListener('change', themeSwitcher);

const markup = menuTemplate(menu);
refs.menu.insertAdjacentHTML('beforeend', markup);
