$(function(){
    // alert();
    // selektor do scrollowania
    // ^ - szukaj wszystkich linków które zaczynają się od # ale nie są tylko hashem bo byłby slepy link
    $('a[href^="#"]').on('click', function(e){
        // zatrzymujemy działanie domyślne przeglądarki czyli skok
        e.preventDefault();
        // w tym przypadku jeśli jest taka konstrukcja to jest obiekt jQuery - zwraca jako obiekt jQuery
        var target = $( $(this).attr('href') );
        // console.log(target.length);
        // w skrotowej notacji - jesli nie jest puste - nie jest różne od zera to
        if(target.length) {
            e.preventDefault();
            console.log(target.offset().top);
            $('html').animate({
                // czas 1000 to 1ms
            // scroll top przesuwa do danego elementu | target to zmienna i ma właściwość offset która przechowuje aktualną lokalizacje w pikselach (widać w console.log)
                // scrollTop: target.offset().top -20 //tu wtedy przesuwa o 20px jeszcze nizej
                // obiekt konfiguracyjny - klucz: wartość
                scrollTop: target.offset().top
            }, 1000);
        }
    });

});