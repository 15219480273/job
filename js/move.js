//运动函数时间版
function move(obj,mJson,time,callBack){
	clearInterval(obj.timer);
	var sNum={};
	for(var i in mJson)sNum[i]=parseFloat(gStyle(obj,i));
	var sTime = new Date();
	obj.timer=setInterval(function(){
		var nTime = new Date();
		var t_=nTime-sTime;
		if(t_>=time){
			t_=time;
			clearInterval(obj.timer);
			for(var i in mJson) obj.style[i]=mJson[i]+'px';
				callBack&&callBack();
		}else{
			for(var i in mJson) obj.style[i]=(parseFloat(mJson[i])-sNum[i] )*t_ / time+sNum[i]+'px';
		}
	},13);

	function gStyle(obj,attr){
		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
	}
}

//书上-----------运动函数时间版
// function move2(obj,mJson,time,callBack){
// 	clearInterval(obj.timer);
// 	var sNum={};
// 	for(var i in mJson)sNum[i]=parseFloat(gStyle(obj,i));
// 	var sTime = new Date();
// 	obj.timer=setInterval(function(){
// 		var nTime = new Date();
// 		var t_=nTime-sTime;
// 		if(t_>=time){
// 			t_=time;
// 			clearInterval(obj.timer);
// 			for(var i in mJson) obj.style[i]=mJson[i]+'px';
// 				callBack&&callBack();
// 		}else{
// 			for(var i in mJson) obj.style[i]=(parseFloat(mJson[i])-sNum[i] )*t_ / time+sNum[i]+'px';
// 		}
// 	},13);

// 	function gStyle(obj,attr){
// 		return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
// 	}
// }