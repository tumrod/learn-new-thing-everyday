/* Credit: http://codepen.io/alemesre/pen/hAxGg*/

$(document).ready(function() {

    $('#weather').weatherfeed(['USTX0057']);

    // if rainy, then create the rain drop
    // number of drops created.
    var nbDrop = 100; 

    // function to generate a random number range.
    function randRange( minNum, maxNum) {
      return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }

    // function to generate drops
    function createRain() {
        for( nbDrop; nbDrop < 900; nbDrop+=100) {
            for( i=1;i<nbDrop;i++) {
                var dropLeft = randRange(0,880);
                var dropTop = randRange(-1000,5000);

                $('.rain').append('<div class="drop" id="drop'+i+'"></div>');
                $('#drop'+i).css('left',dropLeft);
                $('#drop'+i).css('top',dropTop);
            }
            if(nbDrop == 900) {
                nbDrop = 100;
            }

        }

    }
    // Make it rain
    // createRain();

});