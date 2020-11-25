(function($){
    /* Store the original positions */
    var d1 = $('.one');
    var d1orgtop = d1.position().top;
    var d2 = $('.two');
    var d2orgtop = d2.position().top;
    var d3 = $('.three');
    var d3orgtop = d3.position().top;
    var d4 = $('.four');
    var d4orgtop = d4.position().top;

    /* respond to the scroll event */
    $(window).scroll(function(){
        /* get the current scroll position */
        var st = $(window).scrollTop();

        /* change classes based on section positions */
        if (st >= d1orgtop) {
            d1.addClass('latched');
        } else {
            d1.removeClass('latched');
        }
        if (st >= d2orgtop) {
            d2.addClass('latched');
        } else {
            d2.removeClass('latched');
        }
        // if (st >= d3orgtop) {
        //     d3.addClass('latched');
        // } else {
        //     d3.removeClass('latched');
        // }
        // if (st >= d4orgtop) {
        //     d4.addClass('latched');
        // } else {
        //     d4.removeClass('latched');
        // }
    });

})(window.jQuery);

myFunction();

function myFunction() {
setTimeout(function(){   document.querySelector(".one").classList.add("one-one");}, 5000);
// setTimeout(function(){   document.querySelector(".overlay").style.opacity="0"}, 6000);
setTimeout(function(){   document.querySelector(".one__text-h1").innerHTML="Visit us"}, 6000);
setTimeout(function(){   document.querySelector(".one__text-h3").innerHTML="69 Brock Street, Kingston, ON K7L 1R8"}, 6000);

setTimeout(function(){ document.querySelector(".one__text-h1").style.opacity="0"}, 5000);
setTimeout(function(){ document.querySelector(".one__text-h1").style.opacity="1"}, 6000);
setTimeout(function(){ document.querySelector(".one__text-h3").style.opacity="0"}, 5000);
setTimeout(function(){ document.querySelector(".one__text-h3").style.opacity="1"}, 6000);

setTimeout(function(){ document.querySelector(".one__text").classList.add("bx")}, 5000);


setTimeout(function(){  document.querySelector(".one").style.backgroundImage = "url(img/main-2.png)";}, 6000);
setTimeout(function(){   document.querySelector(".one").classList.remove("one-one");}, 8100);
setTimeout(function(){   document.querySelector(".one").classList.add("one-one");}, 9200);
setTimeout(function(){ document.querySelector(".one__text").style.left="-8%"}, 10200);

setTimeout(function(){ document.querySelector(".one__text-h1").style.opacity="0"}, 9200);
setTimeout(function(){ document.querySelector(".one__text-h1").style.opacity="1"}, 10200);
setTimeout(function(){ document.querySelector(".one__text-h3").style.opacity="0"}, 9200);
setTimeout(function(){ document.querySelector(".one__text-h3").style.opacity="1"}, 10200);
setTimeout(function(){   document.querySelector(".one__text-h1").innerHTML="Contact us"}, 10200);
setTimeout(function(){   document.querySelector(".one__text-h3").innerHTML="text us"}, 10200);
setTimeout(function(){ document.querySelector(".one__text").classList.remove("bx")}, 10200);
setTimeout(function(){  document.querySelector(".one").style.backgroundImage = "url(img/main-3.png)";}, 10200);
  setTimeout(function(){   document.querySelector(".one").classList.remove("one-one");}, 13100);
setTimeout(function(){   document.querySelector(".one").classList.add("one-one");}, 15200);
setTimeout(function(){   document.querySelector(".overlay").style.opacity="1"}, 17200);
setTimeout(function(){  document.querySelector(".one").style.backgroundImage = "url(img/main.png)";}, 17200);

setTimeout(function(){ document.querySelector(".one__text").style.left="30%"}, 17200);


  setTimeout(function(){ document.querySelector(".one__text-h1").style.opacity="0"}, 16200);
  setTimeout(function(){ document.querySelector(".one__text-h1").style.opacity="1"}, 17200);
  setTimeout(function(){ document.querySelector(".one__text-h3").style.opacity="0"}, 16200);
  setTimeout(function(){ document.querySelector(".one__text-h3").style.opacity="1"}, 17200);

  setTimeout(function(){   document.querySelector(".one__text-h1").innerHTML="Discover Us"}, 17200);
  setTimeout(function(){   document.querySelector(".one__text-h3").innerHTML="change your life"}, 17200);


setTimeout(function(){myFunction();}, 19200);
}


document.addEventListener("wheel", myFunction2);


function myFunction2() {
document.querySelector(".navbar").style.visibility ="visible";
document.querySelector(".navbar").style.opacity ="1";

}



