//active navbar
let nav=document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("Scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}



//nav hide
let navBar=document.querySelectorAll('.nav-link');
let navCollapse=document.querySelector('.navbar-collaps.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})
 

// document.getElementById('button').addEventListener('click',
//   function(){
//     document.querySelecter('.bg-modal').style.display="flex"
//   });

//   documentquerySelecter('.close').addEventListener('click',
//   function(){
//     document.querySelector('.bg-modal').style.display="none";
//   });


jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
  });

  
  