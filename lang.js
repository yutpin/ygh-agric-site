const translations = {
    en: {
        nav_home: "Home",
        nav_products: "Products",
        nav_order: "Order",
        nav_contact: "Contact",
        nav_about: "About",
        welcome: "Welcome",
        description: "This is the multilingual UI homepage.",
        company_name: "YGH&VN AGRIC (CAMBODIA) CO., LTD."
    },
    km: {
        nav_home: "ទំព័រដើម",
        nav_products: "ផលិតផល",
        nav_order: "ការបញ្ជាទិញ",
        nav_contact: "ទំនាក់ទំនង",
        nav_about: "អំពីយើង",
        welcome: "សូមស្វាគមន៍",
        description: "នេះជាទំព័រដើមនៃគេហទំព័រភាសាច្រើន។",
        company_name: "វ៉ាយជីអេច&វីអិន អេហ្គ្រីខ(ខេមបូឌា)ឯ.ក"
    },
    zh: {
        nav_home: "主页",
        nav_products: "产品",
        nav_order: "订单",
        nav_contact: "联系",
        nav_about: "关于我们",
        welcome: "欢迎",
        description: "这是多语言用户界面的主页。",
        company_name: "YGH&VN农业（柬埔寨）有限公司"
    },
    vi: {
        nav_home: "Trang chủ",
        nav_products: "Sản phẩm",
        nav_order: "Đặt hàng",
        nav_contact: "Liên hệ",
        nav_about: "Về chúng tôi",
        welcome: "Chào mừng",
        description: "Đây là trang chính của giao diện đa ngôn ngữ.",
        company_name: "YGH&VN AGRIC (CAMBODIA) CO., LTD."
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.getElementById("languageSwitcher");
    const updateText = () => {
        const lang = switcher.value;
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.textContent = translations[lang][key] || key;
        });
    };
    switcher.addEventListener("change", updateText);
    updateText();
});