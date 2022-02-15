const themes = {
    'light': {
        '--shadow-color-var': 'lightgrey',
        '--border-color-var': 'black',
        '--background-color-var': 'white',
        '--text-color-var': 'black',
        '--background-opacity-var': 'rgba(255,255,255, .33)',
        '--background-image-var': 'url("/assets/background-light.jpg")'
    },
    'dark': {
        '--background-color-var': '#0d1117',
        '--background-opacity-var': 'rgba(0,0,0, .13)',
        '--shadow-color-var': '#0d1117',
        '--border-color-var': 'aliceblue',
        '--text-color-var': 'white',
        '--background-image-var': 'url("/assets/background-dark.png")'
    }
};

const themeSelector = document.getElementById("theme");
// setting key in localStorage for correct theme change
let oldTheme = localStorage.getItem("my_page_theme");
if (oldTheme === null) {
    oldTheme = themeSelector.value;
    localStorage.setItem("my_page_theme", themeSelector.value);
}
themeSelector.addEventListener("change", changeTheme);
themeSelector.value = oldTheme;
themeSelector.dispatchEvent(new Event("change")); // setting the theme from localStorage


// calculating and setting my current age
const difference = new Date() - new Date("2004/03/07");
document.getElementById("current-age").innerText = Math.floor(difference / 1000 / 60 / 24 / 365 / 60).toString();

function changeTheme() {
    const currentTheme = themeSelector.value;
    localStorage.setItem("my_page_theme", currentTheme);
    const htmlThemes = document.getElementsByTagName('html')[0];
    const themeSettings = themes[currentTheme];
    Object.keys(themeSettings).forEach((key) => {
        htmlThemes.style.setProperty(key, themeSettings[key]);
    });
}