// function myFunction3() {
//
// document.querySelector(".portfolio__1").classList.toggle("xsxs");
// document.querySelector(".two__about").classList.toggle("opacity-class");
// document.querySelector(".portfolio__overlay").classList.toggle("portfolio__overlay-after");
//
// document.querySelector(".portfolio__1-img").classList.toggle("portfolio__1-img-after");
//
// }



function myFunction4(){

  if (document.querySelector(".portfolio__1-img").src="img/dietery-2.png"){
document.querySelector(".portfolio__1-img").src="img/dietery-3.png"

  }
else{document.querySelector(".portfolio__1-img").src="img/dietery-2.png";}


}


document.querySelector(".inside1").addEventListener("click", function(){
  document.querySelector(".inside1").classList.add("inside1-a");

document.querySelector(".inside2").classList.add("small5");
document.querySelector(".inside3").classList.add("small6");
  setTimeout(function(){ document.querySelector(".float").classList.add("float2");},1000);
document.querySelector(".float").classList.remove("float3");
document.querySelector(".inside1").classList.remove("small3");
document.querySelector(".inside2").classList.remove("inside2-a");
setTimeout(function(){ document.querySelector(".float-port2").classList.remove("float-port2-vis");},500);

document.querySelector(".inside2").classList.remove("small4");
document.querySelector(".inside3").classList.remove("inside3-a");
setTimeout(function(){ document.querySelector(".float-port3").classList.remove("float-port3-vis");},500);
// setTimeout(function(){
// document.getElementById("im2").src="/img/food-4.png"},2900);
//
// setTimeout(function(){   document.getElementById("im2").classList.add("im2");}, 1900);
// setTimeout(function(){   document.getElementById("im2").classList.remove("im2");}, 3100);
// setTimeout(function(){   document.getElementById("im2").classList.add("one-two");}, 3200);

})




document.querySelector(".inside2").addEventListener("click", function(){
document.querySelector(".inside2").classList.remove("small");
document.querySelector(".inside3").classList.remove("small6");
document.querySelector(".inside2").classList.add("inside2-a");
document.querySelector(".inside1").classList.add("small3");
document.querySelector(".inside3").classList.add("small2");
document.querySelector(".float").classList.add("float3");
document.querySelector(".inside3").classList.remove("inside3-a");
document.querySelector(".inside1").classList.remove("inside1-a");
document.querySelector(".float").classList.remove("float2");
// document.querySelector(".float-port2").classList.add("float-port2-vis");
  setTimeout(function(){ document.querySelector(".float-port2").classList.add("float-port2-vis");},500);
document.querySelector(".inside2").classList.remove("small5");
setTimeout(function(){ document.querySelector(".float-port3").classList.remove("float-port3-vis");},500);
})



document.querySelector(".inside3").addEventListener("click", function(){
  setTimeout(function(){  document.querySelector(".float-port3").classList.add("float-port3-vis");},500);
  document.querySelector(".inside3").classList.remove("small6");
document.querySelector(".inside3").classList.remove("small2");
document.querySelector(".inside3").classList.add("inside3-a");
document.querySelector(".inside1").classList.add("small3");
document.querySelector(".inside2").classList.add("small5");
document.querySelector(".float").classList.add("float3");

document.querySelector(".inside1").classList.remove("inside1-a");
document.querySelector(".inside2").classList.remove("inside2-a");
document.querySelector(".float").classList.remove("float2");
// document.querySelector(".float-port2").classList.add("float-port2-vis");
  setTimeout(function(){ document.querySelector(".float-port2").classList.remove("float-port2-vis");},500);


})




// document.querySelector(".inside2").addEventListener("mouseover", function(){
//
//
// })
//  function myLeaveFunction() {
//   document.querySelector(".inside2").classList.remove("small");
//   document.querySelector(".inside3").classList.remove("small2");
//
//
// };
//
//  function myLeaveFunction2() {
//   document.querySelector(".float").classList.remove("float2");
// document.querySelector(".float-port2").classList.remove("float-port2-vis");
//
// };
//
//



document.querySelector(".antyspan1").addEventListener("mouseover", function(){

document.querySelector(".span1").classList.add("span-visible");
document.querySelector(".span2").classList.remove("span-visible");
document.querySelector(".span3").classList.remove("span-visible");
document.querySelector(".span4").classList.remove("span-visible");

});


document.querySelector(".antyspan2").addEventListener("mouseover", function(){

document.querySelector(".span2").classList.add("span-visible");
document.querySelector(".span1").classList.remove("span-visible");
document.querySelector(".span3").classList.remove("span-visible");
document.querySelector(".span4").classList.remove("span-visible");

});



