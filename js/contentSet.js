// function for calculating and setting my current age
function setAge() {
    const difference = new Date() - new Date("2004/03/07");
    document.getElementById("current-age").innerText = Math.floor(difference / 1000 / 60 / 24 / 365 / 60).toString();
}

//setting random fumo image using "api-fumo.herokuapp.com"
const randomFumoRoute = "https://api-fumo.herokuapp.com/";
// empty fumoImage src for not "blinking" with default image
document.getElementById("fumoImage").src = "";

async function getFumoUrl() {
    const resp = await fetch(randomFumoRoute);
    // declare default fumo image path
    let fumoUrl = "/assets/defaultFumo.png";
    if (resp.ok) {
        fumoUrl = (await resp.json()).URL;
    }
    return fumoUrl;
}

// function for checking for appropriate file format and re-getting url if it not
async function getValidFumoUrl() {
    let fumoUrl = await getFumoUrl();
    let format = fumoUrl.split('.').pop();
    while (format === "mp4") {
        fumoUrl = await getFumoUrl();
        format = fumoUrl.split('.').pop();
    }
    return fumoUrl;
}

// function to set image url for aside block
async function setFumoImage() {
    document.getElementById("fumoImage").src = await getValidFumoUrl();
}

setAge();
setFumoImage();