$(document).ready(function() {
    var pageCount = 5;
    var perspectivePX = 100;
    var yDegree = -40;
    var pageOpacity = 1.0;

    var bookUrl = [];
    var marginLeft = 30;
    var marginTop = 30;

    var createMultiplePage = function (pageCount) {
        var bookUrl = ["http://artfiles.alphacoders.com/761/76165.jpg", "http://images3.alphacoders.com/111/111565.jpg" , "http://k45.kn3.net/taringa/0/9/6/6/4/6/estrellade/BA1.jpg?3070", "http://s3.favim.com/orig/41/beautiful-landscape-nature-pink-sea-Favim.com-344716.jpg"];
        for (var b = 0; b < bookUrl.length; b++) {
            $('.collection').append('<div class="book" id="book-'+ b+ '"></div>');
            var idName = '#book-'+b;
            $(idName).css('margin-left', marginLeft + 'px');
            $(idName).css('margin-top', marginTop + 'px');

            for( var i = 1 ; i < pageCount ; i++) {
                $('#book-'+b).append('<div class="individual-page" id="book-'+ b+ '-page'+i+'"></div>');
                $('#book-'+b+'-page'+i).css('background', 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("'+bookUrl[b]+'")');
                $('#book-'+b+'-page'+i).css('background-size', '0, cover');
                $('#book-'+b+'-page'+i).css('opacity', pageOpacity);
                $('#book-'+b+'-page'+i).css('transform', 'perspective('+ perspectivePX +'px) rotateY('+ yDegree+ 'deg)');
                yDegree-=10;
                pageOpacity-=0.1;

                if(pageOpacity < 0) {
                    pageOpacity = Math.abs(pageOpacity);
                }
            }

            if(b%2 === 0) {
                marginLeft+= 600;
            } else {
                marginLeft=30;
                marginTop+= 400;
            }
            perspectivePX+=50;
        }
    }

    var createSinglePage = function (pageCount) {
        var bookUrl = ["http://artfiles.alphacoders.com/761/76165.jpg"];
        for (var b = 0; b < bookUrl.length; b++) {
            $('.collection').append('<div class="book" id="book-'+ b+ '"></div>');
            var idName = '#book-'+b;
            $(idName).css('margin-left', 30 +'%');
            $(idName).css('margin-top', 30 + '%');

            for( var i = 1 ; i < pageCount ; i++) {
                $('#book-'+b).append('<div class="individual-page" id="book-'+ b+ '-page'+i+'"></div>');
                $('#book-'+b+'-page'+i).css('background', 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("'+bookUrl[b]+'")');
                $('#book-'+b+'-page'+i).css('background-size', '0, cover');
                $('#book-'+b+'-page'+i).css('opacity', pageOpacity);
                $('#book-'+b+'-page'+i).css('transform', 'perspective('+ perspectivePX +'px) rotateY('+ yDegree+ 'deg)');
                yDegree-=10;
                pageOpacity-=0.1;

                if(pageOpacity < 0) {
                    pageOpacity = Math.abs(pageOpacity);
                }
            }
        }
    }
    //createMultiplePage(pageCount);
    createSinglePage(pageCount);

});