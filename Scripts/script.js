
const URLs = {
	ytChannel: "yo",
	ytVideo: "yo",
	discord: "yo",
	patreon: "yo",
	paypal: "yo"
};

var eventSec = {
	start : new Date("2025-1-1"), 
	end : new Date("2026-1-1"),
	title : "titre de l'evenement",
	text : "corp du texte",
	image : "#",
	linkText : "texte du bouton",
	linkUrl : "#"
};
/*
function eventDisplay (force = false) {
	let today = new Date();
	if((eventSec.start <= today && eventSec.end >= today) || force) {
		
		let evHTML = `<h2>${eventSec.title}</h2>
<p>${eventSec.title}</p>
<a class="button" href="${eventSec.linkUrl}">${eventSec.linkText}</a>
<img src="${eventSec.image}" />
`;


		evSection = document.getElementById("event");
		evSection.style.display = "block";
		evSection.innerHTML = evHTML;
	}

}
*/
function eventDisplay (force = false) {
	var today = new Date();
	if((eventSec.start <= today && eventSec.end >= today) || force) {
			var evHTML = `<h2>${eventSec.title}</h2>
<p>${eventSec.title}</p>
<a class="button" href="${eventSec.linkUrl}">${eventSec.linkText}</a>
<img src="${eventSec.image}" />
`;
	}
	evSection = document.getElementById("event");
	evSection.style.display = "block";
	evSection.innerHTML = evHTML;
}
function UrlCopie() {
	navigator.clipboard.writeText('fbft.fr')
	document.getElementById("url").textContent = "adresse du serveur copier !";
}