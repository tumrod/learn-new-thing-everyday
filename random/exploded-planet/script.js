//from codeacademy
$(document).ready(function(){

    $('div').click(function() {
            $(this).fadeOut('fast');
            $isClicked = true;
    });
    $('div').hover(function() {
        $(this).addClass('red');
    });

});