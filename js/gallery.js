$(document).ready(function(){
	$("#selectCountry").change(function(){
		var value = $("#selectCountry option:selected").val();
		//$('#result').html(value);
		if(value == "all"){
			$(".filter").show("1000");
		} else {
			$(".filter").not("."+value).hide("1000");
			$(".filter").filter("."+value).show("1000");
		}
	});

	$("#selectSize").change(function(){
		var value = $("#selectSize option:selected").val();
		//$('#result').html(value);
		if(value == "all"){
			$(".filter").show("1000");
		} else {
			$(".filter").not("."+value).hide("1000");
			$(".filter").filter("."+value).show("1000");
		}
	});
});
