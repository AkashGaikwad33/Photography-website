const myslide = document.querySelectorAll(".myslide"),
  dot = document.querySelectorAll(".dot");
let counter = 1;
slidefun(counter);
let timer = setInterval(autoSlide, 8000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}
function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}

//  button1(wedding)
function myfunction() {
  window.location = "wedding.html";
}

//  button1(pre-wedding)
function myfunction2() {
  window.location = "pre-wedding.html";
}
//  button3(pre-wedding)
function myfunction3() {
  window.location = "destination.html";
}
//  button4(pre-wedding)
function myfunction4() {
  window.location = "product.html";
}

// gallery 2

let images = document.querySelectorAll(".gallery2 img");

let popup = document.querySelector(".popup");
let popupimg = document.querySelector(".popup img");

for (img of images) {
  img.onclick = function () {
    popup.style.display = "block";
    popupimg.src = this.getAttribute("src");
  };
}
document.querySelector(".popup span").onclick = function () {
  popup.style.display = "none";
};
