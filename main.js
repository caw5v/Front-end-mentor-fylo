// $("main").css("background", "red");
// document.querySelector("main").style.background = "red";

// let viewPortSize = window.innerHeight;
// window.addEventListener("touchmove", () => {
//   if (viewPortSize > 667) {
//     console.log("it changed");
//   }
// });

// $(window).
// if (viewPortSize > 667) {
//   document.querySelector("main").style.background = "red";
// }

window.addEventListener("resize", () => {
  document
    .querySelector(":root")
    .style.setProperty("--vh", window.innerHeight / 100 + "px");
});
