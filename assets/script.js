
//TABLEAU DES IMAGES DU SLIDER ET LES TAGLINES

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

/* On récupère les éléments "flèches" de navigation pour les mettre dans des variables */
const flecheGauche = document.querySelector(".arrow_left")
const flecheDroite = document.querySelector(".arrow_right")

/* On récupère les éléments "emplacements" -> image du slide et tagline
pour les mettre dans des variables à cibler pour les modifier avec les fonctions */
const slide = document.getElementById("slide")
const slideTag = document.getElementById("slideTag")
const slideDot = []

/* On défini ici la valeur de l'index à 0 */
let numeroSlide = 0;

// fonction pour ajouter les dots en javascript
const slideDots = banner.querySelector(".dots");

for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	slideDots.appendChild(dot);

	/* On insère la variable dot dans la variable tableau vide slideDot */
	slideDot.push(dot)
}

/*fonction pour supprimer la class dot_selected par défaut et l'afficher seulement sur le dot de la slide "active" */
function slideDotSelected() {
	slideDot.forEach((dot, index) => {
		dot.classList.remove("dot_selected");
		if (index === numeroSlide) {
			dot.classList.add("dot_selected");
		}
	});
}

//Fonction pour modifier les images et les taglines
function slideChange() {
	slide.src = "./assets/images/slideshow/" + slides[numeroSlide].image;
	slideTag.innerHTML = slides[numeroSlide].tagLine;
}

//eventListener au clic sur la fleche gauche
flecheGauche.addEventListener("click", () => {

	numeroSlide = numeroSlide - 1;
	if (numeroSlide < 0)
		numeroSlide = slides.length - 1; /* .length-->propriete javascript pour compter le nb d'elements ds le tableau*/

	slideChange()

	slideDotSelected()
})

//eventListener au clic sur la fleche droite
flecheDroite.addEventListener("click", () => {

	numeroSlide = numeroSlide + 1;
	if (numeroSlide > slides.length - 1)
		numeroSlide = 0;

	slideChange()

	slideDotSelected()
})

/* On rappelle la fonction pour afficher le dot_selected au chargement de la page pour le premier slide */

slideDotSelected()