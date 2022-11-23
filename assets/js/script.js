
// Feature Color Palette
const colorPallete = document.querySelector('.colorPallete')
// const paintHandler = colorPallete.querySelector('.paintHandler')

function showHidePaintHandler() {
  colorPallete.classList.toggle('active');
}

function flatPalette() {
  $('.custom-btn').removeClass('custom-btn').addClass('custom-flat__btn');
  $('.custom-btn__reversed').removeClass('custom-btn__reversed').addClass('custom-flat__btn__reversed');
  $('.text-blue').removeClass('text-blue').addClass('text-flat__darkViolet');
  $('.text-yellow').removeClass('text-yellow').addClass('text-flat__yellow');
  $('.border-yellow').removeClass('text-blue').addClass('border-flat__darkViolet');
}

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
  asNavFor: '.thumbnail',
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false
      }
    }
  ]
});
$('.thumbnail').slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  asNavFor: '.main-slide',
  centerPadding: '60px',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        centerMode: false,
        focusOnSelect: false,
        slidesToShow: 3,
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