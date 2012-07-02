/*
 * jQuery Easing Compatibility v1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Adds compatibility for applications that use the pre 1.2 easing names
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
jQuery.extend(jQuery.easing,{easeIn:function(a,b,c,d,e){return jQuery.easing.easeInQuad(a,b,c,d,e)},easeOut:function(a,b,c,d,e){return jQuery.easing.easeOutQuad(a,b,c,d,e)},easeInOut:function(a,b,c,d,e){return jQuery.easing.easeInOutQuad(a,b,c,d,e)},expoin:function(a,b,c,d,e){return jQuery.easing.easeInExpo(a,b,c,d,e)},expoout:function(a,b,c,d,e){return jQuery.easing.easeOutExpo(a,b,c,d,e)},expoinout:function(a,b,c,d,e){return jQuery.easing.easeInOutExpo(a,b,c,d,e)},bouncein:function(a,b,c,d,e){return jQuery.easing.easeInBounce(a,b,c,d,e)},bounceout:function(a,b,c,d,e){return jQuery.easing.easeOutBounce(a,b,c,d,e)},bounceinout:function(a,b,c,d,e){return jQuery.easing.easeInOutBounce(a,b,c,d,e)},elasin:function(a,b,c,d,e){return jQuery.easing.easeInElastic(a,b,c,d,e)},elasout:function(a,b,c,d,e){return jQuery.easing.easeOutElastic(a,b,c,d,e)},elasinout:function(a,b,c,d,e){return jQuery.easing.easeInOutElastic(a,b,c,d,e)},backin:function(a,b,c,d,e){return jQuery.easing.easeInBack(a,b,c,d,e)},backout:function(a,b,c,d,e){return jQuery.easing.easeOutBack(a,b,c,d,e)},backinout:function(a,b,c,d,e){return jQuery.easing.easeInOutBack(a,b,c,d,e)}});