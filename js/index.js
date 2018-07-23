   scroll(0,0);
   fill_job();
   createCode();

    localStorage.user_type = "";
    localStorage.user_name = "";
    localStorage.user_photo = "";

    var code;
    var yzm=false;
    function createCode(){
        code = '';
        var codeLength = 4;
        var codeV = document.getElementById('number');
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        for(var i = 0; i < codeLength; i++){
             var index = Math.floor(Math.random()*36);
             code += random[index];
        }
        codeV.innerHTML = code;
    }

    //下面就是判断是否== 的代码
    function validate(){
        var oValue = document.getElementById('codeImg').value.toUpperCase();
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

   // json.type!=""?user_type=json.type : user_type=0;

document.querySelector(".post_Search_box_btn").value="";
/*搜索后页面跳转*/
function Jump(url,value){
    if(value!=""){
        var href_url=url+"?keyword="+value+"&"+Date.parse(new Date());
        window.location.href=href_url;
    }else{
        alert("请输入关键字后再搜索");
    }
}

/*热门搜索跳转*/
var post_Search_hot=document.querySelectorAll(".post_Search_hot a");
for(var i=0;i<post_Search_hot.length;i++){
    (function(i){
        post_Search_hot[i].onclick=function(){
           // alert(this.innerHTML);
            Jump('search.html',this.innerHTML,user_type,user_name,user_photo);
        }
    })(i);
}

/*回车搜索*/
var search_word = document.querySelector("#search_word");

search_word.onfocus=function(){
     document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==13){
            Jump('search.html',search_word.value,user_type,user_name,user_photo);
        }
    }
}

var job_icon=document.querySelector(".job_type_icon");
var content=document.querySelector(".content");
var ConHeight=document.body.clientHeight;//总体高度

/*滚轮 高亮度显示*/
    // document.body.onmousewheel===null?document.body.onmousewheel=scrollFn:document.body.addEventListener('DOMMouseScroll',scrollFn);

//左侧悬浮描点
$(function(){
     $(window).scroll(function(){
        scrollFn();
     });
});

document.body.onmousewheel = function(event) {
    event = event || window.event;
   scrollFn();
};

