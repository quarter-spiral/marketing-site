window.onload = function() {
	
	enableSmoothScroll();
	adjustSlideSizes();
  bootstrapAffix();

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
		
}




function bootstrapAffix() {

  var windowWidth = $(window).width();
  //makes navigation sticky if screen is large enough (same as bootstrap threshold)
  if (windowWidth > 767) {
    $('#topBar').affix({offset:230});
  }
}






function adjustSlideSizes() {

	//adjust slides to fill the browser window
	var desiredHeight;
	var windowHeight = $(window).height();
	if (windowHeight > 600) {
		desiredHeight = windowHeight - 120 - 30;
		$('.header').css('padding-top',(windowHeight - 600) / 3 + 80);
	} else {
		desiredHeight = 700;
		$('p[class^="next"]').hide();
	}
	$('div[class^="slide"]').css('min-height',desiredHeight);

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

