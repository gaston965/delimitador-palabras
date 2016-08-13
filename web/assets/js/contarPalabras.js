               $(document).ready(function() {
	$("[class^='form-control count[']").each(function() {
		var elClass = $(this).attr('class');
		var minWords = 0;
		var maxWords = 0;
		var countControl = elClass.substring((elClass.indexOf('['))+1, elClass.lastIndexOf(']')).split(',');

		if(countControl.length > 1) {
			minWords = parseInt(countControl[0]);
			maxWords = parseInt(countControl[1]);
		} else {
			maxWords = parseInt(countControl[0]);
		}

		$(this).after('<div class="wordCount"><strong>0</strong> Palabras</div>');
		if(minWords < 0) {
			$(this).siblings('.wordCount').addClass('');
		}

		$(this).bind('keyup click blur focus change paste', function() {
			var words = jQuery.trim($(this).val()).split(' ');
			$(this).siblings('.wordCount').children('strong').text(words.length > 1 ? words.length : 0);

			if( (words.length > maxWords && maxWords != 0)) {
				// $(this).siblings('.wordCount').addClass('error');
				// $("#text_max_1").val($(this).val().substr(1,10));
				// alert(JSON.stringify($(this)));

				$('.wordCount').addClass('error');
				$(this).val(words.slice(0, maxWords).join(' '));
        // Des-comentá la siguiente línea para deshabilitar el elemento <textarea>.
				// $(this).attr('disabled','disabled');
			} else {
				$(this).siblings('.wordCount').removeClass('error');
			}
		});
	});
}); 