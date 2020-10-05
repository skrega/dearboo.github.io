$(function (){
    $('.header__btn').on('click', function () {
        $('.header__btn').toggleClass('is-active');
        $('.header__menu').toggleClass('active');
        $('.fade__box').toggleClass('active');
    });

    $(document).mouseup(function (e){ 
        var menu = $('.header__menu')
        var btn__menu = $('.header__btn')
        var fade__box = $('.fade__box')
        if (!menu.is(e.target) 
            && menu.has(e.target).length === 0) { 
            menu.removeClass('active'); 
            btn__menu.removeClass('is-active'); 
            fade__box.removeClass('active'); 
        }
    });

    // $('.fade__box').fadeIn(3000);


});

