//search
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  //progress bar

  $(document).ready(function () {
    let options = {
      startAngle: -1.55,
      size: 100,
      value: 0.34,
      fill: {
        gradient: ['#841E25', '#841E25']
      }
    }
    $(".progressbar__circle .progressbar__bar").circleProgress(options).on('circle-animation-progress',
      function (event, progress, stepValue) {
        $(this).parent().find(".progressbar__percentage").text(String(stepValue.toFixed(2).substr(2)) + "%");
      });
    $(".js .progressbar__bar").circleProgress({
      value: 0.74,
      fill: {
        gradient: ['#70CE88', '#70CE88']
      }
    });
    $(".react .progressbar__bar").circleProgress({
      value: 0.44,
      fill: {
        gradient: ['#FFBA49', '#FFBA49']
      }
    });

    //slick slider
    $('.testimonial__items').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              dots: true
            },
          },
          {
            breakpoint: 769,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 575,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 359,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });


      //next prev slick slider
      $('.schoolsection__schools').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow:'<div class="schoolsection__leftarrow"><span class="icon-icon-arrow-left"></span></div>',
        nextArrow:'<div class="schoolsection__rightarrow"><span class="icon-icon-arrow-right"></span></div>',

        responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 359,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      });
  });
