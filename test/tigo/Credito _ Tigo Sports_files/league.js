
(function ($) {
		Drupal.behaviors.opta = {
        attach: function (context, settings) {
        	
        	/*
        	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
					alert("width: "+width);
					alert("screen.width: "+screen.width);
					*/
			      
        }
    };
		
    Drupal.behaviors.opta.selectt = function() {
    	valueS = $("#competitions").find('option:selected').val();
						
			var whost = window.location.hostname;
			var furl = "http://" + whost + "/stats/" + valueS  + "/posiciones";
			//alert("furl: "+furl);
			
			window.location.href = furl;
			
			//window.location.replace(furl);
		}

})(jQuery);
