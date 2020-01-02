$(document).ready(function(){
    
    setInterval(function(){
	$('img').each(function(){
	    if(!$(this).hasClass("caged")){
		var number = 1 + Math.floor(Math.random() * 11);
		
			var image = chrome.extension.getURL("img/"+number+".gif");		
		
		
		var width = $(this).width();
		var height = $(this).height();
		$(this).addClass("caged");
		$(this).attr("src",image);
		$(this).width(width);
		$(this).height(height);
	    }
	});
    },1000);
});