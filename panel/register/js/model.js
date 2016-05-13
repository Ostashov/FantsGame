function register(userEmail, userPass) {
    alert(userEmail + " " + userPass);

	var src = "email=" + userEmail + "&password=" + userPass;
	$.ajax({
		url: "reg.php",
		type: "POST",
		data: src,
		success: function(data) {
			alert(data);
		}
	});
}