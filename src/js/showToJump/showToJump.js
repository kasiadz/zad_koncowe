$(function(){
    // zebranie wysokości okna ekranu przy użyciu selektora window
    const pageHeight = $(window).height() /2;
    // console.log(pageHeight);
    $(window).on('scroll', function(){
        var YOffset = $(window).scrollTop();
        // console.log(YOffset);
        // porównujemy czy yoffset jest dalej niż pageheight
        if(YOffset > pageHeight) {
            $('#to_top').fadeIn(1500);
        } else { $('#to_top').fadeOut(1500);

        }
    });
});