$(window).load(function() {
	setTimeout(function() { // Remove this on production
		$("#preloader").fadeOut();
		setTimeout(function() {
			$("#preloader").remove();
		}, 500);
	}, 2500);
});


$(".nav--icon").click(function(){
  $(".overlay").addClass
  ('open');
});

$(".overlay-close").click(function(){
  $(".overlay").removeClass
  ('open');
});


$(".intro").click(function(){
  $(".overlay2").addClass
  ('open');
});

$(".overlay-close2").click(function(){
  $(".overlay2").removeClass
  ('open');
});







