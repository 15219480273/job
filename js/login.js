/*登录注册切换板块*/
function change(obj1,obj2,obj3,obj4,classname){

    var obj1=document.getElementById(obj1);
    var obj2=document.getElementById(obj2);
    var obj3=document.getElementById(obj3);
    var obj4=document.getElementById(obj4);

    obj1.className=classname;
    obj2.className="";

    obj3.style.display="block";
    obj4.style.display="none";
}

    var login_back=document.querySelector("#back");
	var loginBtnDom_p=document.querySelector("#loginBtn_p");
    var loginBtnDom_c=document.querySelector("#loginBtn_c");
    var user_type=0;
    var user_name="";
    var user_photo;

/*退出登录*/
if(login_back){
    login_back.onclick=function(){
            var login_before=document.querySelector("#login_before");
            var login_after=document.querySelector("#login_after");
            /*所有导航*/
            var header_list=document.querySelectorAll(".header_list");
            var user_xx=document.querySelector("#header_gr_xx");//个人信息

            for(var i=0;i<header_list.length;i++){
                header_list[i].style.display="none";
            }
            header_list[0].style.display="block";

            header_nm_login.style.display="block";
            user_xx.style.display="none";

            localStorage.removeItem(localStorage.user_type);
            localStorage.removeItem(localStorage.user_name);
            localStorage.removeItem(localStorage.user_photo);


            document.querySelector("#userName_p").value="";
            document.querySelector("#userPwd_p").value="";
            document.querySelector("#userName_c").value="";
            document.querySelector("#userPwd_c").value="";
            document.querySelector("#codeImg").value="";

            login_before.style.display="block";
            login_after.style.display="none";
        }
    }

/*个人用户登录*/
        function Login_P(){
            var userType=1;
            var userNameTxt_p=document.querySelector("#userName_p").value;//获取用户名 参数
            var userPwdTxt_p=document.querySelector("#userPwd_p").value;

            ajax({
                url:'dataUser.txt',
                data:{
                    username:userNameTxt_p,
                    userpassword:userPwdTxt_p,
                    usertype:userType
                },
                success:function(datamsg){
                    var data=JSON.parse(datamsg);//从服务器获取的数据信息化成json对象
                    for(var i=0;i<data.length;i++){
                        if(userNameTxt_p==data[i].userName && userPwdTxt_p==data[i].userPwd && userType==data[i].userType){
                            alert("登录成功");
                            //重新加载该类型对用的页面，能体现导航条以及内容变化
                           //document.location.href=document.location.href;
                             var json=
                                     {
                                        user:data[i].userName,
                                        pwd:data[i].userPwd,
                                        type:data[i].userType,
                                        tel:data[i].tel,
                                        img:data[i].img,
                                        email:data[i].email
                                     };
                            localStorage.user_type = json.type; 
                            localStorage.user_name = json.user; 
                            localStorage.user_photo = json.img;        
                            fill(json);
                            break;
                        }
                    }
                if(i==data.length){
                        alert("该用户不存在，请先注册！");
                    }
                },
                error:function(stat){
                }
        });
    }


    /*企业用户登录*/
        function Login_C(){
            var userType=2;
            var userNameTxt_c=document.querySelector("#userName_c").value;//获取用户名 参数
            var userPwdTxt_c=document.querySelector("#userPwd_c").value;
            validate();
            if(userNameTxt_c!="" && userPwdTxt_c!="" ){
            if(yzm){
            ajax({
                url:'dataUser.txt',
                data:{
                    username:userNameTxt_c,
                    userpassword:userPwdTxt_c,
                    usertype:userType
                },
                success:function(datamsg){
                    var data=JSON.parse(datamsg);//从服务器获取的数据信息化成json对象
                    for(var i=0;i<data.length;i++){
                         if(userNameTxt_c==data[i].userName && userPwdTxt_c==data[i].userPwd && userType==data[i].userType){
                             alert("登录成功");
                            //重新加载该类型对用的页面，能体现导航条以及内容变化
                           //document.location.href=document.location.href;
                              json=
                                     {
                                        user:data[i].userName,
                                        pwd:data[i].userPwd,
                                        type:data[i].userType,
                                        tel:data[i].tel,
                                        email:data[i].email,
                                        img:data[i].img
                                     };
                            localStorage.user_type = json.type; 
                            localStorage.user_name = json.user; 
                            localStorage.user_photo = json.img;  
                            fill(json);
                            break;
                        }
                    }
                if(i==data.length){
                        alert("该用户不存在，请先注册！");
                    }
                },
                error:function(stat){

                }
            });
        }
        }else{
            alert("请输入完整信息！");
        }
    }
