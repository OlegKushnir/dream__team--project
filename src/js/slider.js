$(document).ready(function () {
    $('.galary__slide').slick({
      autoplay: true,
      infinite: true,
      speed: 700,
      fade: true,
      cssEase: 'linear',
    });
  });
  $(document).ready(function () {
    $('.feedback__slide').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
    });
  });