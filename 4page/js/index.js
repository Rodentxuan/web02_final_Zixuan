 // portfolio
 $('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 300);
 });


 $("h1").mouseover(function(){
    $("svg").removeClass("hover-disabled");
    if(!$("svg").hasClass("hover")){
      $("svg").addClass("hover");
      setTimeout(function(){
        $("svg").removeClass("hover");
        $("svg").addClass("hover-disabled");
      }, 3500);
    }
  });