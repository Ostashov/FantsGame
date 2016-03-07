function addPlayerIntoDB(){
	var src = $("#addPlayerForm").serialize();
	$.ajax({
		url: "addPlayer.php",
		type: "POST",
		data: src,
		success: function() {
			$("#addPlayerResult").html("Player added");
		}
	});
}

function showAllPlayers(){
	
}