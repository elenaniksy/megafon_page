$(function () {
    $('.listContent').hide();
    $('h3.styleTitle').click(function () {
        $(this).next().slideToggle('slow').siblings('div:visible').slideUp('slow');
    });
});