// keep a list of slide ids and desired background colours
var bgs = {
    "main": "#FFF",
    "other": "#000"
};

// use the 'stepenter' event (step leave is better but requires 
//a modification to impress, more on this below)
$(document).ready(function() {
    $(document).on('impress:stepenter', function(e) {
        var slide = $(e.target).attr("id");

        // the jquery-colour plugin allows animating background colours here
        $("body").animate({
            backgroundColor: bgs[slide]
        }, 500 );
    });
});