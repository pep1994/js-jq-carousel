// riproduzione Carousel

$(document).ready(function(){

  // collego l'evento click all'icona "next"
  $('.next').click(
    nextImg // creo una funzione a parte, verrà eseguita al click sull'icona "next"
  );

  // funzione next
  function nextImg() {

    // creo una variabile che punta all'immagine del carousel con la class "active"
    var imgActive = $('.carousel-wrapper img.active');

    // rimuovo la class "active" all'immagine
    imgActive.removeClass("active");

    // aggiungo la class "active" all'img successiva a quella a cui ho rimosso la classe
    imgActive.next().addClass("active");
  }

























});
