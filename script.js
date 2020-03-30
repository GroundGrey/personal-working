//1
var modal= document.getElementById("myModal");
var btn = document.getElementById("myTap");
var span =document.getElementsByClassName("close")[0];

btn.onclick = function(){
  modal.style.display ="block";
}
span.onclick = function(){
  modal.style.display =" none";
}

//2
var modal2= document.getElementById("myModal2");
var btn2 = document.getElementById("myTap2");
var span2 =document.getElementsByClassName("close2")[0];

btn2.onclick = function(){
  modal2.style.display ="block";
}
span2.onclick = function(){
  modal2.style.display =" none";
}

//3
var modal3= document.getElementById("myModal3");
var btn3= document.getElementById("myTap3");
var span3 =document.getElementsByClassName("close3")[0];

btn3.onclick = function(){
  modal3.style.display ="block";
}
span3.onclick = function(){
  modal3.style.display =" none";
}

//4

var modal4= document.getElementById("myModal4");
var btn4= document.getElementById("myTap4");
var span4 =document.getElementsByClassName("close4")[0];

btn4.onclick = function(){
  modal4.style.display ="block";
}
span4.onclick = function(){
  modal4.style.display =" none";
}
//5

var modal5= document.getElementById("myModal5");
var btn5 = document.getElementById("myTap5");
var span5 =document.getElementsByClassName("close5")[0];

btn5.onclick = function(){
  modal5.style.display ="block";
}
span5.onclick = function(){
  modal5.style.display =" none";
}

//6
var modal6= document.getElementById("myModal6");
var btn6 = document.getElementById("myTap6");
var span6 =document.getElementsByClassName("close6")[0];

btn6.onclick = function(){
  modal6.style.display ="block";
}
span6.onclick = function(){
  modal6.style.display =" none";
}

//7
var modal7= document.getElementById("myModal7");
var btn7 = document.getElementById("myTap7");
var span7 =document.getElementsByClassName("close7")[0];

btn7.onclick = function(){
  modal7.style.display ="block";
}
span7.onclick = function(){
  modal7.style.display =" none";
}

// 點擊任一位置關閉視窗
window.onclick = function(event){
  if(event.target == modal||event.target == modal2||event.target == modal3||event.target == modal4||event.target == modal5||event.target == 
modal6||event.target == modal7){
    modal.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";           modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
    modal7.style.display = "none";    
  }
}