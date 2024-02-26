console.log("main.js");

var listDroplets = document.getElementsByClassName("home-droplets__item");
let listsLink = document.querySelectorAll(".c-menu__link");

//hamburger menu
$(document).ready(function () {
    "use strict";
    $(".c-hamburger").click(function (e) {
        $("body").toggleClass("isShow-hamburger");
        e.preventDefault();
        $(this).toggleClass('active');
        $(".c-menu__list").toggleClass("opened");
    });

})

let linkList = document.querySelectorAll('.c-menu__link');
linkList.forEach(item =>{
  item.addEventListener('click',function(){
    $("body").removeClass("isShow-hamburger");
    $(".c-hamburger").removeClass('active');
    document.querySelector('.c-menu__list').classList.remove('opened');
  })
})

//box more
$(document).ready(function(){
	$(".c-btnmore").click(function(){
        $(".home-point__botsquare").removeClass("is-show");
		$(this).closest(".home-point__botsquare").addClass("is-show");
	});
});

//collapse column
var coll = document.getElementsByClassName("home-column__collapse");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.previousElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//animation
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        $(".c-leafTop").addClass("translateTop");
        $(".c-leafRight").addClass("translateRight");
        $(".c-leafRightSP").addClass("translateRight");

        for (let item of listDroplets) {
            item.classList.remove("dropletsMove");
            item.classList.add("dropletsFadeOut");
        }
    } 
    else 
    {
        $(".c-leafTop").removeClass("translateTop");
        $(".c-leafRight").removeClass("translateRight");
        $(".c-leafRightSP").removeClass("translateRight");
        for (let item of listDroplets) {
            item.classList.remove("dropletsFadeOut", "dropletsMove");
            item.classList.add("dropletsFadeIn");
            setTimeout(() => {
                item.classList.remove("dropletsFadeIn");
                item.classList.add("dropletsMove");
            }, 1000);
        }

    }
}

