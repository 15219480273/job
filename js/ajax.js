
/*4-14*/
function ajax(myJson){
        var type=myJson.type||'GET';//设置默认值。传了就用传的，没传就用默认值
        var url=myJson.url;
        var sysn=myJson.sysn||true;
        var data=myJson.data;
        var success=myJson.success;
        var error=myJson.error;

        //数据拼接
        if(typeof data==="object"){
            var str='';
            for(var key in data){
                console.log(key);
                 str+=key+"="+data[key]+"&";
            }
            data=str+"_="+new Date().getTime();//加时间戳，处理缓存
        }else if(typeof data==="string") {
                data=data+"&_="+new Date().getTime();//加时间戳，处理缓存;
            }
        if(data&&/^get$/i.test(type)){/*??????????????*/
            url+="?"+data;
        }

        var xhr=new XMLHttpRequest();
            xhr.open(type,url,sysn);
            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            xhr.send(data);/*??????*/
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4){
                    if(xhr.status>=200&&xhr.status<300){
                        success&&success(xhr.responseText);
                    }else{
                        error&&error(xhr.status);
                    }
                }
            }
        }