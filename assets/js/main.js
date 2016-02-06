( function ( $ ) {
    "use strict";

    $('#page-top').on('click', function () {
      $("html, body").stop().animate({scrollTop:0}, '500', 'swing', function() {

       });
    });

})( jQuery );
