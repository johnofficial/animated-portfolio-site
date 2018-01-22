$(window).on("load", function() {
    setTimeout(function () {
        $(".loader-container").css({
            'opacity' : '0',
            // 'display' : 'none'
        });
        setTimeout(function () {$(".loader-container").remove()}, 500);
    }, 1000);

});

$(function() {
	window.scrollBy(0, -1);
	mobileMenu();
	//scrollMenu();
	contactForm();
	changePageAnimation();
});

function changePageAnimation() {
	$("a[href]").not( "[target='_blank']" ).on("click", function (event) {
		event.preventDefault();
		var clickedLink = $(this).attr("href");
		$(".main-container").addClass("change-page");
		setTimeout(function(){window.location.href = clickedLink;}, 1000);


        //alert("You clicked " + $(this).attr("href") + " link.");
    });
}


function mobileMenu(){
  $(".menu-toggle").on('click', function(){
  	$(".mobile-nav-items, .menu-toggle, .logo a").toggleClass("open");
  });
}

/* Ajax Contact Form */
function contactForm() {
  // Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

}

/*
function scrollMenu(){
  var top = 0;
  $(window).scroll(function(){
    var position =$(this).scrollTop();

    if (position > top && position > 500 ){
            //For devices with display smaller then 775px
            if ($(window).width()< 775) {
              $(".mobile-header, .novis-header").fadeOut();
            }else{
              $(".novis-header").fadeOut();
            }

    } else if(position < top-20) {

            if ($(window).width()< 775) {
              $(".novis-header, .mobile-header").fadeIn();
            }else{
              $(".novis-header").fadeIn();
                }
    }
    top = position;
});
}
*/
