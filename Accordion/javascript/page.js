// $(document).ready(function(){
// 	$('.container .music1').hide();
// 	$('.container .music').click(function() {
// 		var dropDown2 = $(this).closest('div').find('.music');
//     		$(this).closest('.mainaccordion').find('.music').not(dropDown2).slideUp();
//             dropDown2.stop(false, true).slideToggle();
// 	});			
// }); 
$(document).ready(function () {
    $(".show").click(function () {
        if ($(this).hasClass("visible")) {
            $(this).removeClass("visible").next().slideUp();
            $(this).children("i").removeClass("fa-circle-chevron-up");
            $(this).children("i").addClass("fa-circle-chevron-down");
        } else {
            $(".show").removeClass("visible").next().slideUp();
            $(".show").children("i").removeClass("fa-circle-chevron-up");
            $(this).children("i").addClass("fa-circle-chevron-down");
            $(this).addClass("visible").next().slideDown();
            $(this).children("i").removeClass("fa-circle-chevron-down");
            $(this).children("i").addClass("fa-circle-chevron-up");
        }
    });
});