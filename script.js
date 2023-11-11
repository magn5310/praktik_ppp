const section1 = document.querySelector(".sec1");
const section2 = document.querySelector(".sec2");
const section3 = document.querySelector(".sec3");
const section4 = document.querySelector(".sec4");

window.addEventListener("load", aktiver);
function aktiver() {
  document.querySelector("h1").classList.add("aktiv");
  document.querySelector(".linavn").classList.add("aktiv");
  document.querySelector(".liaar").classList.add("aktiv");
}
window.addEventListener("scroll", reveal);
function reveal() {
  let reveals = document.querySelectorAll(".secani1");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 5;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("toright");
    }
  }
}
reveal();
window.addEventListener("scroll", reveal2);
function reveal2() {
  let reveals = document.querySelectorAll(".secani2");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 5;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("toleft");
    }
  }
}
reveal2();

window.addEventListener("scroll", reveal3);
function reveal3() {
  let reveals = document.querySelectorAll(".footerani");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 5;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("totop");
    }
  }
}
reveal3();

const cls = document.querySelector(".cls-2");
const cls3 = document.querySelector(".cls-3");
const rect = document.querySelectorAll("#rect");
const path = document.querySelectorAll("#path");

cls.addEventListener("animationend", () => {
  rect.forEach((element) => {
    element.classList.add("fillani");
  });
});
cls.addEventListener("animationend", () => {
  path.forEach((element) => {
    element.classList.add("fillani");
  });
});
cls3.addEventListener("animationend", () => {
  rect.forEach((element) => {
    element.classList.add("fillani");
  });
});
cls3.addEventListener("animationend", () => {
  path.forEach((element) => {
    element.classList.add("fillani");
  });
});
