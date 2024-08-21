$(function () {


    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });


});


$(document).ready(function () {
    $("body").append("<a href='#home' class='back-to-top'><i class='fa fa-arrow-circle-up' aria-hidden='true'></i></a>"),
        $(function toTop() {
            $(window).scroll(function () {
                $(this).scrollTop() > 400 ? $(".back-to-top").fadeIn() : $(".back-to-top").fadeOut()
            }), $(".back-to-top").click(function () {
                return $("html, body").animate({
                    scrollTop: 0
                }, 900), !1
            })
        });
})