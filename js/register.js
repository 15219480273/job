
/*登录注册切换函数*/
	function qh(obj1,obj2,classname){
		var a=document.getElementById(obj1);
		var b=document.getElementById(obj2);
		a.className=classname;
		b.className="";
}
/*手机 邮箱切换*/
    //标题
    var reg_phone=document.querySelector("#reg_phone");
    var reg_email=document.querySelector("#reg_email");
    //图标
    var icon_phone=document.querySelector(".reg_title_icon_phone");
    var icon_email=document.querySelector(".reg_title_icon_email");
    //横线
    var border_box=document.querySelector("#border_box");
    //输入框
    var input_box=document.querySelectorAll(".reg_main_content_box_main");

    var box_img=document.querySelectorAll(".accept_box_icon")[0];
    var box_img_1=document.querySelectorAll(".accept_box_icon")[1];
    var agree=false;
    var agree1=false;

    createCode();

    var code;
    var yzm=false;
    function createCode(){
        //首先默认code为空字符串
        code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;
        var codeV = document.getElementById('code');
        //设置随机字符
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){
            //设置随机数范围,这设置为0 ~ 36
             var index = Math.floor(Math.random()*36);
             //字符串拼接 将每次随机的字符 进行拼接
             code += random[index];
        }
        //将拼接好的字符串赋值给展示的Value
        codeV.innerHTML = code;

    }

    //下面就是判断是否== 的代码
    function validate(){
        var oValue = document.getElementById('yzm_input').value.toUpperCase();
        if(oValue ==0){
            alert('请输入验证码');
        }else if(oValue != code){
            alert('验证码不正确，请重新输入');
            oValue = ' ';
            createCode();
        }else{
            yzm=true;
        }
    }

    //点击刷新验证码
    var NewYzm=document.querySelector(".reg_yzm_resh");
    NewYzm.onclick=function(){
        createCode();
    }

    /*短信验证码*/

    var PhoneYzm=document.querySelector(".reg_yzm_btn");
    var second=30;
    PhoneYzm.click=true;

    function Phone_Yzm(){
            if(PhoneYzm.click){
            var yam_time=setInterval(function(){
                PhoneYzm.style.backgroundColor="#888888";
                if (second == 0) {
                    PhoneYzm.click=true;
                    PhoneYzm.style.backgroundColor="#0AA5F5";
                    PhoneYzm.innerHTML="获取验证码";
                    second = 30;
                    clearInterval(yam_time);
                    return;
                }else{
                    PhoneYzm.click=false;
                    second--;
                    PhoneYzm.innerHTML=second+" 秒后重发";
                }
             },1000);
        }
    }

/*用户协议点击函数*/
    box_img.onclick=function(){
        agree=!agree;
        if(agree){
            this.style.background="url(images/register/box_1.png)no-repeat center";
            this.style.backgroundSize="14px 14px";
        }else{
            this.style.background="url(images/register/box.png)no-repeat center";
            this.style.backgroundSize="14px 14px";
        }
    }


    box_img_1.onclick=function(){
        agree1=!agree1;
        if(agree1){
            this.style.background="url(images/register/box_1.png)no-repeat center";
            this.style.backgroundSize="14px 14px";
        }else{
            this.style.background="url(images/register/box.png)no-repeat center";
            this.style.backgroundSize="14px 14px";
        }
    }



    //手机注册
    reg_phone.onclick=function(){
        createCode();
        //标题
        if(reg_phone.className!="reg_title_active"){
            reg_phone.className="reg_title_active";
            reg_email.className="";
            //图标
            icon_phone.className+=" phone_on";
            icon_email.className="reg_title_icon_email";
            //横线
            border_box.className="border_box_phone";
            //输入框
            input_box[0].style.display="block"
            input_box[1].style.display="none";
        }
    }

    //邮箱注册
    reg_email.onclick=function(){
        createCode();
            if(reg_email.className!="reg_title_active"){
            //标题
            reg_email.className="reg_title_active";
            reg_phone.className="";
            //图标
            icon_phone.className="reg_title_icon_phone";
            icon_email.className+=" email_on";
            //横线
            border_box.className="border_box_email";
            //输入框
            input_box[0].style.display="none"
            input_box[1].style.display="block";
        }
    }

/*用户头像预览*/
    function user_photo_show(obj1,obj2){
        var photo_show=document.querySelector(obj1);
        //图片路径
        var user_photo_src_p=document.querySelector(obj2);
        photo_show.src=window.URL.createObjectURL(user_photo_src_p.files[0]);
    }

