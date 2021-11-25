var screenSize; // detect screen size to decrease nuber of items into all sliders into mobile scales
function attachLighterSlide() {
    screenSize = $(window).width(); // get screen size

    $(".content-slider").each(function () { // loop on all sliders to bind scriptaccording to number of items written on each one
        let itemsPerPage = parseInt($(this).attr("items-per-page")); // get number of slider items for current slider
        setSliders($(this), itemsPerPage);
    });

    $("#datepicker").datepicker(); // build calender

    // control responsive menue into mobile scale
    $(".menue-controler").on("click", function () {
        showResponsiveMenue();
    });
    $(".close-menue").on("click", function () {
        hideResponsiveMenue();
    });
    $(window).on("resize", function () {
        hideResponsiveMenue();
    });
    $(window).on("scroll", function () {
        hideResponsiveMenue();
    });
}

function showResponsiveMenue() { // show the responsive menue
    $(".responsive-menue").removeClass("d-none");
}

function hideResponsiveMenue() { // hide the responsive menue
    $(".responsive-menue").addClass("d-none");
}

function setSliders(sliderObj, itemsPerPage) { // build slider
    let itemsNumber = itemsPerPage;
    if (screenSize < 770 && itemsPerPage > 1) { itemsNumber = 2; } // check to decrease items no. into mobile scale
    sliderObj.lightSlider({
        loop: true,
        item: itemsNumber,
        keyPress: true,
        controls: true,
        prevHtml: '<i class="fas fa-chevron-left"></i>',
        nextHtml: '<i class="fas fa-chevron-right"></i>'
    });
    sliderObj.css({
        "visibility": "visible",
        "height": "auto"
    });
}