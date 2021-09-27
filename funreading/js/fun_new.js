$(function(){
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

  $(window).on('resize', function() {
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
    $(".book_topten .m_ico_arrow").stop().css({'transform': 'rotate(360deg)',"top":"1px"},1000);
    rankSwiper.slideTo(1,0,false);
    rankSwiper.autoplay.start();
      return false;
  });

  // 탭 
  $('.tabs li').on('click', function (e) {
    e.preventDefault();
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
      $('.book_thumbnail .ico.add').removeClass('on');
      $(this).addClass('on');
    });

  //Swiper JS - MAIN SLIDER
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
    breakpoints: {
      1140: {
        spaceBetween: 10
      }
    }
  });
  var galleryTopMain = new Swiper('.gallery_top', {
    spaceBetween: 5,
    effect: 'fade',
    loop:true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loopedSlides: 6,
    pagination: {
      el: ".swiper-pagination",
      type:'bullets',
      clickable:true
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
  galleryTopMain.controller.control = galleryThumbsMain;
  galleryThumbsMain.controller.control = galleryTopMain;

//시리즈 슬라이드 01
  var seriesCont01 = new Swiper(".series_cont_01", {
    slidesPerView: 4, 
    spaceBetween: 20,
    loop:false,
    observer: true,
		observeParents: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    pagination: {
      el: '.control .progressbar',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.sl-nav .swiper-button-next',
      prevEl: '.sl-nav .swiper-button-prev',
    },
    breakpoints: {
      1140: {
        slidesPerView: 4,
        slidesPerGroup:4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 18,
        touchRatio: 0.3,
        slideToClickedSlide: true,
        freeMode: false,
      }
    }
  });
//시리즈 슬라이드 02
var seriesCont02 = new Swiper(".series_cont_02", {
  slidesPerView: 4, 
  spaceBetween: 20,
  loop:false,
  observer: true,
  observeParents: true,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  pagination: {
    el: '.control .progressbar',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.sl-nav .swiper-button-next',
    prevEl: '.sl-nav .swiper-button-prev',
  },
  breakpoints: {
    1140: {
      slidesPerView: 4,
      slidesPerGroup:4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 18,
      touchRatio: 0.3,
      slideToClickedSlide: true,
      freeMode: false,
    }
  }
});
 //시리즈 슬라이드 03
var seriesCont03 = new Swiper(".series_cont_03", {
  slidesPerView: 4, 
  spaceBetween: 20,
  loop:false,
  observer: true,
  observeParents: true,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  pagination: {
    el: '.control .progressbar',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.sl-nav .swiper-button-next',
    prevEl: '.sl-nav .swiper-button-prev',
  },
  breakpoints: {
    1140: {
      slidesPerView: 4,
      slidesPerGroup:4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 18,
      touchRatio: 0.3,
      slideToClickedSlide: true,
      freeMode: false,
    }
  }
}); 
//시리즈 슬라이드 04
var seriesCont04 = new Swiper(".series_cont_04", {
  slidesPerView: 4, 
  spaceBetween: 20,
  loop:false,
  observer: true,
  observeParents: true,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  pagination: {
    el: '.control .progressbar',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.sl-nav .swiper-button-next',
    prevEl: '.sl-nav .swiper-button-prev',
  },
  breakpoints: {
    1140: {
      slidesPerView: 4,
      slidesPerGroup:4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 18,
      touchRatio: 0.3,
      slideToClickedSlide: true,
      freeMode: false,
    }
  }
});
//시리즈 슬라이드 05
var seriesCont05 = new Swiper(".series_cont_05", {
  slidesPerView: 4, 
  spaceBetween: 20,
  loop:false,
  observer: true,
  observeParents: true,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  pagination: {
    el: '.control .progressbar',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.sl-nav .swiper-button-next',
    prevEl: '.sl-nav .swiper-button-prev',
  },
  breakpoints: {
    1140: {
      slidesPerView: 4,
      slidesPerGroup:4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 18,
      touchRatio: 0.3,
      slideToClickedSlide: true,
      freeMode: false,
    }
  }
});
  
  // seriesBookCont.on('reachEnd', function() {
  //   $('.series_slide_wrap .series_book_cont').css("padding-left","10px");
  // });

  // var numOfSlides = document.querySelectorAll(".series_slide_wrap .swiper-slide").length;
  // console.log("numOfSlides: " + numOfSlides);
  // $(".count .total").html(numOfSlides);

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

});
