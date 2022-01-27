$( document ).ready(function() {

	var clipboard = new ClipboardJS('.btn-copy');

	clipboard.on('success', function(e) {
		$("#contract-address").attr("tooltip-c", "Copied!");
		setTimeout(function() {
			$("#contract-address").attr("tooltip-c", "Copy to clipboard");
		}, 5000);


		e.clearSelection();
	});

	clipboard.on('error', function(e) {
		$("#contract-address").attr("tooltip-c", "Error!");
		setTimeout(function() {
			$("#contract-address").attr("tooltip-c", "Copy to clipboard");
		}, 5000);
	});
	
	var clipboard_top = new ClipboardJS('.btn-copy-top');

	clipboard_top.on('success', function(e) {
		$("#contract-address-top").attr("tooltip-c", "Copied!");
		setTimeout(function() {
			$("#contract-address-top").attr("tooltip-c", "Copy to clipboard");
		}, 5000);


		e.clearSelection();
	});

	clipboard_top.on('error', function(e) {
		$("#contract-address-top").attr("tooltip-c", "Error!");
		setTimeout(function() {
			$("#contract-address-top").attr("tooltip-c", "Copy to clipboard");
		}, 5000);
	});	

	$('body').on('DOMSubtreeModified', '#mce-error-response', function(){
	  	$("#mce-error-response").delay(3000).fadeOut();
	});
	$('body').on('DOMSubtreeModified', '#mce-success-response', function(){
	  	$("#mce-success-response").delay(3000).fadeOut();
	});
	$("#mc-embedded-subscribe2").on('click', function() {
			setTimeout(function() {
					if ( $( "#mce-EMAIL2" ).hasClass( "mce_inline_error" ) ) {
							$( "#mce-EMAIL2" ).removeClass( "mce_inline_error" );
							$("div.mce_inline_error").fadeOut();
					}
			}, 5000);
   });

});
