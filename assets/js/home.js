$(window).on("load", function () {
    setTimeout(triggerAnimations, 1500);
    function triggerAnimations() {
        $("[animate]").addClass("active");
        console.log("Animation trigered")
    }
});

// Show social network icons on hover

$(".profile-container").hover( function () {
    $(".social-profiles, .profile-container, .profile-image").toggleClass("active");
}, function () {
    // When hover is over
    $(".social-profiles, .profile-container, .profile-image").toggleClass("active");
});