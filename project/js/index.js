// slider
const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.hero__swiper-pagination',
      type: 'bullets',
      clickable: 'true'
    }
  });

// accordion
  $( function() {
    $( "#accordion" ).accordion({
    icons: 'false',
    heightStyle: "content",
    collapsible: 'true',
    active: 'false'
    });
  } );

// tab
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how__menu-item').forEach(function(HowMenuItem) {
    HowMenuItem.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how__content').forEach(function(howContent){
        howContent.classList.remove('how__content-active')
      })
      document.querySelector(`[data-target="${path}"`).classList.add('how__content-active')

      document.querySelectorAll('.how__menu-item').forEach(function(btn){
        
        btn.classList.remove('how__item--active')});
        event.currentTarget.classList.add('how__item--active');
    })
  })
})

// burger
document.querySelector('.burger-menu__icon').addEventListener("click", function(){

  document.querySelector('.burger-menu__content').classList.add('burger-menu__active');
})
document.querySelector('.burger-menu__btn').addEventListener('click', function(){
  
  document.querySelector('.burger-menu__content').classList.remove('burger-menu__active');
})

// search
document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".header__search");
  let btn = document.querySelector(".heaer__nav-btn");
  let close = document.querySelector(".close-btn")
  
  if (target.closest(".heaer__nav-btn")) {
    form.classList.add("form__active");
    btn.classList.add("active");
  }
  if (target.closest(".close-btn")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    btn.classList.remove("active");
  }
  if (!target.closest(".header__search") && !target.closest(".heaer__nav-btn")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    btn.classList.remove("active");
  }
})