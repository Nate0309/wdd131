const currentyear = document.querySelector("#currentyear");
const year = new Date();
currentyear.innerHTML = year.getFullYear();

var latestDate = new Date();
document.getElementById("lastModified").innerHTML = latestDate;