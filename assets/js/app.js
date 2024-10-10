const navmenu = () => {
  document.getElementById("mobile_view").classList.toggle("max-lg:top-0");
  document.getElementById("mobile_view").classList.toggle("max-lg:left-0");
  document.getElementById("nav_line_1").classList.toggle("rotate-45");
  document.getElementById("nav_line_2").classList.toggle("-rotate-45");
  document.getElementById("nav_line_out_side").classList.toggle("opacity-0");
  document.body.classList.toggle("overflow-hidden");
};
// =========footer slider============
    $(document).ready(function(){
        $('.slider').slick({
            slidesToShow: 7.999,
            slidesToScroll: 8,
            infinite: true,
            arrows: true,
            prevArrow: "<button type='button' class='slick-prev'> < </button>",
            nextArrow: "<button type='button' class='slick-next'> > </button>",
            dots: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    });

// ======slider=======Businesses generate more revenue with Main Campaign======== 
  $(document).ready(function(){
    $('.slider-container').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });


