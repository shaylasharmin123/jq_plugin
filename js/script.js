

// jquery
$(function(){

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

});


// jquery
$(function(){


  var mixer = mixitup('#hello', {
    
    animation: {
        duration: 300
    }
});

});


// js
// wow = new WOW(
//   {
//   boxClass:     'wow',      // default
//   animateClass: 'animated', // default
//   mobile:       true,       // default
//   live:         true        // default
// }
// )
// wow.init();

wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();


// jquery
// $(function(){

 // aos
AOS.init({

  offset: 100, 
  delay: 50,
  duration: 500, 
  easing: 'linear'

}); 

// });
