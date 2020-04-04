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

  // collego l'evento click ad ogni icona della navigazione
  $('.nav i').click(
    clickNavBall
  );

  // collego l'evento premere un tasto sulla tastiera
  $('body').keyup(
    moveKey
  );

  // funzione next
  function nextImg() {

    var imgActive = $('.carousel-wrapper img.active'); // creo una variabile che punta all'immagine del carousel con la class "active"

    var navActive = $('.nav i.active'); // creo una variabile che punta all'icona della navigazione a pallini con la class "active"

    // se lo slider arriva all'ultima immagine la class "active" viene data alla prima immagine
    if (imgActive.hasClass('last')) {

      imgActive.removeClass("active"); // rimozione class "active" all'ultima immagine
      $('.carousel-wrapper img.first').addClass("active"); // la class "active" viene aggiunta alla prima immagine

      navActive.removeClass("active"); // rimozione class "active" all'ultima icona della navigazione
      $('.nav i.first').addClass("active"); // la class "active" viene aggiunta alla prima icona

      // altrimenti la class "active" viene rimossa e viene data all'immagine successiva
    } else {

      // rimuovo la class "active" all'immagine
      imgActive.removeClass("active");

      // aggiungo la class "active" all'img successiva a quella a cui ho rimosso la classe
      imgActive.next().addClass("active");

      // rimuovo la class "active" all'icona della navigazione a pallini
      navActive.removeClass("active");

      // aggiungo la class "active" all'icona successiva a quella a cui ho rimosso la classe
      navActive.next().addClass("active");

    }

  }

  // funzione prev
  function prevImg() {


    var imgActive = $('.carousel-wrapper img.active'); // creo una variabile che punta all'immagine del carousel con la class "active"

    var navActive = $('.nav i.active'); // creo una variabile che punta all'icona della navigazione a pallini con la class "active"

    // se lo slider è alla prima immagine la class "active" viene data all'ultima immagine
    if (imgActive.hasClass('first')) {

      imgActive.removeClass("active"); // rimozione class "active" alla prima immagine
      $('.carousel-wrapper img.last').addClass("active"); // la class "active" viene aggiunta all'ultima immagine

      navActive.removeClass("active"); // rimozione class "active" alla prima icona della navigazione
      $('.nav i.last').addClass("active"); // la class "active" viene aggiunta alla prima icona

      // altrimenti la class "active" viene rimossa e viene data all'immagine precedente
    } else {

      // rimuovo la class "active" all'immagine
      imgActive.removeClass("active");

      // aggiungo la class "active" all'img successiva a quella a cui ho rimosso la classe
      imgActive.prev().addClass("active");

      // rimuovo la class "active" all'icona della navigazione a pallini
      navActive.removeClass("active");

      // aggiungo la class "active" all'icona precedente a quella a cui ho rimosso la classe
      navActive.prev().addClass("active");
    }

  }

  // funzione per il click su ogni pallino della navigazione
  function clickNavBall() {

    var navBall = $('.nav i'); // variabile che punta ad ogni icona a pallino
    $(this).addClass("active"); // aggiungo la class "active" al pallino che viene cliccato
    $(this).siblings().removeClass("active"); // rimuovo la class "active" agli altri pallini quando non vengono cliccati
    console.log(navBall);
    var idx = navBall.index(this); // indice del pallino cliccato
    console.log(idx);
    $('.carousel-wrapper img').removeClass('active'); // faccio somparire tutte le immagini
    $('.carousel-wrapper img').eq(idx).addClass('active'); // do la class active solo a quella immagine che ha lo stesso indice del pallino

  }

  // funzione movekey
  function moveKey(e) {

    var imgActive = $('.carousel-wrapper img.active'); // creo una variabile che punta all'immagine del carousel con la class "active"
    var navActive = $('.nav i.active'); // creo una variabile che punta all'icona della navigazione a pallini con la class "active"

    if (e.keyCode === 39) {

      // rimuovo la class "active" all'immagine
      imgActive.removeClass("active");

      // aggiungo la class "active" all'img successiva a quella a cui ho rimosso la classe
      imgActive.next().addClass("active");

      // rimuovo la class "active" all'icona della navigazione a pallini
      navActive.removeClass("active");

      // aggiungo la class "active" all'icona successiva a quella a cui ho rimosso la classe
      navActive.next().addClass("active");

    }

    if ((e.keyCode === 39) && (imgActive.hasClass('last'))) {
      imgActive.removeClass("active"); // rimozione class "active" all'ultima immagine
      $('.carousel-wrapper img.first').addClass("active"); // la class "active" viene aggiunta alla prima immagine

      navActive.removeClass("active"); // rimozione class "active" all'ultima icona della navigazione
      $('.nav i.first').addClass("active"); // la class "active" viene aggiunta alla prima icona

    } else if (e.keyCode === 37) {
      // rimuovo la class "active" all'immagine
      imgActive.removeClass("active");

      // aggiungo la class "active" all'img successiva a quella a cui ho rimosso la classe
      imgActive.prev().addClass("active");

      // rimuovo la class "active" all'icona della navigazione a pallini
      navActive.removeClass("active");

      // aggiungo la class "active" all'icona precedente a quella a cui ho rimosso la classe
      navActive.prev().addClass("active");

    }

    if ((e.keyCode === 37) && (imgActive.hasClass('first'))) {

      imgActive.removeClass("active"); // rimozione class "active" alla prima immagine
      $('.carousel-wrapper img.last').addClass("active"); // la class "active" viene aggiunta all'ultima immagine

      navActive.removeClass("active"); // rimozione class "active" alla prima icona della navigazione
      $('.nav i.last').addClass("active"); // la class "active" viene aggiunta alla prima icona

    }
  }


});
