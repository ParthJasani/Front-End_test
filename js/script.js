var moveSlider = false;
$(document).ready(function(){
    $(".before-after-main-wrap .slider").mousedown(function(){
        moveSlider = true;
    });
    $(".before-after-main-wrap .slider").mouseup(function(){
        moveSlider = false;
    });


    $(".before-after-main-wrap").mousemove(function(e){
        if(moveSlider == true){
            var pOffset = $(this).offset(); 
            var mouseX = e.pageX - pOffset.left;
            $(this).children("#before").width(mouseX - 0.5);
        }
    });
});