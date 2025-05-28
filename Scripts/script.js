var url = {
	ytChannel : "",
	ytVideo : "",
	discord : "",
	patreon : ""
	paypal : ""
};

var event = {
	start : "", 
	end : "",
	title : "",
	text : "",
	image : "",
	link : ""
};

function UrlCopie() {
	navigator.clipboard.writeText('fbft.fr')
	document.getElementById("url").textContent = "adresse copier !";
}