const translations = {
  en: {
    welcome: "Welcome",
    description: "This is the home page of our multilingual agricultural website.",
    company: "© 2025 YGH&VN AGRIC (CAMBODIA) CO., LTD."
  },
  km: {
    welcome: "សូមស្វាគមន៍",
    description: "នេះគឺជាទំព័រដើមនៃគេហទំព័រកសិកម្មពាណិជ្ជកម្មពហុភាសារបស់យើង។",
    company: "© 2025 វ៉ាយជីអេច&វីអិន អេហ្គ្រីខ(ខេមបូឌា)ឯ.ក"
  },
  zh: {
    welcome: "欢迎",
    description: "这是我们多语言农业商业网站的主页。",
    company: "© 2025 YGH&VN农业（柬埔寨）有限公司"
  }
};

function switchLanguage(lang) {
  document.documentElement.lang = lang;
  document.body.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });
}