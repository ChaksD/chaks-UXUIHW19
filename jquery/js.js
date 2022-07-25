
// for button animation

$(document).ready(function(){
    $("button").click (function() {
        $ ("button").animate({height:'100px',marginLeft:'50px', opacity: "0.2"});
        alert("Thank you");
    });
});
