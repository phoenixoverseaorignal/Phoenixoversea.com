var owl = $('.testimonial_owlCarousel').owlCarousel({
  loop:true,
  margin:10,
  dots:false,
  nav:true,
  autoplay:true,   
  // smartSpeed: 10000, 
  autoplayTimeout:11000,
  autoplayHoverPause:true,
  singleItem: true,
  video: true,
  responsive:{
    0:{
      items:1
    },
	100:{
      items:1
    },
	200:{
      items:1
    },
	300:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:3
    }
  }
});
owl.on('changed.owl.carousel', function(event) {
  if( $(".owl-item.active video", this.$element)[0]){
    $(".owl-item.active video", this.$element)[0].play();
  }
})
