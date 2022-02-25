var nav = document.getElementById("navbar");
var links = nav.getElementsByClassName("link");
var Home = document.getElementById("Home");
var Service = document.getElementById("Service");
var Portfolio = document.getElementById("Portfolio");
var About = document.getElementById("About");
var Contact = document.getElementById("Contact");
var mybutton = document.getElementById("myBtn");
var list = document.getElementById("list");
/////////////////////////////////////////////////////////////////
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseenter", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
function leave() {
    Home.classList.add('active')
    Service.classList.remove('active')
    Portfolio.classList.remove('active')
    About.classList.remove('active')
    Contact.classList.remove('active')
}
//////////////////////////////////////////////////////////////////////
window.onscroll = function () {
    if (window.scrollY >= 100) {
        mybutton.style.right = '1%'
    } else{
        mybutton.style.right = '-20%'
        Home.classList.add('active')
        Service.classList.remove('active')
        Portfolio.classList.remove('active')
        About.classList.remove('active')
        Contact.classList.remove('active')
    }
}
function toTop() {
    window.scrollTo({
        top:0,
        behavior:'smooth',
    })
    Home.classList.add('active')
    Service.classList.remove('active')
    Portfolio.classList.remove('active')
    About.classList.remove('active')
    Contact.classList.remove('active')
}
////////////////////////////////////////////////////////////////////////
function zoomIn(x) {
    x.style.cssText=`transform: scale(1.1);`
}
function zoomOut(x) {
    x.style.cssText=`transform: scale(1);`
}
/////////////////////////////////////////////////////////////////////////
var x = window.matchMedia("(max-width: 767px)")
if (x.matches) {
    list.style.display = "none";
}
function mobile() {
    var x = window.matchMedia("(max-width: 767px)")
    if (x.matches) {
        if (list.style.display == "none") {
            list.style.display = "flex";
        } else {
            list.style.display = "none";
        }
      } 
  }
function clickLink() {
    var x = window.matchMedia("(max-width: 767px)")
    if (x.matches) {
        list.style.display = "none";
      } 
    
}
function resize() {
    var w = window.outerWidth
    if (w > 767) {
        list.style.display = "flex";
    }
        var x = window.matchMedia("(max-width: 767px)")
    if (x.matches) {
        list.style.display = "none";
      } 
}
/////////////////////////////////////////////////////////////////////////