/*键盘*/
    document.onkeydown=function(){
        var k=event.keyCode;
        if(k==38||k==40){
            scrollFn();
        }
    }
    var job_type_box=document.querySelectorAll(".job_type_box");
    var h1 = parseInt(job_type_box[0].offsetTop)-100;
    var h2 = parseInt(job_type_box[1].offsetTop)-150;
    var h3 = parseInt(job_type_box[2].offsetTop)-200;
    var h4 = parseInt(job_type_box[3].offsetTop)-250;
    var h5 = parseInt(job_type_box[4].offsetTop)-300;
    var h6 = parseInt(job_type_box[5].offsetTop)-350;

    function scrollFn(e){
        e=e||window.event;
        var ScrollHeight=document.body.scrollTop || document.documentElement.scrollTop;
        if(ScrollHeight<h1 ){
            show_icon(0,-60);
            job_icon.style.position="absolute";
            job_icon.style.top="75%";
        }
        if(ScrollHeight>=h1 && ScrollHeight<h2){
            show_icon(0,-60);
            job_icon.style.position="fixed";
            job_icon.style.top="19%";
        }
        if(ScrollHeight>=h2  && ScrollHeight<h3){
            show_icon(1,-60);
        }
        if(ScrollHeight>=h3 && ScrollHeight<h4){
            show_icon(2,-60);
        }
        if(ScrollHeight>=h4 && ScrollHeight<h5){
            show_icon(3,-60);
        }
        if(ScrollHeight>=h5 && ScrollHeight<h6){
            show_icon(4,-60);
        }
        if(ScrollHeight>=h6){
            show_icon(5,-60);
        }
        //console.log(ScrollHeight);
    }


    var job_type_icon =document.querySelectorAll(".job_type_icon ul a");
    /*切换图标*/
    function show_icon(obj,num){
        for(var i=0;i<job_type_icon.length;i++){
            job_type_icon[i].style.backgroundPositionX=0+"px";
            job_type_icon[obj].style.backgroundPositionX=num+"px";
        }
    }

    // /*悬浮框点击  移动滚动高度*/
    // $(".job_type_icon li").click(function(){
    //     var n = $(this).index();
    //     if(n==0){
    //             //$("body").animate({scrollTop:h1},700);
    //             ChangeTop(h1);
    //     }else if(n==1){
    //             //$("body").animate({scrollTop:h2},700);
    //             ChangeTop(h2);
    //     }else if(n==2){
    //             //$("body").animate({scrollTop:h3},700);
    //             ChangeTop(h3);
    //     }else if(n==3){
    //             //$("body").animate({scrollTop:h4},700);
    //             ChangeTop(h4);
    //     }else if(n==4){
    //             //$("body").animate({scrollTop:h5},700);
    //             ChangeTop(h5);
    //     }else if(n==5){
    //             //$("body").animate({scrollTop:h6},700);
    //             ChangeTop(h6);
    //     }
    // });

    var n=0;
    /*悬浮框点击  移动滚动高度*/
    var job_type_li=document.querySelectorAll(".job_type_icon ul li");

    for(var k=0;k<job_type_li.length;k++){
        (function(k){
            job_type_li[k].onclick=function(){
                     n = k; 
                if(n==0){
                        //$("body").animate({scrollTop:h1},700);
                        ChangeTop(h1);
                }else if(n==1){
                        //$("body").animate({scrollTop:h2},700);
                        ChangeTop(h2);
                }else if(n==2){
                        //$("body").animate({scrollTop:h3},700);
                        ChangeTop(h3);
                }else if(n==3){
                        //$("body").animate({scrollTop:h4},700);
                        ChangeTop(h4);
                }else if(n==4){
                        //$("body").animate({scrollTop:h5},700);
                        ChangeTop(h5);
                }else if(n==5){
                        //$("body").animate({scrollTop:h6},700);
                        ChangeTop(h6);
                }
            }
        })(k);
    }

    var timer2;
    function ChangeTop(num){
        clearInterval(timer2);

        timer2=setInterval(function(){
            var i;
            var ifall=true;
            var speed;
            var scrollTop = Math.floor(document.body.scrollTop) || Math.floor(document.documentElement.scrollTop);

            if(scrollTop!=num){
                speed=(num-scrollTop)*0.2;
                speed=speed>0?Math.ceil(speed):Math.floor(speed);
                document.documentElement.scrollTop=scrollTop+speed;
                document.body.scrollTop=scrollTop+speed;
                ifall=false;
            }
            ifall&&clearInterval(timer2);
            window.onmousewheel=document.onmousewheel=function(){
                clearInterval(timer2);
            }
        },1000/30);

    }


    var job_list_box=document.querySelectorAll(".job_type_info_list ul");
    //var job_list_ul=document.querySelector(".job_type_info_list ul");
    var Internet=0,Electronics=0,Real=0,Finance=0,consumer=0,car=0;
    var job_list;
    /*动态加载职位*/
    function fill_job(){
            ajax({
                url:'dataJob.txt',
                data:{},
                success:function(datamsg){
                    var data=JSON.parse(datamsg);
                    for(var i=0;i<data.length;i++){

                            job_list="<li>\
                                <div class='job_type_info_box'>\
                                    <img src="+data[i].jobLogo+" alt=''>\
                                    <div class='job_list_text'>\
                                        <a>"+data[i].jobName+"</a>\
                                        <a>"+data[i].compName+"</a>\
                                        <a>"+data[i].style+"</a>\
                                        <a>"+data[i].address+"</a>\
                                        <img src='images/location.png'>\
                                    </div>\
                                </div>\
                            </li>";
                        switch(data[i].jobType)
                                {
                                case "Internet":
                                    if(Internet<6){
                                        job_list_box[0].innerHTML+=job_list;
                                        Internet++;
                                    }
                                  break;
                                case "Electronics":
                                    if(Electronics<6){
                                        job_list_box[1].innerHTML+=job_list;
                                        Electronics++;
                                    }
                                  break;
                                case "Real":
                                    if(Real<6){
                                        job_list_box[2].innerHTML+=job_list;
                                        Real++;
                                    }
                                  break;
                                case "Finance":
                                    if(Finance<6){
                                        job_list_box[3].innerHTML+=job_list;
                                        Finance++;
                                    }
                                  break;
                                case "consumer":
                                    if(consumer<6){
                                        job_list_box[4].innerHTML+=job_list;
                                        consumer++;
                                    }
                                  break;
                                case "car":
                                    if(car<6){
                                        job_list_box[5].innerHTML+=job_list;
                                        car++;
                                    }
                                  break;
                                }
                    }
            },
            error:function(stat){
            }
        });
    }

    var text_box=document.querySelectorAll(".text_box");
    var job_info_title=document.querySelectorAll(".job_info_title");

    fill_job_type();
    /*动态加载工作类别介绍*/
    function fill_job_type(){
            ajax({
                url:'dataJob_info.txt',
                data:{},
                success:function(datamsg){
                    var data=JSON.parse(datamsg);
                    for(var i=0;i<data.length;i++){

                        job_info_title[i].innerHTML+="<a>"+data[i].title+"</a>";

                        text_box[i].innerHTML="";
                        text_box[i].innerHTML+="\
                        <span>"+data[i].content1+"</span>\
                        <span>"+data[i].content2+"</span>\
                        <span>"+data[i].content3+"</span>\
                        <span>"+data[i].content4+"</span>";
                    }
            },
            error:function(stat){
            }
        });
    }

var state=false;
var collected=document.querySelector("#collected");
var href_li=document.querySelectorAll(".other_href_content li");

collected.onclick=function(){
    if(state){
        this.innerHTML="收起∧";
        for(var i=0;i<href_li.length;i++){
            move(href_li[i],{'height':30},500);
        }
        
    }
    else{
        this.innerHTML="展开∨";
         for(var i=0;i<href_li.length;i++){
            move(href_li[i],{'height':0},500);
        }
    }

    state=!state;
}
/*友情链接收缩*/
// $(document).ready(function(){
//     $("#collected").click(function(){
//         $(".other_href_content").slideToggle("slow");
//         if(state){this.innerHTML="收起∧";}
//         else{this.innerHTML="展开∨";}
//         state=!state;
//       });
// });
