/**************************************/
/*   web site FBFT by zenZero 2025    */
/*   1.0
/*
/**************************************/




/**************************************/
/* CONFIG                             */
/**************************************/


/*****************

CHOISIEZ LES URL UTILISER DANS LA PAGE ICI   
**/
const URLs = {
	
	// Vidéo de présentation en haut de page
	ytVideo:"https://www.youtube.com/embed/FY2hKnTow5A?si=04M-SjrOfOn0mVJB",
	
	// chaine yt d'fbft
	ytChannel: "https://www.youtube.com/@jeannotdefbft",
	
	// invitation au discord
	discord: "https://discord.gg/ZKEvx3HdZD",
	
	// page patreon d'fbft
	patreon: "https://www.patreon.com/superjeannot",
	
	// page paypal d'fbft
	paypal: "https://paypal.me/Fbft0Admin",
	
	// la timeline
	timeline:"https://time.graphics/line/909263",
	
	// le repository des World download
	worldDL:"https://github.com/SuperJeannotDeFbft/Fbft-World-Dowloads"
};


/*****************

PARAMETEZ L'AFFICHAGE ET LE CONTENU DE LA SECTION EVENT 
**/
const eventSec = {
	
	// date de début et de fin (inclut)
	start : new Date("2025-1-1"), 
	end : new Date("2025-1-1"),
	
	// Titre et corp du texte
	title : "titre de l'evenement",
	text : `Corp de texte à affiché avec l'evenement. Il est possible de faire des retour a la ligne dans cette partie du texte, sinon les retours à la lign sont fait automatiquement. Si il devient très grand, l'epace alouer prendra de l'empleure verticalement dans la page. Pensez à bien régler la date pour éviter davoir des messages périmé qui reste en tête d'affichage sur la page ;)`,
	
	//url du lien et texte du bouton associé
	btnDisplay : true, // true ou false pour afficher ou non le bouton de lien
	btnUrl : "#",
	btnText : "un bouton",
	
	//url d'une images, SJ par default ?
	imageDisplay : true, // true ou false pour afficher l'image
	image : "Images/SJ2023.png"
};






/**************************************/
/* FUNCTION                           */
/**************************************/



/*********************************/
/* fonction pour appliquer la config
/**/
function loadConfig () {
	
	eventDisplay();
	urlLoader();
}


/*************************/
function urlLoader () {

	document.getElementById("yt-embed").src =URLs.ytVideo;
	
	for ( var uClass in URLs ) {
		
		var urlElems = document.getElementsByClassName(uClass);
		for ( var ele of urlElems ) {
			
			ele.href = URLs[uClass];
		}
	}
	console.log("urlLoaded");
}

/*************************/
/* Function eventDisplay()
/*
/* Construit et affiche la section "event" sur la page
/* en fonction des parametres de configuration
/**/
function eventDisplay (force = false) {
	
	var today = new Date();
	
	if((eventSec.start <= today && eventSec.end >= today) || force) {
			
			var evHTML = '';

			if (eventSec.imageDisplay) {
				evHTML = evHTML.concat( `<img src="${eventSec.image}" style="float:left" />`);				
			}
			
			evHTML = evHTML.concat( `<h2>${eventSec.title}</h2>
									 <p>${eventSec.text}</p>`);

			if (eventSec.btnDisplay) {
				evHTML = evHTML.concat( `<a class="button" href="${eventSec.btnUrl}" target="_black">${eventSec.btnText}</a>` );
			}
			
	evSection = document.getElementById("event");
	evSection.style.display = "block";
	evSection.innerHTML = evHTML;
	}
}


/*********************************/
/* fonction pour copier l'url du serveur
/**/
function UrlCopie() {
	
	navigator.clipboard.writeText('fbft.fr');
	document.getElementById("url").textContent = "adresse du serveur copier !";
}














