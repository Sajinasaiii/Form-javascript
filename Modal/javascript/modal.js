$(document).ready(function()
{
 $(".button").click(function(){
    $(this).hide();
    $(".main-content").addClass("visible pop-up");
    $(".content").addClass("visible pop-up");
 });
 $(".button1").click(function(){
    $(".button").show();
    $(".main-content").removeClass("visible");
    $(".content").removeClass("visible");
 });
});