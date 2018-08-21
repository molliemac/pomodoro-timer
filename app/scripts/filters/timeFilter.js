(function() {
    function time() {
        return function(milliseconds) {
            var milliseconds = Number.parseFloat(milliseconds);
            var wholeSeconds = Math.floor(milliseconds / 1000 );
            var minutes = Math.floor(wholeSeconds / 60);
            var remainingSeconds = wholeSeconds % 60;
            
            var output = minutes + ':';
 
            if (remainingSeconds < 10) {
                output += '0';   
            }
 
            output += remainingSeconds;
 
            return output;
        };
    }
    
    angular 
        .module('pomodoroTimer')
        .filter('timeFilter', timeFilter);
})();