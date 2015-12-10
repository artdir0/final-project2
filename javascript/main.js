/* CURRENTLY IN: javascript/main.js */

var a = $(".title");
console.log(a);

// select the el

// on click event
// when item is clicked console.log(here);

// $(".title-text").on('click', function(){
// 	alert( "clicked ");
// });


function test(){
	console.log( "clicked");
};

$(".title-text").on('click', test );

$("input").on('keypress',function(e){
	if(e.which === 13 ){
		var b = $(".js-click").val();
		console.log(b);
	}
});