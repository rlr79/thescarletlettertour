$(function () {
  function sumSection() {
    return $(".container").height();
  }
  function setDimensionBar() {
    $(".bar").css({
      "height": $(window).height() / sumSection() * 100 + "%" });

  }
  function setSection() {
    $.each($("section"), function (i, element) {
      $(element).css({
        "min-height": $(window).height() });

    });
  }

  function addBehaviours() {
    let sections = $("section");
    $.each($(".node"), function (i, element) {
      $(element).on("click", function (e) {
        e.preventDefault();
        let scroll = $(sections[i]).offset().top;
        $('html, body').animate({
          scrollTop: scroll },
        500);
      });
    });
  }

  function arrangeNodes() {
    $(".node").remove();
    $.each($("section"), function (i, element) {
      let name = $(element).data("name");
      let node = $("<li class='node'><span>" + name + "</span></li>");
      $(".timeline").append(node);

      $(node).css({
        "top": $(".timeline").height() / $(document).height() * $(element).offset().top });

    });
    addBehaviours();
  }

  $(window).on("scroll", function () {
    let top = window.scrollY / sumSection() * 100;
    $(".bar").css({
      "top": top + "%" });


  });

  $(window).on("resize", function () {
    setSection();
    arrangeNodes();
    setDimensionBar();
  });

  setTimeout(
  function () {
    setSection();
    arrangeNodes();
    setDimensionBar();
  },
  200);

});




/*
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/


var total = 15;
var warp = document.getElementById("fallingRoses"),	w = window.innerWidth , h = "675vw";
 
 for (i=0; i<total; i++){ 
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
   warp.appendChild(Div);
   animm(Div);
 }
 
 function animm(elm){   
   TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};
