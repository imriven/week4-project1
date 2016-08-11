/*
=======================================================

** Week 4 - Project 1 **
*** jQuery! ***

For any methods that we didn't cover, please refer to the jQuery documentation.
https://api.jquery.com/

BASIC TRACK: 1-8
ADVANCED TRACK: 9-12
=======================================================
*/

// Add your JS here.

$(document).ready(function() {

    $(".hideMe").click(function() {
        $(".hideMe").hide();
    });

    $(".changeColor").click(function() {
        $("ul li:nth-child(3)").css("color", "#8A2BE2");

    });

    $("ul li:nth-child(4)").click(function() {
        $("ul li:nth-child(4)").after($("ul li:nth-child(4)").clone(false));

    });

    $("#removeLi").click(function() {
        $("ul li:nth-child(4)").remove();
    });

    $("ul li:last").click(function() {
        $("ul li:last").css("font-size", "40px");
        $("ul li").not("ul li:last").remove();
    });

    $(".cute").click(function() {
        $(".cute").after($(".cute").clone(false));

    });

    $("body").dblclick(function() {
        $("#makeSquare").css("width", "120px");

    });

    $("#dontClick").click(function() {
        alert("What did I just say?");
    });

    $(".black.swatch").click(function() {
        var blackColor = $(".black.swatch").css("background-color");
        $("body").css("background-color", blackColor);
    });

    $(".restore.swatch").click(function() {
        var whiteColor = $(".restore.swatch").css("background-color");
        $("body").css("background-color", whiteColor);
        $("body").css("background-image", "");
    });

    $(".wood.swatch").click(function() {
        var image = $(".wood.swatch").css("background-image");
        $("body").css("background-image", image);
    });

    $(".chaos.swatch").click(function() {
        var image = $(".chaos.swatch").css("background-image");
        $("body").css("background-image", image);
    });

    $("#hover").mouseover(function() {
        $("#hover").css("background-color", "red");
        $("#hover").click(function() {
            $("#hover").toggleClass("green");

        });
    });



});
