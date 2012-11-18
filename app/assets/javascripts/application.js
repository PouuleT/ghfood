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

$("#steps li").each(function() {
  $(this).css("height", $(window).height()-170);
});

$("#tl").css("height", $(document).height()-$(window).height()+200);

$("#steps li button").each(function() {
  $(this).css("top", $(window).height()-200);
  $(this).click(function(event) {
    $("body,html").animate({scrollTop : $(this).offset().top}, 800);
  });
});
