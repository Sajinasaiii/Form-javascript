$(document).ready(function () {
    $('.table').click(function () {
        var tabContent = $(this).data('table');
        $(".content").removeClass("active");
        $("." + tabContent).addClass("active");
    });
});