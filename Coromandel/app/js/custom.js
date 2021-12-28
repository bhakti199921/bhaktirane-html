//search
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  $(document).ready(function(){

    $('.multiple-items').slick({
      autoplay:true,
      autoplaySpeed: 1000,
      speed: 1000,
      dots:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
    });
  });