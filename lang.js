
const translations = {};
let currentLang = "en";

function translatePage() {
    document.querySelectorAll("[data-i18n]").forEach(elem => {
        const key = elem.getAttribute("data-i18n");
        if (translations[currentLang] && translations[currentLang][key]) {
            elem.textContent = translations[currentLang][key];
        }
    });
}

document.getElementById("lang-switcher").addEventListener("change", e => {
    currentLang = e.target.value;
    translatePage();
});

window.onload = () => {
    translatePage();
};
