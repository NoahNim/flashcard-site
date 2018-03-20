$(document).ready(function() {
  $('.clickable').click(function(){
    $(this).parent().find(".card-text").toggle();
  });
});
