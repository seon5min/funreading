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
    allowTouchMove:false,
    observer: true,	// 추가
    observeParents: true,	// 추가
  });


  $(".topten .ico_arrow").on('click', function (e) {
    $('.topten').addClass('list_open');
    rankSwiper.slideTo(1,0,false);
    // $(".swiper-wrapper").css("transform", "translate3d(0px, -34px, 0px)");
    rankSwiper.autoplay.stop();
    return false;
  });

  $(".rank_list_close").on('click', function (e) {
    $('.topten').removeClass('list_open');
      rankSwiper.slideTo(1,0,false);
      rankSwiper.autoplay.start();
      return false;
  });

  // 카테고리 TAB
  $('.tab .tabs a').on('click', function (e) { 
    var idx = $(this).parent().index(); 
    var $this = $(this);
    $(this).parent().siblings().removeClass('on'); 
    $(this).parent().addClass('on'); 
    $(this).parent().parent().parent().siblings('.tab_con').removeClass('on');
    $(this).parent().parent().parent().siblings('.tab_con').eq(idx).addClass('on');
  });

  // 인기순, 최신순 
  $('.filter-box .order > div').on('click', function (e) {
    e.preventDefault();
    $('.filter-box .order > div').removeClass('on');
    $(this).addClass('on');
  });

  //Swiper JS - MAIN SLIDER
  var galleryThumbsMain = new Swiper('.gallery_thumbs', {
    spaceBetween: 5,
    slidesPerView: 6,
    loop: false,
    autoplay: false,
    observer: true,
		observeParents: true,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    freeMode: true,
    loopedSlides: 6, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 320px
      1140: {
        spaceBetween: 10
      }
    }
  });
  var galleryTopMain = new Swiper('.gallery_top', {
    spaceBetween: 5,
    effect: 'fade',
    loop: false,
    observer: true,
		observeParents: true,
    autoplay: false,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    loopedSlides: 6,
    pagination: {
      el: ".swiper-pagination",
      type:'bullets',
      clickable:true
    },
    breakpoints: {
      // when window width is >= 320px
      1140: {
        spaceBetween: 0
      },
      768: {
        autoplay: false
      }
    }
  });
  galleryTopMain.controller.control = galleryThumbsMain;
  galleryThumbsMain.controller.control = galleryTopMain;


  var seriesBookCont = new Swiper(".series_book_cont", {
    slidesPerView: 4, 
    spaceBetween: 30,
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
    }
  });
  
  seriesBookCont.on('reachEnd', function() {
    console.log("reachEnd");
  });

  var numOfSlides = document.querySelectorAll(".swiper-slide").length;
  console.log("numOfSlides: " + numOfSlides);/* 3 */
});
