

$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      // items: 5,
      margin: 10,
      loop: true,
      responsive:{
        0:{
          items:1
        },
         576:{
          items:2
         },
        768:{
          items:3
        },
        1180:{
          items:5
        }
      }
    });
  });

 
  