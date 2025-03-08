const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(today)}</span>`;

var latestDate = new Date();
document.getElementById("lastModified").innerHTML = latestDate;