
var slideIndex = 1;
 var slides = document.querySelectorAll(".mySlides");
 for (i = 1; i < slides.length; i++) {
    slides[i].style.display = "none";
}


var back=document.querySelector(".back");
var next=document.querySelector(".next");
function plusSlides(n) {
    slideIndex+=n;
    showSlides();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    var i;
   
   
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    if (slideIndex < 1) {
        slideIndex = slides.length
    }


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    if(slides[slideIndex - 1] != undefined)
    {
      back.style.pointerEvents="none";
      next.style.pointerEvents="none";
      setTimeout(() => {
        back.style.pointerEvents="all";
        next.style.pointerEvents="all";
      }, 2000);
     
        slides[slideIndex - 1].style.display = "block";
        var txt =   slides[slideIndex - 1].querySelector(".text");
        var img =   slides[slideIndex - 1].querySelector(".imghero");
        gsap.fromTo(img,3, {opacity:0},{opacity:1});
        gsap.from(txt,1, {left:window.innerWidth,delay:1, ease: "back.out(1.5)",},{left:0, delay:1,ease: "back.out(1.5)"});
    }
    
   
}
//currentSlide(1);



var mouseMove=document.getElementById("mouseMove");
function move(event) {
  mouseMove.style.left=event.pageX-15+"px";
  mouseMove.style.top=event.pageY-15+"px";
//   gsap(mouseMove,1,{left:30,delay:1});
}
var big = document.querySelectorAll("a, button");
big.forEach(value => {
    value.addEventListener("mouseover", (e) =>{
        mouseMove.style.transform="scale(2.3)";
    }
    );
    value.addEventListener("mouseout", (e) =>{
        mouseMove.style.transform="scale(1)";
    }
        
    );
});
var business=document.querySelectorAll(".business");
business.forEach(value => {
    value.addEventListener("mouseover", (e)=> {
        mouseMove.style.transform="scale(2.3)";
    });
    value.addEventListener("mouseout", (e)=> {
        mouseMove.style.transform="scale(1)";
    });
})

var text;

var _name= document.getElementById("_name");
var email= document.getElementById("email");
var message= document.getElementById("message");
var msg = document.getElementById("empty");  


function validateForm() {

        if (_name.value==""){
            text="Name is Empty, Please Enter Name";
            msg.innerHTML =text;
            return;
        }
        
        if (email.value==""){
            text="Email is Empty, Please Enter Email";
            msg.innerHTML =text;
            return;
        }

        if (message.value==""){
            text="Message is Empty, Please Enter Message";
            msg.innerHTML =text;
            return;
        }

        
      
   
        
   
}
function validateEmail(sEmail) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  
    if(!sEmail.match(reEmail)) {
        text="Invalid email address";
            msg.innerHTML =text;
      return false;
    }
    msg.innerHTML ="";
    return true;
    
  }
  function pageLoadedHandler(){
      var cover =document.querySelector(".cover");
    
      setTimeout(() => {
            cover.classList.add("uncover");
            setTimeout(() => {
                cover.style.display="none"; 
            }, 600);
      }, 1000);
    }
  window.onload = pageLoadedHandler;
/* var h1 = document.querySelector("h1");
h1.classList.add("off-screen");
h1.classList.remove("off-screen"); */
//gsap.to(".text",2, {left:0, ease: "back.out(1.5)",});


        // if (obj.name=="" && obj.email=="" && obj.message=="")
        // document.getElementById("empty").innerHTML = Object.entries(obj).map(value => {
        //     return value[0];
        // })+ " is empty, please enter "+Object.entries(obj).map(value => {
        //     return value[0];
        // });



// scroll

var scrollIndicator=document.getElementById("scroll");
// window.onscroll = function(e) {
//     // log the length scrolled vertically
//     console.log(window.pageYOffset);
//  }
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    scrollIndicator.style.transform = "scaleY("+(scroll/document.body.clientHeight)+")";
});

// var a = element.scrollTop;
// var b = element.scrollHeight - element.clientHeight;
// var c = a / b;
// console.log(c);
// set scroll position in px


 
