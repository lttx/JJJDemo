/**
 * Created by jixian on 2015/6/11.
 */
$(document).ready(function(){
    if($.cookie('loginStatus')){
    }
    else{
        window.location.href='index.html';
    }
});
