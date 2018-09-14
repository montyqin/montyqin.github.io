/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

(function ($, Drupal, window, document, undefined) {
	
	Drupal.behaviors.header = {
		attach: function (context, settings) {
			
			
			$("span.Opta-Image-Holder").removeClass(" Opta-Image-Team-Medium");
			$("span.Opta-Image-Holder").removeClass(" Opta-Image-Small");
			
			
			$("span.Opta-Image-Holder").removeClass("Opta-Image-Team-Medium");
			$("span.Opta-Image-Holder").removeClass("Opta-Image-Small");
			
			
			
			$(".Opta-Image-Holder img").removeClass(" Opta-Image-Team-Medium");
			$(".Opta-Image-Holder img").removeClass(" Opta-Image-Small");
			
			
			$(".Opta-Image-Holder img").removeClass("Opta-Image-Team-Medium");
			$(".Opta-Image-Holder img").removeClass("Opta-Image-Small");
			
			
			
			
			$(".Opta-Image-Holder img,  Opta-Image-Team img, Opta-Image-Team-13 img, Opta-Image-Medium img").removeClass(" Opta-Image-Team-Medium");
			$(".Opta-Image-Holder img,  Opta-Image-Team img, Opta-Image-Team-13 img, Opta-Image-Medium img").removeClass(" Opta-Image-Small");
			
			
			$(".Opta-Image-Holder img,  Opta-Image-Team img, Opta-Image-Team-13 img, Opta-Image-Medium img").removeClass("Opta-Image-Team-Medium");
			$(".Opta-Image-Holder img,  Opta-Image-Team img, Opta-Image-Team-13 img, Opta-Image-Medium imgg").removeClass("Opta-Image-Small");
			
			
			
			
			
			
			
			
			//$('img. Opta-Image-Team-Medium').addClass(' Opta-Image-Small').removeClass(' Opta-Image-Team-Medium');
			$('img.Opta-Image-Team-Medium').addClass('Opta-Image-Small').removeClass('Opta-Image-Team-Medium');
			
			  
			$(".menu-icon, .tmprofileh").once().click(function( event ) {		//20150621 RVS	

				parent.history.back();
				return false;

			});
			
			
			
			
			
			
			
		}
	}
	
		
})(jQuery, Drupal, this, this.document);
