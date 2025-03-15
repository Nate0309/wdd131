const currentyear = document.querySelector("#currentyear");
const year = new Date();
currentyear.innerHTML = year.getFullYear();

var latestDate = new Date();
document.getElementById("lastModified").innerHTML = latestDate;

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