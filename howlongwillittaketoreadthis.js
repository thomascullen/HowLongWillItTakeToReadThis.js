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
        var calc = parseFloat(count / wpm).toFixed(2);
        var minutes = calc.toString().split('.')[0];
        var seconds = (calc.toString().split('.')[1] * .01) * 60;
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
                    if ( minutes < 1 ){
                        $(settings.label).text(Math.round(seconds)+' sec read')
                    }else{
                        $(settings.label).text(minutes+' min read')
                    }
                }
                return
            default:
                if ( minutes < 1 ){
                    $(settings.label).text(Math.round(seconds)+' sec read')
                }else{
                    $(settings.label).text(minutes+' min read')
                }
                return
        }
    }
}(jQuery));