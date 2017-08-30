


$(document).ready(function() {



	$("h1").fadeOut(1000);
	$("h1").fadeIn(1000);

	$(".box").click(function() {

		$(".box").animate({
			width: 500,
			height: 500,
		}, 2000, function () {

			$(".box").animate({
				width: 100,
				height: 100,
				opacity: .4
			}, 2000);
		});

	});

});

$("p").css ("color", "green");

$("#button2").click(function() {
    $(".hidden").fadeIn(1000);
});

$("#submit-button").click(function(){
	var username = $("#user-field").val();
	console.log("username")
	Cookies.set("username", username);
});

var username = Cookies.get("username");
if (username){
	alert ("hello" + username);
}

$(window).scroll(function(){
	$(".hidden").show();
	$(".dog2").fadeIn(6000);
});



$("#box1").click(function(){
	$("#box1").addClass("red");
});

$("#box2").hover(function(){
	$("#box2").addClass("yellow");
});

$("#button2").click(function(){
	$(".slide").slideDown("slow", function(){

	});
});

$("#button1").click(function(){
	$(".slide").slideUp("slow", function(){

	});
});

$("#button1").click(function(){
	$(".dog2").slideUp("slow", function(){

	});
});


$(window).scroll(function() {
console.log($(window).scrollTop());

});


