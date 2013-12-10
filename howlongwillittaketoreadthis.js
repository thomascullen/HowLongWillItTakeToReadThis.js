// How Long Will It Take To Read This
// Version 1.0
// Thomas Cullen

(function($) {
    $.fn.howLongToRead = function(options) {
      var settings = $.extend({
          format : 'minutes',
          label: '.how-long-to-read',
					wpm:200
      }, options);
			
    	var wpm = settings.wpm;
    	var count = this.text().replace( /[^\w ]/g, "" ).split( /\s+/ ).length
    	var count = 100121;
    	var calc = count / wpm;
    	var minutes = calc.toString().split('.')[0];
    	var hours = 0;

    	if ( minutes > 60 && settings.format == 'hours'){
    		var hours = (minutes / 60).toString().split('.')[0]
    		var minutes = minutes - (hours * 60);
    	}

    	switch ( settings.format ){
    		case 'hours':
    			if ( hours > 0 ){
    				$(settings.label).text(hours+' hr '+minutes+' min read')
    			}else{
    				$(settings.label).text(minutes+' min read')
    			}
    			return
    		default:
    			$(settings.label).text(minutes+' min read')
    			return
    	}

    }
}(jQuery));