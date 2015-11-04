(function($){

$(function(){
/*Hide map if there are no reports*/
	if($('.council-list #side .full-width').length != 0) { 
  		if($('.full-width').children().length == 0) {
			$('.full-width').html('<p class="no-reports">There are no reports.</p>');
			$('#map_box').css('display','none');
			$('.shadow-wrap').css('display','none');
			$('.lists .content').css({
				'width' : '89%',
				'box-shadow' : 'none',
				'min-height' : '0'

  			})
		}
	};

});

})(jQuery);