document.querySelector(".antyspan3").addEventListener("mouseover", function(){

document.querySelector(".span3").classList.add("span-visible");
document.querySelector(".span2").classList.remove("span-visible");
document.querySelector(".span1").classList.remove("span-visible");
document.querySelector(".span4").classList.remove("span-visible");


});




document.querySelector(".antyspan4").addEventListener("mouseover", function(){

document.querySelector(".span4").classList.add("span-visible");
document.querySelector(".span2").classList.remove("span-visible");
document.querySelector(".span3").classList.remove("span-visible");
document.querySelector(".span1").classList.remove("span-visible");

});



document.querySelector(".antyspan5").addEventListener("mouseover", function(){

document.querySelector(".span5").classList.add("span-visible");
document.querySelector(".span6").classList.remove("span-visible");
document.querySelector(".span7").classList.remove("span-visible");
document.querySelector(".span8").classList.remove("span-visible");

});


document.querySelector(".antyspan6").addEventListener("mouseover", function(){

document.querySelector(".span6").classList.add("span-visible");
document.querySelector(".span5").classList.remove("span-visible");
document.querySelector(".span7").classList.remove("span-visible");
document.querySelector(".span8").classList.remove("span-visible");

});



document.querySelector(".antyspan7").addEventListener("mouseover", function(){

document.querySelector(".span7").classList.add("span-visible");
document.querySelector(".span5").classList.remove("span-visible");
document.querySelector(".span6").classList.remove("span-visible");
document.querySelector(".span8").classList.remove("span-visible");


});




document.querySelector(".antyspan8").addEventListener("mouseover", function(){

document.querySelector(".span8").classList.add("span-visible");
document.querySelector(".span5").classList.remove("span-visible");
document.querySelector(".span6").classList.remove("span-visible");
document.querySelector(".span7").classList.remove("span-visible");

});



document.querySelector(".antyspan9").addEventListener("mouseover", function(){

document.querySelector(".span9").classList.add("span-visible");
document.querySelector(".span10").classList.remove("span-visible");
document.querySelector(".span11").classList.remove("span-visible");
document.querySelector(".span12").classList.remove("span-visible");

});


document.querySelector(".antyspan10").addEventListener("mouseover", function(){

document.querySelector(".span10").classList.add("span-visible");
document.querySelector(".span9").classList.remove("span-visible");
document.querySelector(".span11").classList.remove("span-visible");
document.querySelector(".span12").classList.remove("span-visible");

});




document.querySelector(".antyspan11").addEventListener("mouseover", function(){

document.querySelector(".span11").classList.add("span-visible");
document.querySelector(".span10").classList.remove("span-visible");
document.querySelector(".span9").classList.remove("span-visible");
document.querySelector(".span12").classList.remove("span-visible");

});





document.querySelector(".antyspan12").addEventListener("mouseover", function(){

document.querySelector(".span12").classList.add("span-visible");
document.querySelector(".span11").classList.remove("span-visible");
document.querySelector(".span10").classList.remove("span-visible");
document.querySelector(".span9").classList.remove("span-visible");

});


 var sx = document.querySelector(".transparent");
var xs = sx.getBoundingClientRect();

 function isInViewPort(element){
const rect = element.getBoundingClientRect();
return(
rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)


      )  ; }


let trash2 = document.querySelector(".trash2");
let three2 = document.querySelector(".three__about2");
 document.addEventListener('scroll', function () {

if (isInViewPort(trash2)){document.querySelector(".form__group1").classList.remove("opacity-class");
 document.querySelector(".form__group1").classList.remove("opacity-class-fast");
 document.querySelector(".header-primary").classList.remove("opacity-class");
  document.querySelector(".header-primary").classList.remove("opacity-class-fast");

twoAbout.classList.add("opacity-class");

}});

//  document.addEventListener('scroll', function () {
// if(isInViewPort(three2)){document.querySelector(".form__group1").classList.add("opacity-class-visible")}});



 document.addEventListener('scroll', function () {

   if (isInViewPort(sx)) { sx.classList.add("transparent2");
   document.querySelector(".three__about").classList.add("three__about2");
document.querySelector(".three__about-text").classList.add("three__about2-text2");
   }
});



let twoAbout = document.querySelector(".two__about");
let twoAboutT = document.querySelector(".two__about-text");



