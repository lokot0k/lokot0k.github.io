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
        '--shadow-color-var': '#0d1117',
        '--border-color-var': 'aliceblue',
        '--background-color-var': '#0d1117',
        '--text-color-var': 'white',
        '--background-opacity-var': 'rgba(0,0,0, .13)',
        '--background-image-var': 'url("/assets/background-dark.png")'
    }
};

function changeTheme() {
    const currentTheme = themeSelector.value;
    localStorage.setItem("my_page_theme", currentTheme);
    const htmlThemes = document.getElementsByTagName('html')[0];
    const themeSettings = themes[currentTheme];
    Object.keys(themeSettings).forEach((key) => {
        htmlThemes.style.setProperty(key, themeSettings[key]);
    });
}

const themeSelector = document.getElementById("theme");

// setting key in localStorage for correct theme change
let oldTheme = localStorage.getItem("my_page_theme");
if (oldTheme === null) {
    oldTheme = themeSelector.value;
    localStorage.setItem("my_page_theme", themeSelector.value);
}

// setting the theme from localStorage
themeSelector.addEventListener("change", changeTheme);
themeSelector.value = oldTheme;
themeSelector.dispatchEvent(new Event("change"));