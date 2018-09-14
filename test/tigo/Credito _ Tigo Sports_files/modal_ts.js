(function ($) {
		Drupal.behaviors.tigo_sports_modal = {
        attach: function (context, settings) {
        	
        	function showoverlay(pid) {
        		
        		var whost = window.location.hostname;
        		
        		var ptexta = Drupal.t('Tu compra se esta procesando...');
        		var ptextb = Drupal.t('Por favor espera.');
        		
        		imgDT = 'http://' + whost + '/sites/all/themes/smartphone/images/ajax-loader-bar.gif';
        		
        		$("#confirmacion").append( "<div id='overlay_buy'><span id='overlay_buy_centre'>"+ptexta+"<br><br><img src='"+imgDT+"'><br><br><span id='overlay_buy_centre_small'>"+ptextb+"</span></span></div>" );
						
						/* Analytics */
						//_gaq.push(['_trackEvent', 'CONFIRMACION', 'overlay', 'productID: ' + pid]);
						
						if (typeof ga != "undefined") {
							ga('send', 'event', 'CONFIRMACION', 'overlay', 'productID: ' + pid);
						}
						
						var furl = "http://" + whost + "/ts/ord/" + pid;
						
						window.location.href = furl;
					}
					
					$(".compra").click(function (event) {
          	var page = $(this).attr('rel');
				  	
          	showoverlay(page);
            event.preventDefault();
          });
            
        }
    };
})(jQuery);
