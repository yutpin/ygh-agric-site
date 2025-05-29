
const translations = {
  en: {
    welcome: "Welcome",
    desc: "This is the multilingual UI homepage.",
    company: "© 2025 YGH&VN AGRIC (CAMBODIA) CO., LTD."
  },
  km: {
    welcome: "សូមស្វាគមន៍",
    desc: "នេះគឺជាទំព័រដើមនៃគេហទំព័រ UI ពហុភាសា។",
    company: "© 2025 វ៉ាយជីអេច&វីអិន អេហ្គ្រីខ(ខេមបូឌា)ឯ.ក"
  },
  zh: {
    welcome: "欢迎",
    desc: "这是多语言用户界面的主页。",
    company: "© 2025 YGH&VN农业（柬埔寨）有限公司"
  },
  vi: {
    welcome: "Chào mừng",
    desc: "Đây là trang chủ giao diện đa ngôn ngữ.",
    company: "© 2025 CÔNG TY TNHH NÔNG NGHIỆP YGH&VN (CAMPUCHIA)"
  }
};

const switcher = document.getElementById("lang-switcher");
const welcome = document.getElementById("welcome-text");
const desc = document.getElementById("description");
const company = document.getElementById("company-name");

switcher.addEventListener("change", () => {
  const lang = switcher.value;
  welcome.textContent = translations[lang].welcome;
  desc.textContent = translations[lang].desc;
  company.textContent = translations[lang].company;
});
