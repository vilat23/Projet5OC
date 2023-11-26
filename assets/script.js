



const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let bannerImage = document.querySelector(".banner-img")
let flecheGauche = document.querySelector(".arrow_left")
let flecheDroite = document.querySelector(".arrow_right")


//EVENTLISTENER SUR LA FLECHE GAUCHE
flecheGauche.addEventListener("click", () => {
	
	console.log("J'ai cliqué sur la flèche gauche")
})


//EVENTLISTENER SUR LA FLECHE DROITE
flecheDroite.addEventListener("click", () => {



	console.log("J'ai cliqué sur la flèche droite")
})



