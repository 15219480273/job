 var i=0;//保存轮播到第几个图片了
    var index=0;

    var banner_list=document.querySelector("#banner_list");
    var banner_li=document.querySelectorAll("#banner_list li");
    var len=banner_li.length;

    //切换按钮
    var btnL = document.querySelector("#btnL");
    var btnR = document.querySelector("#btnR");

    var width=860;
    //小圆点
    var li_index=document.querySelectorAll("#banner_index span");
    var index_len=li_index.length;
    var timer;


//自动轮播
function banner(){
     timer=setInterval(function(){
        i++;
        if(i==len){
            banner_li[0].style.position="relative";
            banner_li[0].style.left=(width*len)+"px";

            move(banner_list,{'left':-(i*width)},150,function(){
                banner_li[0].style.position="static";
                banner_list.style.left=0;
                i=0;
            });
            index=0;
        }else{
            move(banner_list,{'left':-(i*width)},150);
            index++;
        }
        autolist();
    },3000);
}


banner_list.onmouseover=function(){
    clearInterval(timer);
}

banner_list.onmouseout=function(){
     banner();
}

/*左右切换按钮*/
btnR.onclick=function(){
    if(time()==true){
        i++;
        if(i==len){
            banner_li[0].style.position="relative";
            banner_li[0].style.left=(width*len)+"px";

            move(banner_list,{'left':-(i*width)},150,function(){
                banner_li[0].style.position="static";
                banner_list.style.left=0;
                i=0;
            });
            index=0;
        }else{
            move(banner_list,{'left':-(i*width)},150);
            index++;
        }
        autolist();
    }
        t0=new Date();
}

btnL.onclick=function(){
    if(time()==true){
        i--;
        if(i==-1){

            banner_li[len-1].style.position="relative";
            banner_li[len-1].style.left=-(width*len)+"px";

            move(banner_list,{'left':-(i*width)},150,function(){
                banner_li[len-1].style.position="static";
                banner_list.style.left=-(len-1)*width+"px";
                i=len-1;
            });
            index=(len-1);
        }else{
            move(banner_list,{'left':-(i*width)},150);
            index--;
        }
        autolist();
    }
        t0=new Date();
}
//鼠标移入小圆点，banner切换
for(var t=0;t<index_len;t++){
    (function(t){
        li_index[t].onmouseover=function(){
            i=t;
            index=t;
            move(banner_list,{'left':-(i*width)},150);
            autolist();
        }

    })(t);
}



/*轮播下的li按钮*/
function autolist(){

    for(var j=0;j<index_len;j++){
    li_index[j].className="";
    }
    li_index[index].className+=" active";
}

var t0=new Date();


function time(){
    if(new Date()-t0>500){
        return true;
    }else{
        return false;
    }
}