// riproduzione Carousel

$(document).ready(function(){

  // collego l'evento click all'icona "next"
  $('.next').click(
    nextImg // creo una funzione a parte, verrà eseguita al click sull'icona "next"
  );

  // collego l'evento click all'icona "prev"
  $('.prev').click(
    prevImg // creo una funzione a parte, verrà eseguita al click sull'icona "prev"
  );

  // funzione next
  function nextImg() {

    // creo una variabile che punta all'immagine del carousel con la class "active"
    var imgActive = $('.carousel-wrapper img.active');

    // se lo slider arriva all'ultima immagine la class "active" viene data alla prima immagine
    if (imgActive.hasClass('last')) {

      imgActive.removeClass("active"); // rimozione class "active" all'ultima immagine
      $('.carousel-wrapper img.first').addClass("active"); // la class "active" viene aggiunta alla prima immagine

      // altrimenti la class "active" viene rimossa e viene data all'immagine successiva
    } else {

      // rimuovo la class "active" all'immagine
      imgActive.removeClass("active");

      // aggiungo la class "active" all'img successiva a quella a cui ho rimosso la classe
      imgActive.next().addClass("active");
    }

  }

  // funzione prev
  function prevImg() {

    // creo una variabile che punta all'immagine del carousel con la class "active"
    var imgActive = $('.carousel-wrapper img.active');

    // se lo slider è alla prima immagine la class "active" viene data all'ultima immagine
    if (imgActive.hasClass('first')) {

      imgActive.removeClass("active"); // rimozione class "active" alla prima immagine
      $('.carousel-wrapper img.last').addClass("active"); // la class "active" viene aggiunta all'ultima immagine

      // altrimenti la class "active" viene rimossa e viene data all'immagine precedente
    } else {

      // rimuovo la class "active" all'immagine
      imgActive.removeClass("active");

      // aggiungo la class "active" all'img successiva a quella a cui ho rimosso la classe
      imgActive.prev().addClass("active");
    }

  }


});
