$(window).on("load", function () {
    setTimeout(triggerAnimations, 1500);
    function triggerAnimations() {
        $("[animate]").addClass("active");
        console.log("Animation trigered")
    }
});