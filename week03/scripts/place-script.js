console.log("Last Modified", document.lastModified)

const lastModifiedElement = document.getElementById("lastModified");

lastModifiedElement.textContent = `Last Updated: ${document.lastModified}`;


document.getElementById("currentYear").textContent = new Date().getFullYear();


function calculateWindChill(temp, wind){
    if (temp <= 10 && wind >= 4.8){
        let windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * Math.pow(wind, 0.16);
        return windChill.toFixed(2) + "°C"
    } else{
        return "N/A";
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const tempElement = document.getElementById("temperature");
    const windElement = document.getElementById("windSpeed");
    const windChillElement = document.getElementById("windChill");

    if (tempElement && windElement && windChillElement){
        const temperature = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windElement.textContent)
        windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    } else {
        console.error("One or more required elements are missing from the HTML.");
    }

    });