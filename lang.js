
const langData = {};
document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.getElementById('languageSwitcher');
  switcher.addEventListener('change', () => {
    setLanguage(switcher.value);
  });
  fetch('lang-data.js')
    .then(res => res.text())
    .then(data => {
      eval(data);
      setLanguage(switcher.value);
    });
});

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (langData[lang] && langData[lang][key]) {
      elem.textContent = langData[lang][key];
    }
  });
}
