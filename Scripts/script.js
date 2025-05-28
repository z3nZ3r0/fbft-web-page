var url = {
	ytChannel : "",
	ytVideo : "",
	discord : "",
	patreon : ""
	paypal : ""
};

var event = {
	start : new Date("2020-1-1"), 
	end : new Date("2020-1-1"),
	title : "",
	text : "",
	image : "",
	linkText : "",
	linkUrl : ""
};
function eventDisplay (force = false) {
	let today = new Date();
	if((event.start <= today && event.end >= today) || force){
		let evHTML = `<h2>${event.title}</h2>
<p>${event.title}</p>
<a class="button" href="${event.linkUrl}">${event.linkText}</a>
<img src="${event.image}" />
`;	
evSection = document.getElementById("event");
		evSection.style.display = "block";

	}

}

function UrlCopie() {
	navigator.clipboard.writeText('fbft.fr')
	document.getElementById("url").textContent = "adresse copier !";
}