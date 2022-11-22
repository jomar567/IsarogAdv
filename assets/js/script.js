$(document).ready(function(){
  $('.destination-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false
          // dots: true
        }
      }
    ]
  });
  
  // Testimonial Carousel
  $('.main-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.thumbnail'
  });
  $('.thumbnail').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // autoplay: true,
    focusOnSelect: true,
    asNavFor: '.main-slide',
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          focusOnSelect: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});