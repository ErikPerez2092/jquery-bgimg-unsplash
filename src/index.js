/**
 * jquery-bgimag-unsplash
 * @version 0.0.0-development
 * @author Erik Perez
 * @license The MIT License (MIT)
 */






(function ($) {
  $.fn.bgimgUnsplash = function () {
    $(this).css({
      width: '100%',
      height: '100vh',
      minHeight: '800px'
    });

    return $(this);
  };
})(jQuery);
