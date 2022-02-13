const themes = {
    'light': {
        '--shadow-color-var': 'lightgrey',
        '--border-color-var': 'black',
        '--background-color-var': 'white',
        '--text-color-var': 'black',
        '--background-opacity-var': 'rgba(255,255,255, .43)'
    },
    'dark': {
        '--shadow-color-var': '#0d1117',
        '--border-color-var': 'aliceblue',
        '--background-color-var': '#0d1117',
        '--text-color-var': 'white',
        '--background-opacity-var': 'rgba(0,0,0, .33)'
    }
};
// расчет текущего возраста
let difference = new Date() - new Date("2004/03/07");
document.getElementById("current-age").innerText = Math.floor(difference / 1000 / 60 / 24 / 365 / 60).toString();
// установка ключа в localStorage для корректной смены темы
const themeSelector = document.getElementById("theme");
let oldTheme = localStorage.getItem("my_page_theme");
if (oldTheme === null) {
    oldTheme = themeSelector.value;
    localStorage.setItem("my_page_theme", themeSelector.value);
}
themeSelector.addEventListener("change", changeTheme);
themeSelector.value = oldTheme;
themeSelector.dispatchEvent(new Event("change")); //смена стандартной темы на тему из localStorage

function changeTheme() {
    let currentTheme = themeSelector.value;
    localStorage.setItem("my_page_theme", currentTheme);
    const htmlThemes = document.getElementsByTagName('html')[0];
    const themeSettings = themes[currentTheme];
    Object.keys(themeSettings).forEach((key) => {
        htmlThemes.style.setProperty(key, themeSettings[key]);
    })
}