$(document).ready(function () {
  $('.table').click(function () {
    var tableValue = $(this).data('table');
    $(".value").removeClass("visible");
    $("." + tableValue).addClass("visible");
  });
});