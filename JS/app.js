window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

function topFunction(){
	$('html, body').animate({scrollTop:0}, 'slow');
}