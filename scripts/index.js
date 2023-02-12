/**
 * Function for smooth scrolling based on anchor tag href
 * @param {anchor tag} element, ideally and anchor tag to smooth scroll
 */
function scroll(element){
    var elementToScroll = element.attr("href");
    $('html, body').animate({
        scrollTop: $(elementToScroll).offset().top - 40},
        'slow');
}

$("nav ul a").click(function(){
    scroll($(this));
});

// Handle the hamburger button on click events
var menuOpen = false;
$('.menu-btn').click(function(){
    var sidebar = $("nav ul");
    if(!menuOpen) {
        $(this).addClass("open");
        sidebar.addClass("active");
    }else{
        $(this).removeClass("open");
        sidebar.removeClass("active");
    }
    menuOpen = !menuOpen;
});

// Handle the click event on the anchor tag for navigation 
// When hamburger button is enabled, on anchor click, close the hamburger button
$("nav ul a").click(function(){
    $("nav ul").removeClass("active")
    $(".menu-btn").removeClass("open");
    menuOpen = !menuOpen;
});