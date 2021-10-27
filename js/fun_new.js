$(function () {
  //메인 배너 
  var galleryThumbsMain = new Swiper('.gallery_thumbs', {
    spaceBetween: 5,
    slidesPerView: 6,
    loop: true,
    freeMode: true,
    loopedSlides: 6,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        1140: {
            spaceBetween: 10
        }
    },
  });
  var galleryTopMain = new Swiper('.gallery_top', {
      spaceBetween: 5,
      slidesPerView: 'auto',
      effect: 'fade',
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
      loopedSlides: 6,
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
                delay: 5000,
                disableOnInteraction: false,
                allowTouchMove: true
                },
            }
        },
      thumbs: {
        swiper: galleryThumbsMain
      },
  });
  
  galleryTopMain.on('slideChangeTransitionStart', function() {
    galleryThumbsMain.slideTo(galleryTopMain.activeIndex);
  });
  
  galleryThumbsMain.on('transitionStart', function(){
    galleryTopMain.slideTo(galleryThumbsMain.activeIndex);
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
        768: { slidesPerView: "auto",freeMode: true, spaceBetween: 18, touchRatio: 0.3, slideToClickedSlide: true }
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
        768: { slidesPerView: "auto", freeMode: true, spaceBetween: 18, touchRatio: 0.3, slideToClickedSlide: true }
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
        768: { slidesPerView: "auto", freeMode: true, spaceBetween: 18, touchRatio: 0.3, slideToClickedSlide: true }
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
        768: { slidesPerView: "auto", freeMode: true, spaceBetween: 18, touchRatio: 0.3, slideToClickedSlide: true}
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
        768: { slidesPerView: "auto", freeMode: true, spaceBetween: 18, touchRatio: 0.3, slideToClickedSlide: true}
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

  // 하단 플로팅  배너
  $(window).scroll(function(){
    var stickyElement = $('.sticky').outerHeight()
    var windowHeight = $(this).outerHeight()
    var target = $('footer').offset().top - windowHeight - stickyElement
    

    if($(window).scrollTop() <= target & $(window).scrollTop() > 270){
      $('.sticky-placeholder').css('height', stickyElement)
      $('.sticky').css({
        'position': 'fixed',
        'bottom': '0'
      })
    } else {
      $('.sticky-placeholder').css('height', 0)
      $('.sticky').css({
        'position': 'relative',
        'bottom': '-100%'
      })
    }
  })

  //연관 도서 추천
  function detailSwipe() {
    function relatedSwiper() {
      var ww = $(window).width();
      var relatedCont = undefined;
      
      if ($(".book_list_wrap div").length > 0) {
        $(".related_control p").text(1 + "/" + $(".related_wrap .swiper-slide").length);
      } else {
        $(".related_control p").text("0/0");
      }
      if (ww < 740 && relatedCont == undefined) {
        relatedCont = new Swiper(".related_wrap .book_list_wrap", {
          slidesPerView: 'auto',
          grabCursor: true,       
          initialSlide : 0,    
          slidesPerGroup: 1,
          loop: false,
          spaceBetween: 0,observer: true, observeParents: true,
          zoom : true, watchOverflow: true,
          touchRatio: 0.3,
          slideToClickedSlide: true,
          freeMode: true,
          pagination: {
            el: '.related_control .progressbar',
            type: 'progressbar',
          },
        }).on('slideChange', function (swiper, activeslide, totalslide) {
            var activeslide = relatedCont.realIndex;
            var totalslide = $(".related_wrap .swiper-slide").length;
            $(".related_control p").text((activeslide + 1) + "/" + totalslide);	//현재 페이지수 / 전체 페이지수
          });
    
      } else if (ww >= 740 && relatedCont != undefined) {
        relatedCont.destroy();
        relatedCont = undefined;
      }
    }
    relatedSwiper();

    $(window).on('resize', function () {
      ww = $(window).width();
      relatedSwiper();
    });
    } 
    detailSwipe();

  // 방송 VOD 다시보기
  function vodSwipe() {
    var vodCont = undefined;
    
    if ($(".vod_wrap div").length > 0) {
      $(".vod_control p").text("1/" + $(".vod_wrap .swiper-slide").length);
    } else {
      $(".vod_control p").text("0/0");	
    }
    var vodCont = new Swiper(".vod_cont", {
      initialSlide : 1,slidesPerView: 4,slidesPerGroup: 4, spaceBetween: 20, loop: false, grabCursor: true, 
      navigation: {
        nextEl: '.sl-nav .swiper-button-next',
        prevEl: '.sl-nav .swiper-button-prev',
      },
      pagination: {
        el: '.vod_control .progressbar',
        type: 'progressbar',
      },
      breakpoints: {
        1140: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
        780:{ slidesPerView: 2 },
        540: { slidesPerView: 1.2, slidesPerGroup: 1, spaceBetween: 22, touchRatio: 0.3, slideToClickedSlide: true, freeMode: true }
      },          
      on: {
        slideChange: function (swiper, activeslide, totalslide) {
          var activeslide = vodCont.realIndex;
          var totalslide = vodCont.slides.length;
          $(".vod_control p").text((activeslide + 1) + "/" + totalslide);	
        },
      },
    });
  }
  vodSwipe();

  //도서상세 - 더보기
  var colorbox = $('.info_color .info_data');
  colorbox.each(function () {
    var inputLength = $('.info_data').length;
    if(inputLength < 200){
      $(".btn-moreInfo").addClass('blind');  
    }else{
        return 0;
    }
    $(this).outerHeight();
    if ($(this).outerHeight() > 21) {
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
