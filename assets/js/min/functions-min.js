$(document).ready(function() {
  $('.box-shadow-menu').click(function() {
      $('nav').addClass( "open");
  });
  $('html').on('touchstart', function() {
      $('nav').removeClass( "open");
  });
    $('html').click(function() {
      $('nav').removeClass( "open");
  });
  $('nav').click(function() {
      event.stopPropagation();
  });
  $('.box-shadow-menu').click(function() {
      event.stopPropagation();
  });
    $('nav').on('touchstart', function() {
      event.stopPropagation();
  });
  $('.box-shadow-menu').on('touchstart', function() {
      event.stopPropagation();
  });
});


