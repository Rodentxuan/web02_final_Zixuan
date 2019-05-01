//Created By David Kern
//FreeSource

$("#goClose").css('opacity', '0');
    $("#cd1").hide();
    $("#go1").click(function () {
        $("#forleft").animate({
            width: "100%",
            height: "1000px",
            opacity: 1
          
        }, 1000);

        $("#forcenter").animate({
            width: "0%",
            height: "1000px",
            opacity: 1
        }, 1000);

        $("#forright").animate({
            width: "0%",
            height: "1000px",
            opacity: 1
        }, 1000);


        $('#oteffirstbut').animate({
            opacity: 0
        }, 1000);

        $('#goClose').animate({
            opacity: 1
        }, 1000);

        $("#portfolio").animate({
            width: "100%",
            height: "2000px"
        }, 1000);
        $("#forleft").css('transform', 'scale(1)');
        $("#cd1").show();
    });
    $("#goClose").click(function () {
        $("#forleft").animate({
            width: "33.3%",
            height: "1000px",
            opacity: 1
        }, 1000);

        $("#forcenter").animate({
           width: "33.3%",
            height: "1000px",
            opacity: 1
        }, 1000);

        $("#forright").animate({
           width: "33.3%",
            height: "1000px",
            opacity: 1
        }, 1000);


        $('#oteffirstbut').animate({
            opacity: 1
        }, 1000);

        $('#goClose').animate({
            opacity: 0
        }, 1000);


        $("#portfolio").animate({
            width: "100%",
            height: "1000px"
        }, 1000);


        $("#forleft").css('transform', 'scale(1)');
        $("#cd1").hide();
    });

    $("#goClose2").css('opacity', '0');
    $("#cd2").hide();

    $("#go2").click(function () {
        $("#forleft").animate({
            width: "0%",
            opacity: 1
        }, 1000);

        $("#forcenter").animate({
            width: "100%",
            height: "1000px",
            opacity: 1
        }, 1000);

        $("#forright").animate({
           width: "0%",
            opacity: 1
        }, 1000);


        $('#go2').animate({
            opacity: 0
        }, 1000);
        $('#goClose2').animate({
            opacity: 1
        }, 1000);


        $("#portfolio").animate({
            width: "100%",
            height: "2000px"
        }, 1000);

        $("#forcenter").css('transform', 'scale(1)');
        $("#cd2").show();

    });
    $("#goClose2").click(function () {
        $("#forleft").animate({
            width: "33.3%",
            height: "1000px",
            opacity: 1
        }, 1000);

        $("#forcenter").animate({
          width: "33.3%",
            height: "1000px",
            opacity: 1
        }, 1000);

        $("#forright").animate({
            width: "33.3%",
            height: "1000px",
            opacity: 1
        }, 1000);


        $('#go2').animate({
            opacity: 1
        }, 1000);
        $('#goClose2').animate({
            opacity: 0
        }, 1000);
        $("#portfolio").animate({
            width: "100%",
            height: "1000px"
        }, 1000);

        $("#cd2").hide();
    });


    $("#goClose3").css('opacity', '0');
    $("#cd3").hide();

    $("#go3").click(function () {
        $("#forleft").animate({
            width: "0%",
            opacity: 1
        }, 1000);

        $("#forcenter").animate({
            width: "0%",
            opacity: 1
        }, 1000);

        $("#forright").animate({
            width: "100%",
            height: "1000px",
            opacity: 1
        }, 1000);


        $('#go3').animate({
            opacity: 0
        }, 1000);
        $('#goClose3').animate({
            opacity: 1
        }, 1000);

        $("#portfolio").animate({
            width: "100%",
            height: "2000px"
        }, 1000);

        $("#forright").css('transform', 'scale(1)');
        $("#cd3").show();
    });


    $("#goClose3").click(function () {
        $("#forleft").animate({
            width: "33.3%",
            height: "1000px",
            opacity: 1
        }, 1000);

        $("#forcenter").animate({
            width: "33.3%",
            height: "1000px",
            opacity: 1
        }, 1000);

        $("#forright").animate({
            width: "33.3%",
            height: "1000px",
            opacity: 1
        }, 1000);

        $('#go3').animate({
            opacity: 1
        }, 1000);
        $('#goClose3').animate({
            opacity: 0
        }, 1000);

        $("#portfolio").animate({
            width: "100%",
            height: "1000px"
        }, 1000);

        $("#cd3").hide();
    });