document.addEventListener('scroll', function () {

  if (isInViewPort(document.querySelector(".text-menu"))) { twoAboutT.classList.remove("opacity-class");
 twoAbout.classList.remove("opacity-class");
 document.querySelector(".form__group1").classList.add("opacity-class-fast");
  document.querySelector(".header-primary").classList.add("opacity-class-fast");
  document.querySelector(".form-group2").classList.add("opacity-class-fast");
  document.querySelector(".txar").classList.add("opacity-class-fast");
  document.querySelector(".btn").classList.add("opacity-class-fast");
  }
});

let portfolio = document.querySelector(".portfolio");


document.addEventListener("scroll", function(){

if(isInViewPort(portfolio)) {
document.querySelector(".portfolio").classList.remove("opacity-class");
document.querySelector(".portfolio__1").classList.remove("opacity-class");
document.querySelector(".portfolio__2").classList.remove("opacity-class");
document.querySelector(".portfolio__3").classList.remove("opacity-class");
}

})


let threetop = document.querySelector(".three-main__top");

let threemiddle = document.querySelector(".three-main__top1");

threetop.addEventListener("click", function(){
  document.getElementById("ok2").classList.remove("opacity-class");
  document.getElementById("ok2").classList.remove("opacity-class-visible");


threetop.classList.add("opacity-class-visible");
threetop.classList.remove("opacity-class-mid-visible");

setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class");},100);

setTimeout(function(){ document.getElementById("ok2").src = "img/foodx-2.png";},1600);
setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class-visible");},1600);

// document.getElementById("ok2").classList.add("opacity-class-visible");

})




document.querySelector(".three-main__top2").addEventListener("click", function(){
document.getElementById("ok2").classList.remove("opacity-class");
document.getElementById("ok2").classList.remove("opacity-class-visible");

threetop.classList.add("opacity-class-visible");
threetop.classList.remove("opacity-class-mid-visible");

setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class");},100);

setTimeout(function(){ document.getElementById("ok2").src = "img/foodx-3.png";},1600);
setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class-visible");},1600);

// document.getElementById("ok2").classList.add("opacity-class-visible");

})



document.querySelector(".three-main__top3").addEventListener("click", function(){
document.getElementById("ok2").classList.remove("opacity-class");
document.getElementById("ok2").classList.remove("opacity-class-visible");

threetop.classList.add("opacity-class-visible");
threetop.classList.remove("opacity-class-mid-visible");

setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class");},100);

setTimeout(function(){ document.getElementById("ok2").src = "img/foodx-4.png";},1600);
setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class-visible");},1600);

// document.getElementById("ok2").classList.add("opacity-class-visible");

})


document.querySelector(".three-main__top4").addEventListener("click", function(){
document.getElementById("ok2").classList.remove("opacity-class");
document.getElementById("ok2").classList.remove("opacity-class-visible");

threetop.classList.add("opacity-class-visible");
threetop.classList.remove("opacity-class-mid-visible");

setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class");},100);

setTimeout(function(){ document.getElementById("ok2").src = "img/foodx-5.png";},1600);
setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class-visible");},1600);

// document.getElementById("ok2").classList.add("opacity-class-visible");

})




document.querySelector(".three-main__top5").addEventListener("click", function(){
document.getElementById("ok2").classList.remove("opacity-class");
document.getElementById("ok2").classList.remove("opacity-class-visible");

threetop.classList.add("opacity-class-visible");
threetop.classList.remove("opacity-class-mid-visible");

setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class");},100);

setTimeout(function(){ document.getElementById("ok2").src = "img/foodx-6.png";},1600);
setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class-visible");},1600);

// document.getElementById("ok2").classList.add("opacity-class-visible");

})



document.querySelector(".three-main__top6").addEventListener("click", function(){
document.getElementById("ok2").classList.remove("opacity-class");
document.getElementById("ok2").classList.remove("opacity-class-visible");

threetop.classList.add("opacity-class-visible");
threetop.classList.remove("opacity-class-mid-visible");

setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class");},100);

setTimeout(function(){ document.getElementById("ok2").src = "img/foodx-7.png";},1000);
setTimeout(function(){ document.getElementById("ok2").classList.add("opacity-class-visible");},1600);

// document.getElementById("ok2").classList.add("opacity-class-visible");

})



function myFunction5() {

document.querySelector(".form-group2").classList.remove("opacity-class");
document.querySelector(".form-group2").classList.remove("opacity-class-fast");



document.querySelector(".form__input").classList.remove("priority1");
}



function myFunction6() {

document.querySelector(".txar").classList.remove("opacity-class");
document.querySelector(".txar").classList.remove("opacity-class-fast");
document.querySelector(".fit").classList.remove("priority1");

}



function myFunction7() {

document.querySelector(".btn").classList.remove("opacity-class");
document.querySelector(".btn").classList.remove("opacity-class-fast");


}
