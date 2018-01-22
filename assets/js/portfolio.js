$(window).on("load", function () {
    setTimeout(triggerAnimations, 1500);
    setTimeout(trigerProjectsAnimations, 2500);
    function triggerAnimations() {
        $("[animate]").addClass("active");
        console.log("Animation trigered")
    }
    function trigerProjectsAnimations() {
        $("[animate-delay]").each(function (i) {
            var $this = $(this);
            setTimeout(function () {
                $this.addClass("active");
            }, i * 300);
        })


    }
});

//Enable swiping...
$(".text-wrap").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
        $(".read").removeClass("read");
        $(this).addClass("read");
        // if(direction == "left"){
        // } else{
        //     $(this).removeClass("read");
        // }
    },
    swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
        $(this).removeClass("read");
        // if(direction == "left"){
        // } else{
        //     $(this).removeClass("read");
        // }
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold:0
});