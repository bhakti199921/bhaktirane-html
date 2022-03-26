$(document).ready(function () {
    $('#fullpage').fullpage({
        //options here
        // anchors:['slide1', 'slide2', 'slide3','slide4'],
        autoScrolling: true,
        // scrollHorizontally: true,
        navigation: true,
        // scrollBar:true,
        // continuousVertical: true
        navigationTooltips:['Header','About','Ourvalues','Programs','Footer']

    });

    //

    $('.ourpartners__link-list-wrapper').slick({
    // dots: true,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [{
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       dots: true
    //     },
    //   },
    //   {
    //     breakpoint: 1199,
    //     settings: {
    //       dots: true,
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       dots: true,
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       dots: true,
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
        breakpoint: 575,
        settings: {
          // dots: true,
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 359,
        settings: {
          // dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

});
