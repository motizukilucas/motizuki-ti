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

// Google Maps
$(document).ready(function(){
    const uluru = { lat: -22.881057881231193, lng: -42.02650315527545 }; 
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
    });
    const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    });
});

// Count effect
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 20000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// Email form
$('#emailForm').submit(function(){
    var assunto = $('#emailInputAssunto').val();
    var conteudo = $('#emailFormConteudo').val();
    $(this).attr('action', "mailto:someone@example.com?subject="+assunto+"&body="+conteudo);
});