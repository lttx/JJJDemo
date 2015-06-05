/**
 * Created by lt on 2015/6/1.
 */
$(document).ready(function() {
    /**
     * Created by lantian on 2015/6/1.
     */
    var left = $("#left");
    var leftbtn = $("#left_btn");
    var menu = $("#menu");
    var menup = $("#menu p");
    var menu2 = $("#menu2");
    var menu2p = $("#menu p");
    var center = $("#center");
    var click = 0;

    $(function(){
        $('#pm-rank-table').tablesorter({
            widgets        : ['zebra', 'columns'],
            usNumberFormat : false,
            sortReset      : true,
            sortRestart    : true
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

    $("tbody tr").each(
        function(){
            var level = $(this).children("td").eq(1).text();
            if(level>=500) {
                $(this).find(".pmlevel").css("background-color", "#8E236B");
            }
            else if(level>400)
            {
                $(this).find(".pmlevel").css("background-color", "#8E236B");
            }
            else if(level>300)
            {
                $(this).find(".pmlevel").css("background-color", "#8E236B");
            }
            else if(level>200)
            {
                $(this).find(".pmlevel").css("background-color", "#A020F0");
            }
            else if(level>150)
            {
                $(this).find(".pmlevel").css("background-color", "#FF0000");
            }
            else if(level>100)
            {
                $(this).find(".pmlevel").css("background-color", "#FF6100");
            }
            else if(level>50)
            {
                $(this).find(".pmlevel").css("background-color", "#FFFF00");
            }
            else
            {
                $(this).find(".pmlevel").css("background-color", "#00FF00");
            }
        }
    );

    $(window).resize(function(){
        var width = $(window).width();
        if(width<1000) {
            //alert("1");
           $(window).width("1000px");
        }
    });
    $(".navbar li").click(function () {
        $(this).siblings().removeClass("active-nav-item");
        $(this).addClass("active-nav-item");
        if ($(this).index() != 3) {
            $("#menu").slideUp();
        }
    });

    $(".deploy").click(function () {
        if($(this).next("div").is(':visible'))
        {
            $(this).find("img").attr("src","image/wgrey-down.png");
            $(this).next("div").slideUp();
        }
        else {
            $(".menu:visible").slideUp();
            $(this).find("img").attr("src","image/wgrey-up.png");
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

    function removeClassDelayed(jqObj,cerror,to)
    {
        setTimeout(function(){jqObj.removeClass(cerror);},to);
    }
    function addClassDelayed(jqObj,cerror,to)
    {
        setTimeout(function(){jqObj.addClass(cerror);},to);
    }

    leftbtn.click(function(){
        click = (click+1)%2;
        if(click==1)
        {
            left.animate({left:'-240px'});
            leftbtn.animate({left:'-240px'});
            $("#left_btn_img").attr("src","image/grey-right.png");
            $("#center").fadeOut(500);
            removeClassDelayed($("#center"),"center",500);
            addClassDelayed($("#center"),"center-full",700);
            $("#center").fadeIn(900);
        }
        if(click==0)
        {
            left.animate({left:'0px'});
            leftbtn.animate({left:'0px'});
            $("#left_btn_img").attr("src","image/grey-left.png");
            $("#center").fadeOut(500);
            removeClassDelayed($("#center"),"center-full",500);
            addClassDelayed($("#center"),"center",700);
            $("#center").fadeIn(900);
        }
    });

    $("#left p").click(function(){
        if($(this).next("ul").is(':visible'))
        {
            $(this).next("ul").slideUp("fast");
            $(this).parent().removeClass("active-city");
            $(this).prev().attr("src","image/grey-right.png");
        }
        else {
            $(".city_child:visible").slideUp("fast");
            $(".left-tittle-img").attr("src","image/grey-right.png");
            $(".city_child:visible").parent().removeClass("active-city");
            $(this).next("ul").slideDown("fast");
            $(this).parent().addClass("active-city");
            $(this).prev().attr("src","image/grey-down.png");
        }
    });

    $('p').bind('click', function(){

        if($(this).hasClass("active-info"))
        {
            $(this).removeClass("active-info");
        }
        else {
            $('p').removeClass('active-info');
            $(this).addClass('active-info');
        }
    });

    $(".city_child li").click(function(){
        var text = $(this).text();
        $(".pmdistrict").html(text);
    });
});





