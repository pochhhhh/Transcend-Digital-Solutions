$(".hover-layer").mouseenter(function(){
	
$(".project-info").css("visibility", "visible");	
$(".project-info").css("margin-top", "-180px");
$("#work-page-project-item-hover-1").css("background", "rgba(0, 0, 0, 0.4)");

//alert($(this).parent().attr('id'));

alert(this.id);




});

$(".project-item").mouseleave(function(){
	
$(".project-info").css("margin-top", "0");
$(".project-info").css("visibility", "hidden");	
$(".hover-layer").css("background", "rgba(0, 0, 0, 0)");

});




