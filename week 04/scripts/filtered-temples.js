const currentyear = document.querySelector("#currentyear");
const year = new Date();
currentyear.innerHTML = year.getFullYear();

var latestDate = new Date();
document.getElementById("lastModified").innerHTML = latestDate;


//___Hamburger Menu___
const navMenu = document.getElementById('menu');
const hamburgerBtn = document.getElementById('hamburger-btn');

hamburgerBtn.addEventListener('click', ()=> {
  navMenu.classList.toggle('show');

  if (navMenu.classList.contains('show')){
    hamburgerBtn.textContent = '❌';
  }
  else {
    hamburgerBtn.textContent = '☰';
  }
});


//___Temple Data___
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985",
    area: 19000,
    imageUrl: "images/Johannesburg-Temple.jpg"
  },
  {
    templeName: "Tallahassee Florida Temple",
    location: "Tallahassee, Florida, USA",
    dedicated: "2024",
    area: 29000,
    imageUrl: "images/tallahassee_florida_temple.jpg"
  },
  {
    templeName: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1955",
    area: 35000,
    imageUrl: "images/bern_switzerland_temple_lds.jpeg"
  }
];

//___Generate Temple Cards___
function displayTemples(filteredTemples) {
  const container = document.getElementById("templeContainer");
  container.innerHTML = "";

  filteredTemples.forEach((temple) => {
      const card = document.createElement("figure");
      card.classList.add("temple-card");

      const img = document.createElement("img");
      img.src = temple.imageUrl;  // Updated to match new data property
      img.alt = temple.templeName;  // Updated to match new data property
      img.loading = "lazy";
      card.appendChild(img);

      const caption = document.createElement("figcaption");
      caption.innerHTML = `
          <h3>${temple.templeName}</h3>  <!-- Updated to match new data property -->
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>`;
      card.appendChild(caption);

      container.appendChild(card);
  });
}

//___Logic___
function filterTemples(filter) {
  let filtered = [];

  if (filter === "home") {
      filtered = temples; // Show all temples
  } else if (filter === "old") {
      filtered = temples.filter((temple) => {
          let year = parseInt(temple.dedicated.match(/\d{4}/)[0]); // Extracts 4-digit year
          return year < 1900;
      });
  } else if (filter === "new") {
      filtered = temples.filter((temple) => {
          let year = parseInt(temple.dedicated.match(/\d{4}/)[0]); 
          return year > 2000;
      });
  } else if (filter === "large") {
      filtered = temples.filter((temple) => temple.area > 90000);
  } else if (filter === "small") {
      filtered = temples.filter((temple) => temple.area < 10000);
  }

  displayTemples(filtered);
}

//___Event Listeners___
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (event) => {
      event.preventDefault();

      document.querySelectorAll("nav ul li a").forEach((a) => a.classList.remove("active"));
      event.target.classList.add("active");

      filterTemples(event.target.getAttribute("data-filter"));
  });
});

//___Display on load___
displayTemples(temples);