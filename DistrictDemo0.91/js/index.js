/**
 * Created by jixian on 2015/5/21.
 */
if($.cookie('loginStatus')){
    window.location.href='navigation.html';
}

$('#login').click(function(){
    var username=$('#username').val();
    var password =md5($('#password').val());
    if(username=='admin'){
        if(password=='7dae8bbd800f38dfa83213d7919dc996'){
            $.cookie('loginStatus',true,{expires: 7,path:'/DistrictDemo'});
            window.location.href="navigation.html";
        }else{
            alert("Wrong username or password!");
        }
    }else{
        alert("Wrong username or password!");
    }
});
