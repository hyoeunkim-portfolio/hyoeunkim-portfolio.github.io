//main
const mainSlogans = document.querySelectorAll('.slogan_text')

mainSlogans.forEach( (mainSlogan, index) => { 
  gsap.to(mainSlogan, 1, {
    delay: index * 1,
    opacity: 1, 
    y: 30
  })
})



// Locomotive Scroll
const Locoscroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 0.5,
  firefoxMultiplier: 50
});



// nav - go to about, work, contact page
const anchors = document.querySelectorAll('.menu--anchor');
anchors.forEach((anchor) => {
  anchor.addEventListener('click', (e)=>{
    e.preventDefault();
    const target = e.target.hash;
    Locoscroll.scrollTo(target);
  }); 
});

window.addEventListener("load", function () {
  Locoscroll.update();
});

//jQuery version
// $('#navAbout').click(function(e) {
//   e.preventDefault()
//   $.scrollTo($('#secAbout'), 500) // section hash명 바꿔줘야 함.
// })
// $('#navWork').click(function(e) {
//   e.preventDefault()
//   $.scrollTo($('#secWork'), 500)
// })
// $('#navContact').click(function(e) {
//   e.preventDefault()
//   $.scrollTo($('#secContact'), 500)
// })



// scroll to top - .logo & .top_btn
const toTopBtn = document.querySelector('.top_btn')
toTopBtn.addEventListener('click', () => {
  Locoscroll.scrollTo(0)
}, false)

const toHomeBtn = document.querySelector('.header__left')
toHomeBtn.addEventListener('click', () => {
  Locoscroll.scrollTo(0)
}, false)

// jQuery version
// $('.header__left, .top_btn').click(function() {
//   $('body, html').animate({
//       scrollTop : 0
//   }, 500);
// });



// about - about__right
const scrollEls = document.querySelectorAll('.scroll_el')
scrollEls.forEach( (scrollEl) => {
  new ScrollMagic
  .Scene({
    triggerElement: scrollEl,
    triggerHook: 0.7
  })
  .setClassToggle(scrollEl, 'show')
  .addTo(new ScrollMagic.Controller)
})



// skills - gauge bar
// $(window).scroll(function() {
//   let hT = $('.skill-bar-wrapper').offset().top,
//       hH = $('.skill-bar-wrapper').outerHeight(),
//       wH = $(window).height(),
//       wS = $(this).scrollTop();
//   if (wS > (hT+hH-1.4*wH)){
//     jQuery(document).ready(function(){
//       jQuery('.skillbar-container').each(function(){
//         jQuery(this).find('.progress--value').animate({
//             width:jQuery(this).attr('data-percent')
//         }, 5000); // 5 seconds
//       })
//     })
//   }
// })



// work - web & etc category
$('.work_category li a').click(function(e) {
  e.preventDefault()
  $('.work_category li a').removeClass('work--active')
  $(this).addClass('work--active')

  $('.work_container').fadeOut(300)
  $(this.hash).delay(300).fadeIn()
})

// work - container
new Swiper('.work_container .swiper', {
  pagination: {
    el: ".work_container .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: '.work_container .swiper-button-prev',
    nextEl: '.work_container .swiper-button-next'
  }
})


// contact - 전화번호, 이메일 주소 복사






