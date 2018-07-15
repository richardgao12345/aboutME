// //just testing this out
$(document).ready(function(){
    $('.port').mouseenter( function(){
        $(this).animate({
           width: "200%",
           height: "200%"
        }, 'fast');
        $('person').animate({
            width: "50%",
            height: "50%"
         }, 'slow');
        $('prayer').animate({
            width: "50%",
            height: "50%"
        }, 'slow');
    });
    $('.port').mouseleave( function(){
        console.log("leaving")
        $(this).animate({
           width: "100%",
           height: "100%"
        }, 'fast');
    });

});
// $(document).ready(function(){
//     $('.port').hover( function(){
//         $(this).parent().css("grid-template-columns", "400px 100px");
//         $(this).parent().css("grid-template-rows", "400px 100px 100px 100px 100px 100px");
//         }, function(){
//         $(this).parent().css("grid-template-columns", "250px 250px");
//         $(this).parent().css("grid-template-rows", "225px 225px 225px 200px 200px 200px");
//     });

// });