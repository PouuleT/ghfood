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

$("#steps .li-height").each(function() {
  $(this).css("height", $(window).height()-170);
});

$(document).ready(function(event) {
	/*$("#tl").mouseover(function(){
		$(document).mousemove(function(e){
      if(e.pageX<100 && e.pageX>25) {
      	$('#arrow').css("left", 78);
      	$('#arrow').css("top", e.pageY-50);
      }
  	});
		$(document).click(function(e){
 			alert("On transmet les coordonnées : "+e.pageY);
  	});
 	});*/

	$(".circle").mouseover(function(){
      	$('.circle').css("border", "5px solid #3B5998");
 	});
	$(".circle").mouseout(function(){
      	$('.circle').css("border", "5px solid white");
 	});
});

$("#tl").css("height", $(document).height()-$(window).height()+200);

$("#steps li button").each(function() {
  $(this).css("top", $(window).height()-200);
  $(this).click(function(event) {
    $("body,html").animate({scrollTop : $(this).offset().top}, 800);
  });
});

$(".li-none").each(function() {
  $(this).css("top", $(window).height()-200);
  $(this).css("height", $(window).height()-250);
 // $(this).css("width", $(window).height()-300);
});

$("#iphone").click(function() {
	window.location = "someLink://yourApp/form_Submitted:param1:param2:param3";
	return true;
});