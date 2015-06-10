/**
 * Created by lt on 2015/6/9.
 */
/**
 * Created by lantian on 2015/6/1.
 */
$(document).ready(function() {

    var left = $("#left");
    var leftbtn = $("#left_btn");
    var menu = $("#menu");
    var menu2 = $("#menu2");
    var center = $("#center");
    var click = 0;

    setdata(0);
    $("#calendar").hover(function(){$("#calendar").find("input").css("background","#1b98c9");},function(){$("#calendar").find("input").css("background","#b9b9b9");});

    $("#refresh").click(function(){
        setdata(0);
    });

    $("#yesterday").click(function(){
        setdata(-1);
    });

    $("#today").click(function(){
        setdata(0);
    });

    function setdata(num)
    {
        var data = new Date();
        var year = data.getFullYear();
        var month = data.getMonth() + 1;
        var day = data.getDate()+num;
        var monthstr = month;
        var daystr = day;
        if(month<10){monthstr = "0"+month;}
        if(day<10){daystr = "0"+day;}
        var str = year+"-"+monthstr+"-"+daystr;
        $("#calendar").find("input").attr("value",str);
    }

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

    $("#left p").click(function () {
        if ($(this).next("ul").is(':visible')) {
            $(this).next("ul").slideUp("fast");
            $(this).parent().removeClass("active-city");
            $(this).prev().attr("src", "image/grey-right.png");
        }
        else {
            $(".city_child:visible").slideUp("fast");
            $(".left-tittle-img").attr("src", "image/grey-right.png");
            $(".city_child:visible").parent().removeClass("active-city");
            $(this).next("ul").slideDown("fast");
            $(this).parent().addClass("active-city");
            $(this).prev().attr("src", "image/grey-down.png");
        }
    });

    $('.city p').bind('click', function () {

        if ($(this).hasClass("active-info")) {
            $(this).removeClass("active-info");
        }
        else {
            $('p').removeClass('active-info');
            $(this).addClass('active-info');
        }
    });

    $(".city_child li").click(function () {
        var text = $(this).text();
        $(".pmdistrict").html(text);
    });

    $(".navbar li").click(function () {
        $(this).siblings().removeClass("active-nav-item");
        $(this).addClass("active-nav-item");
        if ($(this).index() != 3) {
            $("#menu").slideUp();
        }
    });

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