let button = document.querySelector(".DateNTime_Checker");
let date = new Date();
let burger = document.querySelector(".burger-menu");
let header_list = document.querySelector(".header-list");
let others = document.querySelector(".others");
let music_book = document.getElementById("music_book");
burger.addEventListener("click", function(){
  burger.classList.toggle("active");
  header_list.classList.toggle("active");
});

button.addEventListener("click", function(){
    alert(date)
})

others.addEventListener("click", function(){
  if (music_book.style.display == "block") {  
    music_book.style.display = "none";
  } else {
    music_book.style.display = "block";
  }
})

$('.carousel').slick({
  centerMode: true,
  centerPadding: '60px',
  prevArrow: '<img src="images/Arrow_left.svg">',
  nextArrow: '<img src="images/Arrow_right.svg">',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


