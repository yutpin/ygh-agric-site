
const translations = {
  en: {
    company: "YGH&VN AGRIC (CAMBODIA) CO., LTD.",
    description: "This is the multilingual UI homepage."
  },
  km: {
    company: "វ៉ាយជីអេច&វីអិន អេហ្គ្រីខ(ខេមបូឌា)ឯ.ក",
    description: "នេះគឺជាទំព័រដើមនៃគេហទំព័រពហុភាសា។"
  },
  zh: {
    company: "YGH&VN农业（柬埔寨）有限公司",
    description: "这是多语言用户界面主页。"
  },
  vi: {
    company: "YGH&VN NÔNG NGHIỆP (CAMPUCHIA) CÔNG TY TNHH",
    description: "Đây là giao diện người dùng đa ngôn ngữ."
  }
};

document.getElementById("lang-select").addEventListener("change", (e) => {
  const lang = e.target.value;
  document.getElementById("company-name").textContent = translations[lang].company;
  document.getElementById("description").textContent = translations[lang].description;
});
