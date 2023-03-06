let difference = new Date() - new Date("2004/03/07");
document.getElementById("current-age").innerText = Math.floor(difference / 1000 / 60 / 24 / 365 / 60).toString();