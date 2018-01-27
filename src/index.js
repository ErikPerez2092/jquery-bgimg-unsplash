/**
 * jquery-bgimag-unsplash
 * @version 0.0.0-development
 * @author Erik Perez
 * @license The MIT License (MIT)
 */






(function (global,$) {
  function BgimgUnsplash () {

  }

  BgimgUnsplash.prototype.setup = function(clientId) {
    this.clientId = clientId;
  };

  var getRandomPhoto = function() {
    return (
      $.ajax({
        url: 'https://api.unsplash.com/photos/random',
        beforeSend: function(xhr) {
          xhr.setRequestHeader('Authorization','Client-ID '+ global.BgimgUnsplash.clientId);
        }
      })
    );
  };

  $.fn.bgimgUnsplash = function (options) {
    var deferred = $.Deferred();
    options = options || {};
    var $self = $(this);
    $self.css({
      width: '100%',
      height: '100vh',
      minHeight: options.minHeight || '800px',
      backgroundSize: options.backgroundSize || 'cover',
      backgroundPosition: options.backgroundPosition || 'center',
      backgroundColor: options.backgroundColor || 'black',
    });

    getRandomPhoto()
      .then(function(photo) {
        $self.css({
          backgroundImage: 'url('+ photo.urls.regular +')'
        });
        deferred.resolve($self);
      })
      .catch(function() {
        $self.css({
          backgroundImage: 'url('+ options.backgroundImage +')'
        });
        deferred.reject($self);
      });
    return deferred.promise();
  };
  global.BgimgUnsplash = new BgimgUnsplash();
})(window,jQuery);
