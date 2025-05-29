
document.getElementById('languageSelector').addEventListener('change', function () {
  const lang = this.value;
  const translations = window.translations[lang];
  if (translations) {
    for (const key in translations) {
      const el = document.getElementById(key);
      if (el) el.innerText = translations[key];
    }
  }
});
