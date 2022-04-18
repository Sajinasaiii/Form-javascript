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
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").next().slideUp();
            $(this).children("i").removeClass("fa-solid fa-circle-chevron-down").addClass("fa-solid fa-circle-chevron-down");
        } else {
            $(".show").removeClass("active").next().slideUp();
            $(".show").children("i").removeClass("fa-solid fa-circle-chevron-down").addClass("fa-solid fa-circle-chevron-down");
            $(this).addClass("active").next().slideDown();
            $(this).children("i").removeClass("fa-solid fa-circle-chevron-down").addClass("fa-solid fa-circle-chevron-down");
        }
    });
});
	