document.addEventListener("DOMContentLoaded", function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Get the last modified date of the document
    const lastModified = document.lastModified;

    // Update the footer content
    const footerContent = document.getElementById("footer-content");
    if (footerContent) {
        footerContent.textContent = `© ${currentYear} | Last updated: ${lastModified}`;
    }
});


const locations = [
    { name: "Warp Core Games", city: "sandton", type: "shop" },
    { name: "The Tabletop Tavern", city: "randburg", type: "club" },
    { name: "Mini-War Grounds", city: "roodepoort", type: "event" },
    { name: "Battle Forge", city: "midrand", type: "shop" },
    { name: "Critical Hit Lounge", city: "fourways", type: "club" },
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
  
    const form = document.getElementById("location-form");
    const resultsDiv = document.getElementById("results");
  
    console.log("Form:", form);
    console.log("Results Div:", resultsDiv);
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      console.log("Form submitted");
  
      const selectedCity = document.getElementById("city").value;
      const selectedType = document.querySelector('input[name="type"]:checked');
  
      console.log("Selected City:", selectedCity);
      console.log("Selected Type:", selectedType ? selectedType.value : "None");
  
      // Clear previous results
      resultsDiv.innerHTML = "";
  
      // Check if inputs are valid
      if (!selectedType || !selectedCity) {
        console.log("Invalid inputs");
        resultsDiv.textContent = "Please select a city and type of place.";
        resultsDiv.style.display = "block"; // Ensure the div is visible
        return;
      }
  
      // Filter locations
      const filtered = locations.filter(
        (loc) =>
          loc.city === selectedCity.toLowerCase() &&
          loc.type === selectedType.value
      );
  
      console.log("Filtered Results:", filtered);
  
      // Display results
      if (filtered.length > 0) {
        filtered.forEach((loc) => {
          console.log("Appending result:", loc); // Debugging log
          const p = document.createElement("p");
          p.textContent = `${loc.name} in ${
            loc.city.charAt(0).toUpperCase() + loc.city.slice(1)
          }`;
          resultsDiv.appendChild(p);
        });
      } else {
        console.log("No matching locations found");
        resultsDiv.textContent = "No matching locations found.";
      }
  
      // Make the results div visible
      resultsDiv.style.display = "block";
    });
  });