var i=0;
var shown = document.querySelector("article").style;
document.querySelector("h1").addEventListener("click",function (){
															if(i++%2==0){
																shown.display="block";}
															else{shown.display="none";}
														},false);
