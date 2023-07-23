$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // scroll arrow

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    })
    

        // TYPING 
    var typed = new Typed(".typing",{
        strings :["Student","Developer","Designer","Team player"],
        backSpeed:60,
        typeSpeed:100,
        loop:true
    });
    var typed = new Typed(".typing2",{
        strings :["Student","Developer","Designer","Team player"],
        backSpeed:60,
        typeSpeed:100,
        loop:true
    });



    // toggle manu/navbar scriopt
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    

    // OWL CAROUSEL SCRIPT
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});
user = prompt("kindly enter your name");
if(user==null)`<H1>HELLO  WELCOME TO MY WEBSITE</H1>`;
document.getElementById('user').innerHTML=`<H3>HELLO ${user} WELCOME TO MY WEBSITE</H3>`;
  
let uname = document.getElementById("usub");
let uemail = document.getElementById("uemail");
let usub = document.getElementById("usub");
let udesc = document.getElementById("desc");
var body = 'name:'+uname+"<br/>" +'Email:'+ uemail+"<br/>" +'subject:'+usub+"<br/>" +'Desc:'+ udesc;
let join = "some one joined your portfolio";

function sendEmail(){
    
    alert("your details submitted thanks for visiting, please give feedback by clicking 'sendfeedback'")
}
