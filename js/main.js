
window.onload=function(){
    //fill(json);
    banner();
    Statistics();
}
    var html="";

     //显示的函数
     function fill(obj){
     	//导航条
     	var ul=document.querySelectorAll(".header_list");
        //登录注册按钮
        var header_nm_login=document.querySelector("#header_nm_login");
     	//个人登录---用户信息
     	var user_xx=document.querySelector("#header_gr_xx");
     	var user=document.querySelector("#user");

     	var main_content=document.querySelector("#main_content");
        /*登录前的 登录框 与 登陆后的个人中心框*/
        var login_before=document.querySelector("#login_before");
        var login_after=document.querySelector("#login_after");
        /*登录后的账号信息*/
        var login_after_user=document.querySelector("#login_after_user");

        var user_photo=document.querySelector(".user_photo img");

        var login_user_photo=document.querySelector(".user_pic i img");

     	if(obj.user=="" && obj.type=="0"){

     		for(var i=0;i<ul.length;i++){
                ul[i].style.display="none";
            }
            ul[0].style.display="block";
     	}

    	if(obj.user!="" && obj.type=="1"){
            for(var i=0;i<ul.length;i++){
                ul[i].style.display="none";
            }
            ul[1].style.display="block";

            header_nm_login.style.display="none";
			user_xx.style.display="block";
        	user.innerHTML=obj.user;

            login_before.style.display="none";
            login_after.style.display="block";
            login_after_user.innerHTML=obj.user;

            user_photo.src=obj.img;
            login_user_photo.src=obj.img;
     	}

     	if(obj.user!="" && obj.type=="2"){

     		for(var i=0;i<ul.length;i++){
                ul[i].style.display="none";
            }
            ul[2].style.display="block";


            header_nm_login.style.display="none";
            user_xx.style.display="block";
            user.innerHTML=obj.user;

            login_before.style.display="none";
            login_after.style.display="block";
            login_after_user.innerHTML=obj.user;

            user_photo.src=obj.img;
            login_user_photo.src=obj.img;
     	}

    ul.innerHTML=html;
  }



/*底部悬浮框*/
var bottom_block=document.querySelector(".bottom_block");
var bottom_close=document.querySelector(".bottom_close");
var float_bottoms=document.querySelector(".float_bottoms");

/*出现、消失*/
function BFloat(){
     move(bottom_block,{'left':-219},1000);
     move(float_bottoms,{'bottom':70},1000);
}
/*出现、消失*/
function BFloat2(){
     move(bottom_block,{'left':0},1000);
     move(float_bottoms,{'bottom':-70},1000);
}
/*关闭按钮*/
bottom_close.onclick=function(){
    move(bottom_block,{'left':0},1000);
    move(float_bottoms,{'bottom':0},1000);
}
/*出现按钮*/
bottom_block.onclick=function(){
    BFloat();
}
 
move(float_bottoms,{'bottom':70},1000);
setTimeout(BFloat2,3000);//延时3秒 