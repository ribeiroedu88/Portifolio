
const _elements = {
	date: document.querySelector(".date"),

	scrollLinks: document.querySelectorAll(".navbar-list__link, .footer-list__link"),
	navbarList: document.querySelector(".navbar-list"),
	toggle: document.querySelector(".navbar-header__toggle"),
}

_elements.scrollLinks.forEach(link => {
	link.addEventListener("click", e => {
		_elements.navbarList.classList.remove("navbar-list--show-links");
		const id = link.getAttribute("href");
		const element = document.querySelector(id);

		const position = element.offsetTop - 65;

		window.scrollTo({
			top: position,
			behavior: "smooth"
		});

		e.preventDefault();
	});
});

//*************************  MENU  ****************************************

_elements.toggle.addEventListener("click", () => {
	_elements.navbarList.classList.toggle("navbar-list--show-links");
});


// ************************  MODAL IMPRESSO  ******************************

const openModal = () => {
    let ovelay = document.getElementById("overlay");
    let modal = document.getElementById("modal");
    ovelay.style.display = 'flex'
}

const closeModal = () => {
    let ovelay = document.getElementById("overlay");
    let modal = document.getElementById("modal");
    ovelay.style.display = 'none'
}

var slideNumber = 1;
showSlider(slideNumber);

function plusSlides(n) {
  showSlider(slideNumber += n);
}

function currentSlide(n) {
  showSlider(slideNumber = n);
}

function showSlider(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideNumber = 1}    
  if (n < 1) {slideNumber = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNumber-1].style.display = "block";  
}


// ************************  MODAL REDE  ******************************

const openRede = () => {
    let ovelay = document.getElementById("overlay-rede");
    let modal = document.getElementById("modal-rede");
    ovelay.style.display = 'flex'
}

const closeModalrede = () => {
    let ovelay = document.getElementById("overlay-rede");
    let modal = document.getElementById("modal-rede");
    ovelay.style.display = 'none'
}

var slideRede = 1;
showSliderRede(slideRede);

function plusSlidesRede(n) {
  showSliderRede(slideRede += n);
}

function currentSlideRede(n) {
  showSliderRede(slideRede = n);
}

function showSliderRede(n) {
  var i;
  var slidesRede = document.getElementsByClassName("mySlidesRede");
  var dotsrede = document.getElementsByClassName("dotrede");
  if (n > slidesRede.length) {slideRede = 1}    
  if (n < 1) {slideRede = slidesRede.length}
  for (i = 0; i < slidesRede.length; i++) {
      slidesRede[i].style.display = "none";  
  }
  for (i = 0; i < dotsrede.length; i++) {
      dotsrede[i].className = dots[i].className.replace(" active", "");
  }
  slidesRede[slideRede-1].style.display = "block";  
}


// ************************  MODAL MOTION  ******************************

const openMotion = () => {
  let ovelay = document.getElementById("overlay-motion");
  let modal = document.getElementById("modal-motion");
  ovelay.style.display = 'flex'
}

const closeModalmotion = () => {
  let ovelay = document.getElementById("overlay-motion");
  let modal = document.getElementById("modal-motion");
  ovelay.style.display = 'none'
}

var slideMotion = 1;
showSliderMotion(slideMotion);

function plusSlidesMotion(n) {
showSliderMotion(slideMotion += n);
}

function currentSlideMotion(n) {
showSliderMotion(slideMotion = n);
}

function showSliderMotion(n) {
var i;
var slidesMotion = document.getElementsByClassName("mySlidesMotion");
var dotsmotion = document.getElementsByClassName("dotmotion");
if (n > slidesMotion.length) {slideMotion = 1}    
if (n < 1) {slideMotion = slidesMotion.length}
for (i = 0; i < slidesMotion.length; i++) {
    slidesMotion[i].style.display = "none";  
}
for (i = 0; i < dotsmotion.length; i++) {
    dotsmotion[i].className = dots[i].className.replace(" active", "");
}
    slidesMotion[slideMotion-1].style.display = "block";  
}


// ************************  MODAL FOTO   ******************************

const openFoto = () => {
  let ovelay = document.getElementById("overlay__foto");
  let modal = document.getElementById("modal__foto");
  ovelay.style.display = 'flex'
}

const closeModalfoto = () => {
  let ovelay = document.getElementById("overlay__foto");
  let modal = document.getElementById("modal__foto");
  ovelay.style.display = 'none'
}

var slideFoto = 1;
showSliderFoto(slideFoto);

function plusSlidesFoto(n) {
showSliderFoto(slideFoto += n);
}

function currentSlideFoto(n) {
showSliderFoto(slideFoto = n);
}

function showSliderFoto(n) {
var i;
var slidesFoto = document.getElementsByClassName("mySlidesFoto");
var dotsfoto = document.getElementsByClassName("dotfoto");
if (n > slidesFoto.length) {slideFoto = 1}    
if (n < 1) {slideFoto = slidesFoto.length}
for (i = 0; i < slidesFoto.length; i++) {
    slidesFoto[i].style.display = "none";  
}
for (i = 0; i < dotsfoto.length; i++) {
    dotsfoto[i].className = dots[i].className.replace(" active", "");
}
    slidesFoto[slideFoto-1].style.display = "block";  
}

// ************************  MODAL CURRICULO   ******************************

const openProfi = () => {
  let ovelay = document.getElementById("overlay__profi");
  let modal = document.getElementById("modal__profi");
  ovelay.style.display = 'flex'
}

const closeModalprofi = () => {
  let ovelay = document.getElementById("overlay__profi");
  let modal = document.getElementById("modal__profi");
  ovelay.style.display = 'none'
}

/**************************************************************************/
/* As linhas de código abaixo correspondem a um capítulo e um vídeo bônus 
/* desse projeto. Neste capítulo/vídeo é ensinado como fazer o slider alterar
/* a imagem apenas arrastando o dedo na tela. 
/*
/* Caso deseje adquirir essa parte do projeto acompanhado do código fonte 
/* completo + código fonte comentado + layout do projeto no Figma, 
/* acesse o link abaixo:
/*
/* https://inkasadev.alumy.com
/**************************************************************************/

_elements.slider.addEventListener("", e => {

});

_elements.slider.addEventListener("", e => {

});
