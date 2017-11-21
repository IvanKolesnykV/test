$(document).ready(function(){
    $(".thumbs a").click(function(){
        var largePath = $(this).attr("href");

        $('.carousel-list li a').click(function() {
            $('.carousel-list li a').removeClass('active-a-banner');//заберет актив у всех ссылок
            $(this).addClass('active-a-banner');                    //присвоит нужной
        });
        $("#largeImg").attr({ src: largePath });
        return false;
    });
    var timerId = setInterval(function() {
        $('.bttxt>img').removeClass('visibility');
        $('.one-img').addClass('visibility');
    }, 3000);
    var timerId = setInterval(function() {
        $('.bttxt>img').removeClass('visibility');
        $('.two-img').addClass('visibility');
    }, 6001);

    $('.sort-bar>ul>li>a').click(function() {                       //табы
        $('.sort-bar>ul>li>a').removeClass('active-a-sort-bar');
        $(this).addClass('active-a-sort-bar');
    });
    $('.a-sort-bar-first-child').click(function () {
        $('.left-content>.solt-results').removeClass('visibility');
        $('.by-destination').addClass('visibility');
    });
    $('.a-sort-bar-two-child').click(function () {
        $('.left-content>.solt-results').removeClass('visibility');
        $('.by-species').addClass('visibility');
    });
    $('.a-sort-bar-last-child').click(function () {
        $('.left-content>.solt-results').removeClass('visibility');
        $('.by-tour-type').addClass('visibility');
    });

});