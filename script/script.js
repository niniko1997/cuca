$(document).ready(function() {
 
    setTimeout(function(){
        $('body').toggleClass('loaded');
    }, 3000);
 
});

function toggle_navbar() {
    var x = document.getElementById("header_wrapper");
    if (x.className === "header_wrapper") {
        x.className += " responsive";
    } else {
        x.className = "header_wrapper";
    }
    var x = document.getElementById("mobile-navigation");
    if (x.className === "") {
        x.className += " responsive";
    } else {
        x.className = "";
    }
    var x = document.getElementById("header");
    if (x.className === "") {
        x.className += " responsive";
    } else {
        x.className = "";
    }
}