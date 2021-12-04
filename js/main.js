// Function for detecing entering viewport
$.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();

    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

// init bootstrap carousel
$(document).ready(function(){
    $('.carousel').carousel({
      interval: 5000
    })
});

// Hamburger CSS
var hamburger = $(".hamburger");

hamburger.click(function() {
    hamburger.toggleClass("is-active");
});

// Typed JS
$(document).ready(function() {
    var options = {
        strings: ['Confiável.', 'de Qualidade.', 'Acessível.'],
        typeSpeed: 100,
        startDelay: 2000,
        shuffle: true,
        loop: true,
        loopCount: 3,
        backSpeed: 50
    };

    var typed = new Typed('.typed', options);
});

// Count effect
$(window).scroll(function () {
    if ($('.counter-wrapper').isInViewport()) {

        $('.count').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
          
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
          
            {
          
              duration: 3000,
              easing:'linear',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
            });
          });
        

    }
});

// Email form
$('#emailForm').submit(function(){
    var assunto = $('#emailInputAssunto').val();
    var conteudo = $('#emailFormConteudo').val();
    $(this).attr('action', "mailto:someone@example.com?subject="+assunto+"&body="+conteudo);
});