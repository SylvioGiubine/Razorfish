$( document ).ready(function() {

	// This function will post the form
	$("#contact").submit(function(e) {
		alert('submit.');
		var url = "path/to/your/backend"; // back-end responsible to handle the post

		$.ajax({
			   type: "POST",
			   url: url,
			   data: $("#contact").serialize(), // serializes the form's elements.
			   success: function(data)
			   {
				   alert(data); // show response from the php script.
			   },
			   error: function(data) 
				{
				  alert("some error");
				}
			 });

		e.preventDefault(); // avoid to execute the actual submit of the form.
	});

});