/*正则验证*/
    var reg_btn_phone=document.querySelector("#reg_btn_phone");//登录按钮
    var reg_btn_email=document.querySelector("#reg_btn_email");

    var info=document.querySelectorAll(".reg_main_content_box_main p");//错误提示信息
    var user_p=document.querySelector("#user_p");
    var pwd_p=document.querySelector("#pwd_p");
    var user_e=document.querySelector("#user_e");
    var pwd_e=document.querySelector("#pwd_e");

    var reg_p_user=false;
    var reg_p_pwd=false;
    var reg_e_user=false;
    var reg_e_pwd=false;

    var userRule=/^1[34578]\d{9}$/;
    var pwdRule=/^[a-zA-Z0-9_@]{6,16}$/;

    var emailRule=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9_-]+)$/;// +表示多次出现


    /********************手机注册**************************************/
    user_p.onblur=function(){
        var userValue = user_p.value
        if((userValue.match(userRule))){
            info[0].style.display="none";

            ajax({
                url:'dataUser.txt',
                data:{
                    username:userValue,
                },
                success:function(datamsg){
                    var data=JSON.parse(datamsg);//从服务器获取的数据信息化成json对象
                    for(var i=0;i<data.length;i++){
                        if(userValue==data[i].userName){
                            info[1].style.display="block";
                            reg_p_user=false;
                            break;
                        }else{
                            info[1].style.display="none";
                            reg_p_user=true;
                        }
                    }
                },
                error:function(stat){
                }
        });

        }else{
            info[0].style.display="block";
             reg_p_user=false;
        }
    }

    pwd_p.onblur=function(){
        var pwdValue = pwd_p.value
        if((pwdValue.match(pwdRule))){
            info[2].style.display="none";
            reg_p_pwd=true;
        }else{
            info[2].style.display="block";
            reg_p_pwd=false;
        }
    }


    reg_btn_phone.onclick=function(){
        var userType=1;
        var userNameTxt_p=user_p.value;
        var userPwdTxt_p=pwd_p.value;

        var user_photo_src_p=document.querySelector("#user_photo_file_p").value;
        validate();
        if(user_photo_src_p){
            if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(user_photo_src_p))
            {
              alert("图片类型必须是.gif,jpeg,jpg,png中的一种")
              return false;
            }
        }else{
            user_photo_src_p="images/user_photo/user_photo.png"
        }

        if(userNameTxt_p!="" && userPwdTxt_p!="" && reg_p_user && reg_p_pwd && yzm){
            if(agree){
            ajax({
                url:'js/register.php',
                data:{
                    username:userNameTxt_p,
                    userpassword:userPwdTxt_p,
                    img:user_photo_src_p,
                    usertype:userType
                },
                success:function(datamsg){
                            alert(datamsg);
                            self.location='index.html';
                },
                error:function(stat){

                }
            });

            alert("注册成功！");

            }else{
                alert("请先同意用户协议！");
                return;
            }
        }else{
            alert("请重新填写注册信息！");
        }

    }
/********************邮箱注册**************************************/
     user_e.onblur=function(){
        var userValue = user_e.value
        if((userValue.match(emailRule))){
            info[3].style.display="none";

            ajax({
                url:'dataUser.txt',
                data:{
                    username:userValue,
                },
                success:function(datamsg){
                    var data=JSON.parse(datamsg);//从服务器获取的数据信息化成json对象
                    for(var i=0;i<data.length;i++){
                        if(userValue==data[i].userName){
                            info[4].style.display="block";
                            reg_e_user=false;
                            break;
                        }else{
                            info[4].style.display="none";
                            reg_e_user=true;
                        }
                    }
                },
                error:function(stat){
                }
        });
        }else{
            info[3].style.display="block";
             reg_e_user=false;
        }
    }

    pwd_e.onblur=function(){
        var pwdValue = pwd_e.value
        if((pwdValue.match(pwdRule))){
            info[5].style.display="none";
            reg_e_pwd=true;
        }else{
            info[5].style.display="block";
            reg_e_pwd=false;
        }
    }

     reg_btn_email.onclick=function(){
        var userType=1;
        var userNameTxt_e=user_e.value;
        var userPwdTxt_e=pwd_e.value;

        var user_photo_src_e=document.querySelector("#user_photo_file_e").value;

        if(user_photo_src_e){
            if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(user_photo_src_e))
            {
              alert("图片类型必须是.gif,jpeg,jpg,png中的一种");
              return false;
            }
        }else{
            user_photo_src_e="images/user_photo/user_photo.png";
        }

        if(userNameTxt_e!="" && userPwdTxt_e!="" && reg_e_user && reg_e_pwd){
            if(agree1){
            ajax({
                url:'js/register.php',
                data:{
                    username:userNameTxt_e,
                    userpassword:userPwdTxt_e,
                    img:user_photo_src_e,
                    usertype:userType
                },
                success:function(datamsg){
                            alert(datamsg);
                            self.location='index.html';
                },
                error:function(stat){

                }
        });
            }else{
                alert("请先同意用户协议！");
                return;
            }
            alert("注册成功！");

        }else{
            alert("请重新填写注册信息！");
        }
    }

    /*用户协议查看*/
    var AgreenMent = document.querySelectorAll(".accept_box span");
    var close_box=document.querySelector(".close_box");//用户协议关闭按钮
    var user_agree =document.querySelector(".user_agree");
    /*显示*/
    function user_agree_show(){
        user_agree.style.display="block";
    }

        /*隐藏*/
    function user_agree_hide(){
        user_agree.style.display="none";
    }
   
    
    
   