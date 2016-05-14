function showListOfPlayers(data){
	$("#listOfPlayers").html('');
	$("#listOfPlayers").html(data);
}

function prepareHead() {
	var navbarRight = $("#personal-header");
	
	if (user_id > 0) {
		navbarRight.html("Привет, " + user_email);
	} else {
		navbarRight.html('<a href="/panel/signin" class="btn btn-primary">Вход</a>');
	}
}