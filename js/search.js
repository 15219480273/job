 window.onload=function(){
    search_nav(localStorage.user_type);
    //Job_Data();
    Job_num(search_his,1);
 }

 /*选择框的显示隐藏*/
 var Select_industry=document.querySelectorAll(".search_main_search li")[0];
 var Select_skill=document.querySelectorAll(".search_main_search li")[1];
 var Enterprise_nature=document.querySelectorAll(".search_main_search li")[3];

 var Select_box_industry=document.querySelector("#Select_box_industry"); //选择框
 var Select_box_skill=document.querySelector("#Select_box_skill");

 Select_industry.onclick=function(){
 	Select_box_industry.style.display="block";
 }

 Select_skill.onclick=function(){
 	Select_box_skill.style.display="block";
 }
 /*弹框关闭按钮*/

 var job_close=document.querySelectorAll(".job_close");
 for(var i=0;i<job_close.length;i++){
 	job_close[i].onclick=function(){
 		this.parentNode.parentNode.parentNode.style.display="none";//暂时没想到更好的写法
 	}
}

/*移入移出显示隐藏公司性质列表*/
var company_nature=document.querySelector("#company_nature");
Enterprise_nature.onmouseover=function(){
	company_nature.style.display="block";
    this.style.background="url(images/search/re_02.png)no-repeat 230px center";
}
Enterprise_nature.onmouseout=function(){
	company_nature.style.display="none";
    this.style.background="url(images/search/re_01.png)no-repeat 230px center";
}


/*获取地址栏参数*/
function getUrlParam(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r!=null) return decodeURI(r[2]); return null; //返回参数值
}
/*设置当前搜索框为上一次搜索框的值*/
var search_input=document.querySelector("#search_input");
var search_his = getUrlParam("keyword");

search_input.value=search_his;

var userType = localStorage.user_type;
var userName = localStorage.user_name;
var userPhoto = localStorage.user_photo;

/*动态加载导航*/
var nav=document.querySelectorAll(".header_list");
var header_gr_xx=document.querySelector("#header_gr_xx");
var header_nm_login=document.querySelector("#header_nm_login");
var user=document.querySelector("#user");
var user_photo=document.querySelector("#user_photo");

function search_nav(type){
    if(type=="0" || type==""){
        nav[0].style.display="block";
    }
    if(type=="1"){
        nav[1].style.display="block";
        header_gr_xx.style.display="block";
        header_nm_login.style.display="none";

        //个人登录---用户信息
        user.innerHTML=userName;
        user_photo.src=userPhoto;

    }
    if(type=="2"){
        nav[2].style.display="block";
        header_gr_xx.style.display="block";
        header_nm_login.style.display="none";
        user.innerHTML=userName;
        user_photo.src=userPhoto;
    }
}


/*回车搜索*/
var search_input = document.querySelector("#search_input");

search_input.onfocus=function(){
     document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==13){
            //Job_num(search_input.value,1);
            window.location.href="search.html?&keyword="+search_input.value+"&"+Date.parse(new Date());
        }
    }
}


/*动态加载数据*/
    var mJson=[];
    var showDom=document.querySelector(".job_list_box");
    /*数量*/
    var job_num=document.querySelector("#job_num");
    var pagination=document.querySelector(".pagination");

    /*动态加载职位列表*/
    function Job_num(keyword,page){
        ajax({
                url:'dataJob.txt',
                data:{
                   
                },
                success:function(datamsg){
                    mJson=[];
                    var data=JSON.parse(datamsg);//从服务器获取的数据信息化成json对象
                    if(keyword){
                        var exp=new RegExp(keyword,'i');
                        var count=0;
                        //showDom.innerHTML="";
                        for(var i=0;i<data.length;i++){
                            if(exp.test(data[i].jobName)){
                                count++;
                                mJson.push(data[i]);
                            }
                        }
                        Job_numHTML(mJson,page);
                        if(count==0){
                            showDom.innerHTML="<div class='search_val_null'>暂无相关数据</div>";
                        }
                    }else{
                        count=0;
                        showDom.innerHTML="<div class='search_val_null'>请重新输入后再搜索！</div>";
                        }
                    job_num.innerHTML=count;
                },
                error:function(stat){
                }
        });

       
}


    function Job_numHTML(data2,page){
        showDom.innerHTML="";
        pagination.innerHTML="";
        /*分页*/
        var pagenum=(page-1)*8;
        var PageContent = Math.ceil(data2.length / 8); //总页数
        for(var j=pagenum;j<(pagenum+8);j++){
            if(j<data2.length){//判断是否超出范围
                showDom.innerHTML+="<ul>"+
                "<li>"+
                "<a class='job_list_box_active'>"+data2[j].jobName+"</a>"+
                "<div class='job_list_note'>全职招聘</div>"+
                "</li>"+
                "<li>"+
                "<a>"+data2[j].compName+"</a>"+
                "</li>"+
                "<li>"+
                "<img src='images/search/address.png' alt=''>"+
                "<a>"+data2[j].address+"</a>"+
                "</li>"+
                "<li><a>"+data2[j].publishTime+"</a></li>"+
                "<li><a>面议</a></li>"+
                "</ul>";
            }
        }
        //判断是否出现分页
        if(PageContent>1){
            pagination.innerHTML+=
            "<div class='pagination_box'>"+
                "<div id='firstpage'>首页</div>"+
                "<div id='pageup'><上一页</div>"+
                "<div id='nowpage' style='background-color: #ff9c00;'>"+page+"</div>"+
                "<div id='pagedown'>下一页></div>"+
                "<div id='lastpage'>尾页</div>"+
                "<a id='page_num'>共"+PageContent+"页</a>"+
            "</div>";
            var pageup=document.querySelector("#pageup");
            var pagedown=document.querySelector("#pagedown");
            var firstpage=document.querySelector("#firstpage");
            var lastpage=document.querySelector("#lastpage");

            pageup.onclick=function(){
                var PageUp = (page-1) <= 1 ? 1 : page - 1; //上一页
                Job_numHTML(mJson,PageUp);
            }
            pagedown.onclick=function(){
                var PageDown = (page+1) > PageContent ? PageContent : page + 1; //下一页
                Job_numHTML(mJson,PageDown);
            }
            firstpage.onclick=function(){
                var Fpage = 1; //上一页
                Job_numHTML(mJson,Fpage);
            }
            lastpage.onclick=function(){
                var Lpage = PageContent; //下一页
                Job_numHTML(mJson,Lpage);
            }
        }
    }
