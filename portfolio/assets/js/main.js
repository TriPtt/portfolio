jQuery(function(){
  $(function () {
      $(window).scroll(function () { //Fonction appelée quand on descend la page
          if ($(this).scrollTop() > 500 ) {  // Quand on est à 200pixels du haut de page,
              $('#scrollUp').css('opacity','1'); // Replace à 10pixels de la droite l'image
          } else { 
              $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
          }
      });
  });
});