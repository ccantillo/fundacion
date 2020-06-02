$(document).ready(function() {

    $('.slider').slider({
        interval: 3000
    });

    $(".dropdown-trigger").dropdown();

    $('.parallax').parallax();

    $(document).scroll(function() {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    $('.materialboxed').materialbox();

    $("#correo").on('click', () => {
        console.log("nuevo test");
        window.location = "correo.fundaedusa.org";
    })

});