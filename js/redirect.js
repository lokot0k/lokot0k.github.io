let userLang = navigator.language;
// отображение английской версии сайта для нерусских
if (userLang.includes("ru") || userLang.includes("RU")) {
    window.location.href += "html/ru.html";
} else {
    window.location.href += "html/en.html";
}
