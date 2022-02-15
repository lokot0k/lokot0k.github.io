const userLang = navigator.language;
// defining user's language and relocate for appropriate web-page
if (userLang.includes("ru") || userLang.includes("RU")) {
    window.location.href += "html/ru.html";
} else {
    window.location.href += "html/en.html";
}