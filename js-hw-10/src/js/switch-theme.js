const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  switchTheme: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
  themeLocalStorage: localStorage.getItem('theme'),
};

if (refs.themeLocalStorage === Theme.DARK) {
  refs.switchTheme.checked = true;
  refs.body.setAttribute('class', Theme.DARK);
} else {
  refs.body.setAttribute('class', Theme.LIGHT);
}

const darkTheme = () => {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
};

const lightTheme = () => {
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
};

const checkedTarget = e => {
  if (e.target.checked) {
    darkTheme();
  } else {
    lightTheme();
  }
};

refs.switchTheme.addEventListener('click', checkedTarget);
