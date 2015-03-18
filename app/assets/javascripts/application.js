// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function() {


	// Smooth link scroll
	/////////////////////////////////////////////////////////////////////////////////////////////
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top + 5
	            }, 750);
	            return false;
	        }
	    }
	});

	// Navigation Waypoint
	/////////////////////////////////////////////////////////////////////////////////////////////
	var header = $('#header');
	var headerstatus = $("#header-status");

	$(header).waypoint(function(direction) {
        if (direction == 'down') {
            $(header).addClass('fixed-top');
        } else {
            $(header).removeClass('fixed-top');
        }
    });

    $(headerstatus).waypoint(function(direction) {
        if (direction == 'down') {
            $(headerstatus).addClass('fixed-top');
        } else {
            $(headerstatus).removeClass('fixed-top');
        }
    }, {offset: 42});


});