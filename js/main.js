/*

	# MAIN JAVASCRIPT FILE
	This is the main javascript-file.
	Here we combine every javascript (except from modernizr) into one file via codekit.

*/

// @codekit-prepend "../bower_components/jquery/dist/jquery.js"
// @codekit-prepend "console.js"
// import other plugins here like the lines above




//Toggle a specific CSS-selector with a general script
//<a href="#" class="js-toggle" data-target="#target" >Toggle specific class</a>

$(".js-toggle").click(function() {
    var toggleThis = $(this).data("target");
    $(toggleThis).slideToggle(200);

    if ($(this).is('.toggle-state--active') ){
        $(this).removeClass('toggle-state--active');
    } else {
        $(this).addClass('toggle-state--active');
    }

    event.preventDefault();
});