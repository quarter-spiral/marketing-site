window.onload = function() {
	
	enableSmoothScroll();
	adjustSlideSizes();

	//re-create the dynamic design elements for new sizes when window is re-sized
	$(window).resize(function () {
		adjustSlideSizes();
 	});


 	

	//init some bootstrap features
	$('a[rel="popover"]').popover({
			delay: { show: 300, hide: 200 }
		});

	$(window).scroll(function () {
		$('a[rel="popover"]').popover('hide')
 	});


	$('a[rel="tooltip"]').tooltip();

	
	$('#productTour').hide();
	//show the nav bar after a dealy
	setTimeout("$('#productTour').show('slide', { direction: 'down' }, 300);",1500);

		
}



function adjustSlideSizes() {

	//adjust slides to fill the browser window
	$('div[class^="slide"]').css('height',$(window).height());
	$('div[class^="slide"]').css('width',$(window).width());

}

function enableSmoothScroll() {
    // Click event for any anchor tag that's href starts with #
    $('a[href^="#"]').click(function(event) {

        // The id of the section we want to go to.
        var id = $(this).attr("href");

        // An offset to push the content down from the top.
        var offset = 0;

        // Our scroll target : the top position of the
        // section that has the id referenced by our href.
        var target = $(id).offset().top - offset;

        // The magic...smooth scrollin' goodness.
        $('html, body').animate({scrollTop:target}, 500);

        //prevent the page from jumping down to our section.
        event.preventDefault();
    });
	
}





// Helpers

function returnRandomNumner(min,max) {
	return Math.floor(Math.random()*(max-min+1))+min;
}

