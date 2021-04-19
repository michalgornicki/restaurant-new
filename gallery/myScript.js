window.onload = function() {
  linkToIcon();
  document.getElementsByClassName("content")[0].style.filter="brightness(1)";
  document.getElementById("navbar").style.filter="opacity(1)";
  document.getElementsByClassName("gallery")[0].style.filter="opacity(1)";
  document.getElementsByClassName("gallery")[1].style.filter="opacity(1)";
  document.getElementById("navbar").style.transitionDelay="0s";
  document.getElementsByClassName("gallery")[0].style.transitionDelay="0s";
  document.getElementsByClassName("gallery")[1].style.transitionDelay="0s";
  document.getElementById("home-nav").style.transitionDelay="0s";
  document.getElementById("gallery-nav").style.transitionDelay="0s";
  document.getElementById("contact-nav").style.transitionDelay="0s";
}

function openMenu() {
  document.getElementById("navbar").style.left="0px";
  document.getElementById("navbar").style.visibility="visible";
  document.getElementById("burger-button").style.filter="opacity(0.0)";
  document.getElementById("close-button").style.filter="opacity(1)";
}

function closeMenu() {
  document.getElementById("navbar").style.left="-100%";
  document.getElementById("navbar").style.visibility="hidden";
  document.getElementById("burger-button").style.filter="opacity(1)";
  document.getElementById("close-button").style.filter="opacity(0)";
}


function changeBackground() {
  if (document.body.scrollTop > 850 && document.body.scrollTop < 2699 || document.documentElement.scrollTop > 850 && document.documentElement.scrollTop < 2699){
  document.getElementById("navbar").style.top="-200px";
  document.getElementById("navbar").style.transitionDelay="1.2s";
  document.getElementsByClassName("gallery")[0].style.filter="opacity(0)";
  document.getElementsByClassName("gallery")[1].style.filter="opacity(0)";
  document.getElementsByClassName("gallery")[0].style.transitionDelay="0.7s";
  document.getElementsByClassName("gallery")[1].style.transitionDelay="0.7s";
  document.getElementById("home-nav").style.filter="opacity(0)";
  document.getElementById("gallery-nav").style.filter="opacity(0)";
  document.getElementById("contact-nav").style.filter="opacity(0)";
  document.getElementById("home-nav").style.transitionDelay="0.3s";
  document.getElementById("gallery-nav").style.transitionDelay="0.6s";
  document.getElementById("contact-nav").style.transitionDelay="0.9s";
}

else if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700){
document.getElementById("navbar").style.top="-150px";
document.getElementById("navbar").style.transitionDelay="1.2s";
document.getElementsByClassName("gallery")[0].style.filter="opacity(0)";
document.getElementsByClassName("gallery")[1].style.filter="opacity(0)";
document.getElementsByClassName("gallery")[0].style.transitionDelay="0.7s";
document.getElementsByClassName("gallery")[1].style.transitionDelay="0.7s";
document.getElementById("home-nav").style.filter="opacity(0)";
document.getElementById("gallery-nav").style.filter="opacity(0)";
document.getElementById("contact-nav").style.filter="opacity(0)";
document.getElementById("home-nav").style.transitionDelay="0.3s";
document.getElementById("gallery-nav").style.transitionDelay="0.6s";
document.getElementById("contact-nav").style.transitionDelay="0.9s";
}

  else {
    document.getElementById("navbar").style.top="0px";
    document.getElementById("navbar").style.transitionDelay="0s";
    document.getElementsByClassName("gallery")[0].style.filter="opacity(1)";
    document.getElementsByClassName("gallery")[1].style.filter="opacity(1)";
    document.getElementsByClassName("gallery")[0].style.transitionDelay="1.2s";
    document.getElementsByClassName("gallery")[1].style.transitionDelay="1.2s";
    document.getElementById("home-nav").style.filter="opacity(1)";
    document.getElementById("gallery-nav").style.filter="opacity(1)";
    document.getElementById("contact-nav").style.filter="opacity(1)";
    document.getElementById("home-nav").style.transitionDelay="0.6s";
    document.getElementById("gallery-nav").style.transitionDelay="0.9s";
    document.getElementById("contact-nav").style.transitionDelay="1.2s";
  }
}


window.onscroll = function() {
  changeBackground()
}

$('.single-item-slider').slick({
   arrows: false,
   autoplay: false,
   autoplaySpeed: 7000,
   speed: 800,
   pauseOnFocus: false,
   dots: false,
   fade: false,
   draggable: false,
});

$('.single-item-fade').slick({
   arrows: true,
   autoplay: true,
   autoplaySpeed: 3000,
   speed: 2000,
   pauseOnFocus: false,
   dots: true,
   slidesToShow: 1,
   fade: true,
});

$('.multi-item-slider').slick({
   arrows: true,
   autoplay: true,
   autoplaySpeed: 50,
   speed: 1000,
   pauseOnFocus: false,
   dots: true,
   slidesToShow: 1,
   fade: true,
});


$('.multi-item-slider-alter').slick({
   arrows: true,
   autoplay: true,
   autoplaySpeed: 0,
   speed: 1000,
   pauseOnFocus: false,
   dots: true,
   slidesToShow: 1,
   fade: true,
});


function zoomImage() {
  console.log(this.event.target)
  this.event.target.style.left="0%";
  this.event.target.style.transform="scale(1.4)";
  this.event.target.style.zIndex="10";
}

function closeZoomImage() {
  console.log(this.event.target)
  this.event.target.style.transform="scale(1)";
  this.event.target.style.zIndex="1";
}

function linkToIcon() {
  if (window.innerWidth < 1000) {
    document.getElementById("home-link").innerHTML =
      "<" +
      "img class=" +
      "navbar-icon" +
      " " +
      "src=" +
      "images/painting.png" +
      ">";
    document.getElementById("gallery-link").innerHTML =
      "<" +
      "img class=" +
      "navbar-icon" +
      " " +
      "src=" +
      "images/building.png" +
      ">";
    document.getElementById("contact-link").innerHTML =
      "<" +
      "img class=" +
      "navbar-icon" +
      " " +
      "src=" +
      "images/visit.png" +
      ">";
  } else {
    document.getElementById("home-link").innerHTML =
      "NOWE EKSPOZYCJE";
    document.getElementById("gallery-link").innerHTML =
      "GALERIA";
    document.getElementById("contact-link").innerHTML =
      "KONTAKT";
  }
}