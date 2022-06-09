$(document).ready(function(){
  $('.tap_type1 .tabs tb').on('click',function(){
    var idx = $(this).parent().index();

    $(this).parent().siblings().removeClass('on');

    $(this).parent().addClass('on');

  });
});
