require('dotenv').config();
var expect = require('expect.js');
var jsdom = require('jsdom');

var dom = new jsdom.JSDOM('<html><body><section></section></body></html>');
var $ = global.jQuery = require('jquery')(dom.window);

require('jsdom-global')();
require('../src');

describe('jquery-bgimag-unsplash', function() {
  var $section;
  var clientId = process.env.CLIENT_ID;
  beforeEach(function () {
    window.BgimgUnsplash.setup(clientId);
    $section = $('section');
  });

  it('should have the default values', function(){
    $section.bgimgUnsplash();
    expect($section.css('width')).to.be('100%');
    expect($section.css('minHeight')).to.be('800px');
    expect($section.css('backgroundSize')).to.be('cover');
    expect($section.css('backgroundPosition')).to.be('center');
    expect($section.css('backgroundColor')).to.be('black');
  });

  it('should have defined values', function(){
    $section.bgimgUnsplash({
      minHeight: '700px',
      backgroundSize: 'contain',
      backgroundPosition: 'top center',
      backgroundColor: 'red'
    });
    expect($section.css('minHeight')).to.be('700px');
    expect($section.css('backgroundSize')).to.be('contain');
    expect($section.css('backgroundPosition')).to.be('top center');
    expect($section.css('backgroundColor')).to.be('red');
  });

  it('should set clientId attr', function(){
    expect(window.BgimgUnsplash.clientId).to.be(clientId);
  });

  it('should set default image', function() {
    window.BgimgUnsplash.setup('123');
    return $section.bgimgUnsplash({
      backgroundImage: 'path/defaultImage.jpg'
    }).catch(function($this) {
      expect($this.css('backgroundImage')).to.contain('path/defaultImage.jpg');
    });
  });

  it('should set an random image from unsplash', function() {
    return $section.bgimgUnsplash({
      backgroundImage: 'path/defaultImage.jpg'
    }).then(function($this) {
      expect($this.css('backgroundImage')).to.contain('url');
    }).catch(function($this) {
      expect($this.css('backgroundImage')).to.contain('path/defaultImage.jpg');
    });
  });

});
