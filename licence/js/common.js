$(function () {

	var numb1 = 13,
		numb2 = 22,
		numb3 = 34;

	var selectedOption 

	$("#selecting").change(function(){
		selectedOption = $("#selecting").find(":selected").text();


		$("#inp1").click(function () {
			if ($(this).is(":checked")) {
				$("#h1").html("$" + numb1 * selectedOption);
				$("#p1").html(" #1");
			} 
		})
		
		$("#inp2").click(function () {
			if ($(this).is(":checked")) {
				$("#h1").html("$" + numb2 * selectedOption);
				$("#p1").html(" #2");
			}
		})
		
		$("#inp3").click(function () {
			if ($(this).is(":checked")) {
				$("#h1").html("$" + numb3 * selectedOption);
				$("#p1").html(" #3");
			}
		})
		
	})


	$("#inp1, #inp2,y #inp3").click(function () {

		if ($("#selecting").val() == 0) {

			alert('Please choose a number of lisence');

		}

	})


});