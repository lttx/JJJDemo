/**
 * Created by lt on 2015/6/16.
 */
$(document).ready(function() {

    $(".deploy").click(function () {
        if ($(this).next("div").is(':visible')) {
            $(this).find("img").attr("src", "image/wgrey-down.png");
            $(this).next("div").slideUp();
        }
        else {
            $(".menu:visible").slideUp();
            $(this).find("img").attr("src", "image/wgrey-up.png");
            $(this).next("div").slideDown();
        }
        $(".menu a").addClass("menu-item");
    });

    $(".menu a").click(function () {
        $(this).siblings().removeClass("active-menu-item");
        $(this).addClass("active-menu-item");
    });

    $("#adapterbtn").click(function () {
        $("#menu2").slideToggle();
        $("#menu2 p").addClass("menu-item");
    });

    $("#menu2 p").click(function () {
        $(this).siblings().removeClass("active-menu-item");
        $(this).addClass("active-menu-item");
    });

    $("#map").click(function () {
        $(".deploy").each(function () {
            if ($(this).next("div").is(':visible')) {
                $(this).find("img").attr("src", "image/wgrey-down.png");
                $(this).next("div").slideUp();
            }
        });
    });

    $("#center").click(function(){
        $(".deploy").each(function(){
            if($(this).next("div").is(':visible'))
            {
                $(this).find("img").attr("src","image/wgrey-down.png");
                $(this).next("div").slideUp();
            }
        });
    });

    $("#tonavgation").click(function(){
        window.location.href="navigation.html";
    });
});