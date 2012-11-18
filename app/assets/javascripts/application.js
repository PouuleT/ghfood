// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require scrollTo-min
//= require twitter/bootstrap
//= require_tree .
//
//
$("button#go").click(function(event) {
  $("body,html").animate({scrollTop : $("#tl").offset().top - 80}, 800);
});

$(document).ready(function(event) {
	$("#tl").mouseover(function(){
		$(document).mousemove(function(e){
      if(e.pageX<100 && e.pageX>25) {
      	$('#arrow').css("left", 78);
      	$('#arrow').css("top", e.pageY-50);
      }
  	});
		$(document).click(function(e){
 			alert("On transmet les coordonnées : "+e.pageY);
  	});
 	});

	$(".circle").mouseover(function(){
		//$(document).mousemove(function(e){
      //if(e.pageX<100 && e.pageX>25 && e.pageY>200 && e.pageY>250) {
      	$('.circle').css("border", "5px solid #a5a7ff");
      	//$('#arrow').css("top", e.pageY-50);
      //}
  	//});
 	});
	$(".circle").mouseout(function(){
		//$(document).mousemove(function(e){
      //if(e.pageX<100 && e.pageX>25 && e.pageY>200 && e.pageY>250) {
      	$('.circle').css("border", "5px solid white");
      	//$('#arrow').css("top", e.pageY-50);
      //}
  	//});
 	});
});
//#a5a7ff