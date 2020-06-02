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
    var mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {

    })



    var masonry = new Macy({
        container: '#macy-container',
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        debug: true,
        mobileFirst: false,
        columns: 1,
        margin: {
            y: 4,
            x: 4,
        },
        breakAt: {
            2600: 8,
            1900: 6,
            1200: 6,
            940: 5,
            520: 3,
            400: 2
        },
    });


    // MATERIALIZE'S ".MATERIALBOXED"
    var materialboxeds = document.querySelectorAll('.materialboxed')
    for (var i = 0; i < materialboxeds.length; i++) {
        M.Materialbox.init(materialboxeds[i]);
    }

});