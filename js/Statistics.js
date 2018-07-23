/*在线职位统计ＪＳ*/

function zero(num){//补零函数
		if(num<10){
			return "0"+num;
		}else{
			return num;
		}
	};

function Statistics(){
	//获取时间对象
	var aLi= document.querySelectorAll("#List li");
	var date = new Date();
	var hours = date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();

	//补零凑两位
	var str=zero(hours)+""+zero(minutes)+""+zero(seconds);

	for(var i=0;i<aLi.length;i++){
		aLi[i].getElementsByTagName("img")[0].index = str.charAt(i);

		aLi[i].getElementsByTagName("img")[0].src="images/Statistics/"+str.charAt(i)+".png";
		play(aLi[i],i);
	}
}

	function play(objLi,i){
		var num=0;
		setInterval(function(){
			var date = new Date();
			var hours = date.getHours();
			var minutes=date.getMinutes();
			var seconds=date.getSeconds();
			var str2=zero(hours)+""+zero(minutes)+""+zero(seconds);
			var aImg=objLi.getElementsByTagName("img");

			if(str2.charAt(i)!=aImg[num].index){

				move(aImg[num],{'top':-61},500);
				if(num==1){
					aImg[num-1].src="images/Statistics/"+str2.charAt(i)+".png";
					aImg[num-1].index=str2.charAt(i);
					move(aImg[num-1],{top:0},500,function(){
						aImg[num].style.top="61px";
						num--;
					});
				}else{
					aImg[num+1].src="images/Statistics/"+str2.charAt(i)+".png";
					aImg[num+1].index=str2.charAt(i);
					move(aImg[num+1],{top:0},500,function(){
						aImg[num].style.top="61px";
						num++;
					});
				}
			}
		},1000);
	};