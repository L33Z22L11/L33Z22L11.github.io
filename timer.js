function leftTimer(year,month,day,hour,minute,second){ 
	  var leftTime = (new Date(year,month-1,day,hour,minute,second)) - (new Date()); //����ʣ��ĺ����� 
	  var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //����ʣ������� 
	  var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //����ʣ���Сʱ 
	  var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//����ʣ��ķ��� 
	  var seconds = parseInt(leftTime / 1000 % 60, 10);//����ʣ������� 
	  days = checkTime(days); 
	  hours = checkTime(hours); 
	  minutes = checkTime(minutes); 
	  seconds = checkTime(seconds); 
	  setInterval("leftTimer(2016,11,11,11,11,11)",1000); 
	  document.getElementById("timer").innerHTML = days+"��" + hours+"Сʱ" + minutes+"��"+seconds+"��";  
} 
function checkTime(i){ //��0-9������ǰ�����0����1��Ϊ01 
	if(i<10) 
	  { 
	    i = "0" + i; 
	  } 
	  return i; 
} 
