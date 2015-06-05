/**
 * Created by jixian on 2015/5/21.
 */
$('#login').click(function(){
    var username=$('#username').val();
    var password =md5($('#password').val());
    if(username=='admin'){
        if(password=='7dae8bbd800f38dfa83213d7919dc996'){
            window.location.href="navigation.html";
        }else{
            alert("Wrong username or password!");
        }
    }else{
        alert("Wrong username or password!");
    }
});
