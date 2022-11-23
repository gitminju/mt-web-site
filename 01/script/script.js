jQuery(document).ready(function () {


    //header menu--------------------------------------------------------

    $('header nav>ul').mouseenter(function () {
        $('ul.submenu').slideDown(800)
    })

    $('header nav>ul').mouseleave(function () {
        $('ul.submenu').stop().slideUp(500)
    })


    //slide---------------------------------------------------------------

    setInterval(function () {
        $('.slidewrap').animate({ 'margin-top': '-300' }, function () {
            $('.slide:first').appendTo('.slidewrap')
            $('.slidewrap').css({ 'margin-top': '0' })
        })
    }, 3000)


    //tab-----------------------------------------------------------------

    $('.tabmenu li').click(function () {
        var idx = $(this).index()

        $('.tabitem >*').hide().removeClass('on')
        $('.tabitem >*').eq(idx).show().addClass('on')

        $('.tabmenu li').removeClass('on')
        $(this).addClass('on')
    })


    //popUpBox---------------------------------------------------------

    $('.notice li:nth-child(1)').click(function () {
        $('.popupbox').show();
    })

    $('.popupbox button').click(function () {
        $('.popupbox').hide();
    })


});