(function($){

	/**
	* browser detection
	*/

	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
	var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	// At least Safari 3+: "[object HTMLElementConstructor]"
	var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
	var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6

    $.fn.blurMe = function(options){
        var defaults = {
        	radius:3,
        	svgFallback:"blur.svg"
        };
        var options = $.extend(defaults, options);
        return this.each(function() {
            var obj = $(this);
            obj.css({
                    "-webkit-filter": "blur("+options.radius+"px)",
                    "-moz-filter": "blur("+options.radius+"px)",
                    "-o-filter": "blur("+options.radius+"px)",
                    "-ms-filter": "blur("+options.radius+"px)"                    
                });
           	if(isFirefox){
                obj.css({
                    "filter": "url("+options.svgFallback+"#blur"+options.radius+")"
                });
            }
            if(isIE){
            	obj.css({
            		"filter":"progid:DXImageTransform.Microsoft.Blur(PixelRadius='"+options.radius+"')"
            	});
            }
        });
    };
})(jQuery);
