$(function(){

  $('#AddButton').click( function(e) {
    e.preventDefault;
    var value = 423;
    var counter = $('#likes').val();
    counter++ ;
    $('#likes').val(counter);
    $('#likes').html(counter + value);
    $(this).parent().find('.fa-heart').css('color', '#dd0e0e');
    $(this).parent().find('#likes').css('color', '#fff');
    $(this).parent().find('#likes').html(' ' + parseInt(value + 1));
  });

  $('.quote1').hide();

  $('.next').click( function (){
    $('.quote').fadeOut( function (){
      $('.quote1').fadeIn(600);
    });
  });

  $('.prev').click( function (){
    $('.quote1').fadeOut( function (){
      $('.quote').fadeIn(600);
    });
  });

});
