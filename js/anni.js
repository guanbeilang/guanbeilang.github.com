$(document).ready(function(){
    var i = 0,length = $("section").length;
    showNext();
    function showNext(){
	
	console.log($("section:nth-child("+(++i)+")").addClass("shown"));
	if(i<length){
	    setTimeout(showNext,2000);
	}
    }
});
