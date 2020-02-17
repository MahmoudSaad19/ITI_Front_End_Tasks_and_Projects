$(function () {

    //welcome page
    var i = 1;
    var slideshow = setInterval(function () {
        if (i > 18)
            i = 1;
        else
            ++i;

        $("#slideshow").fadeOut(1500, function () {
            $("#slideshow").attr("src", "../Images/Slideshow_Images/" + i + ".jpg");
        }).fadeIn(700);
    }, 1700);

    //room color

    for (var i = 1; i <= 10; i++) {
        $("#side_Wall_Color").append("<img class='child_img' src='../Images/Floor/wall" + i + ".jpg'/>");

        $("#Front_Wall_Color").append("<img class='child_img' src='../Images/Floor/wall" + i + ".jpg'/>");
    }

    $("#Floor_Color").append("<div class='child_img2' style='background-color:dimgray'></div>");
    $("#Floor_Color").append("<div class='child_img2' style='background-color:beige'></div>");
    $("#Floor_Color").append("<div class='child_img2' style='background-color:bisque'></div>");
    $("#Floor_Color").append("<div class='child_img2' style='background-color:burlywood'></div>");
    $("#Floor_Color").append("<div class='child_img2' style='background-color:cornsilk'></div>");
    $("#Floor_Color").append("<div class='child_img2' style='background-color:darkgray'></div>");
    $("#Floor_Color").append("<div class='child_img2' style='background-color:lightgray'></div>");

    $("#side_Wall_Color").on('click', '.child_img', function () {
        var getter = $(this).attr("src");
        $("#main_div_OF_room").css("background-image", "url(" + getter + ")");
    });

    $("#Front_Wall_Color").on('click', '.child_img', function () {
        var getter = $(this).attr("src");
        $("#parallelogram").css("background-image", "url(" + getter + ")");
    });

    $("#Floor_Color").on('click', '.child_img2', function () {
        var getter = $(this).css("background-color");
        $("#trapezium").css("border-bottom-color", getter);
    });


    /*//btn first div
    $('#btn-submitBudget').on("click",function(){
        var bud=$("#Budgetprices").val();
        
    });*/
});