const toggle = document.getElementsByClassName("navbar-toggle");
  
toggle[0].addEventListener("click", function(event) {
    event.preventDefault();
    this.classList.toggle("is-active");
});
const closeNavbarMobile = document.getElementsByClassName("close");

$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});
});