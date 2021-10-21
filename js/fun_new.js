$(function () {


  jQuery(function ($) {
    var colorbox = $('.info_color .info_data');
    colorbox.each(function () {
      $(this).outerHeight();
      if ($(this).outerHeight() > 36) {
        $(this).addClass('hidden');
        var btnMoreCmt = $(this).siblings('.btn-moreInfo');
        btnMoreCmt.show();
        btnMoreCmt.on("click", function () {
          $(this).siblings('.info_data').removeClass('hidden');
          $(this).remove();
        });
      }
    });
  });
  // 인기도서 TOP10
  var rankSwiper = new Swiper(".topten", {
    direction: 'vertical',
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true
    },
    loop: true,
    allowTouchMove: false,
  });

  $(window).on('resize', function () {
    $(".book_topten .swiper-wrapper").css("transform", "translate3d(0px, -33px, 0px)");
  });

  $(".topten .ico_arrow").on('click', function (e) {
    $('.topten').addClass('list_open');
    rankSwiper.slideTo(1, 0, false);
    rankSwiper.autoplay.stop();
    return false;
  });

  $(".book_topten .m_ico_arrow").on('click', function (e) {
    $('.topten').addClass('list_open');
    $('.recommend_wrap .top_container').addClass('triangle');
    $(".book_topten .m_ico_arrow").stop().css({ 'transform': 'rotate(180deg)' }, 5000);
    rankSwiper.slideTo(1, 0, false);
    rankSwiper.autoplay.stop();
    return false;
  });

  $(".rank_list_close").on('click', function (e) {
    $('.topten').removeClass('list_open');
    $('.recommend_wrap .top_container').removeClass('triangle');
    $(".book_topten .m_ico_arrow").stop().css({ 'transform': 'rotate(360deg)', "top": "1px" }, 1000);
    rankSwiper.slideTo(1, 0, false);
    rankSwiper.autoplay.start();
    return false;
  });

  // 탭
  $('.tabs li').on('click', function (e) {
    $('.tabs li').removeClass('on');
    $(this).addClass('on');
  });

  // 인기순, 최신순
  $('.filter-box .order > div').on('click', function (e) {
    e.preventDefault();
    $('.filter-box .order > div').removeClass('on');
    $(this).addClass('on');
  });

  //서재담기
  $('.book_thumbnail .ico.add').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('on');
  });

  //상세 서재담기
  $('.bookmark_ico').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('on');
  });


  //Swiper JS - funSeriesSwipe
  function funSeriesSwipe() {
    //시리즈 슬라이드 01
    var seriesCont01 = new Swiper(".series_cont_01", {
      slidesPerView: 4, spaceBetween: 20, loop: false, observer: true, observeParents: true, watchOverflow: true, watchSlidesVisibility: true, watchSlidesProgress: true, preventInteractionOnTransition: true,
      pagination: {
        el: '.control .progressbar',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.sl-nav .swiper-button-next',
        prevEl: '.sl-nav .swiper-button-prev',
      },
      breakpoints: {
        1140: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
        768: { slidesPerView: "auto", spaceBetween: 18, touchRatio: 0.3, slideToClickedSlide: true, freeMode: false }
      }
    });
    //시리즈 슬라이드 02
    var seriesCont02 = new Swiper(".series_cont_02", {
      slidesPerView: 4, spaceBetween: 20, loop: false, observer: true, observeParents: true, watchOverflow: true, watchSlidesVisibility: true, watchSlidesProgress: true, preventInteractionOnTransition: true,
      pagination: {
        el: '.control .progressbar',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.sl-nav .swiper-button-next',
        prevEl: '.sl-nav .swiper-button-prev',
      },
      breakpoints: {
        1140: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
        768: { slidesPerView: "auto", spaceBetween: 18, touchRatio: 0.3, slideToClickedSlide: true, freeMode: false }
      }
    });
    //시리즈 슬라이드 03
    var seriesCont03 = new Swiper(".series_cont_03", {
      slidesPerView: 4, spaceBetween: 20, loop: false, observer: true, observeParents: true, watchOverflow: true, watchSlidesVisibility: true, watchSlidesProgress: true, preventInteractionOnTransition: true,
      pagination: {
        el: '.control .progressbar',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.sl-nav .swiper-button-next',
        prevEl: '.sl-nav .swiper-button-prev',
      },
      breakpoints: {
        1140: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
        768: { slidesPerView: "auto", spaceBetween: 18, touchRatio: 0.3, slideToClickedSlide: true, freeMode: false }
      }
    });
    //시리즈 슬라이드 04
    var seriesCont04 = new Swiper(".series_cont_04", {
      slidesPerView: 4, spaceBetween: 20, loop: false, observer: true, observeParents: true, watchOverflow: true, watchSlidesVisibility: true, watchSlidesProgress: true, preventInteractionOnTransition: true,
      pagination: {
        el: '.control .progressbar',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.sl-nav .swiper-button-next',
        prevEl: '.sl-nav .swiper-button-prev',
      },
      breakpoints: {
        1140: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
        768: { slidesPerView: "auto", spaceBetween: 18, touchRatio: 0.3, slideToClickedSlide: true, freeMode: false }
      }
    });
    //시리즈 슬라이드 05
    var seriesCont05 = new Swiper(".series_cont_05", {
      slidesPerView: 4, spaceBetween: 20, loop: false, observer: true, observeParents: true, watchOverflow: true, watchSlidesVisibility: true, watchSlidesProgress: true, preventInteractionOnTransition: true,
      pagination: {
        el: '.control .progressbar',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.sl-nav .swiper-button-next',
        prevEl: '.sl-nav .swiper-button-prev',
      },
      breakpoints: {
        1140: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 20 },
        768: { slidesPerView: "auto", spaceBetween: 18, touchRatio: 0.3, slideToClickedSlide: true, freeMode: false }
      }
    });




  }
  funSeriesSwipe();



  //modal
  $('.series_more_btn').on('click', function (e) {
    e.preventDefault();
    $('.modal').addClass('modal-opened');
    $('body').addClass('bodyscroll');
  });

  $('.btn-modal-close').on('click', function (e) {
    var body = document.body;
    e.preventDefault();
    $('.modal').removeClass('modal-opened');
    $(body).removeClass('bodyscroll');
  });
var galleryThumbsMain = new Swiper('.gallery_thumbs', {
    spaceBetween: 5,
    slidesPerView: 6,
    loop: true,
    touchRatio: 0.3,
    slideToClickedSlide: true,
    freeMode: false,
    loopedSlides: 6,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    controller: {
        inverse: true,
        },
    breakpoints: {
        1140: {
            spaceBetween: 10
        }
    }
});

var galleryTopMain = new Swiper('.gallery_top', {
    spaceBetween: 5,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
    loopedSlides: 6,
    controller: {
        inverse: true,
        },
    pagination: {
        el: ".swiper-pagination",
        type: 'bullets',
        clickable: true
        },
    breakpoints: {
        1140: {
            spaceBetween: 0
            },
    768: {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            },
        }
    }
});

galleryThumbsMain.params.control = galleryTopMain;
galleryTopMain.params.control = galleryThumbsMain;

});
