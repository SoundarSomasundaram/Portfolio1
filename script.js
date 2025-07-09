/* for locmotive js steps

1) add loco js code from git hub (without any import) one for smooth
2) get locomotive js cdn from loco min as a url and add to script tag
3) get loco.css code from github and link it to stylesheet
4)if you need add some scroll-elements by gpt

*/

document.addEventListener("DOMContentLoaded", () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
});


//translate() is a CSS transform function to move an element on X and Y axes.
// element.addEventListener(eventType, callbackFunction);

function mousefollower (){
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#minimouse").style.transform =`translate(${dets.clientX}px,${dets.clientY}px)`;
    })
}

mousefollower();

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#minimouse").style.transform =
      `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

window.addEventListener("DOMContentLoaded", function () {
  circleMouseFollower(1, 1); // Start the follower
});




document.querySelectorAll(".elem1").forEach(function (elem1){
  var rotate=0;
var diffrot =0;
elem1.addEventListener("mousemove",function(details){
var diff = (details.clientY-elem1.getBoundingClientRect().top);
// to rotate we have to find the place where the mouse is mving

 diffrot = details.clientX-rotate;
rotate=details.clientX;
  gsap.to(elem1.querySelector("img"),{
  opacity:1,
  ease: Power3,
  // for top we have to findthe difference bet clienty and that div
  top:diff,
  left: details.clientX,
  rotate:gsap.utils.clamp(-20,20,diffrot * 0.5),
}); 
});
});

document.querySelectorAll(".elem1").forEach(function (elem1){
  var rotate=0;
var diffrot =0;
elem1.addEventListener("mouseleave",function(details){

  gsap.to(elem1.querySelector("img"),{
  opacity:0,
  ease: Power3,

  // for top we have to findthe difference bet clienty and that div

}); 
});
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.from("#head h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1, // 1 second delay after page load
    ease: "power3.out",
  });

  gsap.from("#head .desg", {
    opacity: 0,
    y: 50,
    duration: 0.3,
    delay: 0.32,
    ease: "power3.out",
  });
});
gsap.from("#nav", {
  opacity: 0,
  y: -30,
  duration: 0.3,
  delay: 0.32,
  ease: "power3.out",
});

window.addEventListener("DOMContentLoaded", () => {
  // Split text into lines for animation
  const split = new SplitType("#head h1", {
    types: "lines",
    lineClass: "line"
  });

  gsap.set(".line", {
    yPercent: 100
  });

  gsap.to(".line", {
    yPercent: 0,
    stagger: 0.06,
    ease: "power4.out",
    duration: 1
  });
});
