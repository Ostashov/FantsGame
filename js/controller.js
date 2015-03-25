jQuery(document).ready(function(){
	//Add player button
	$("#addButton").click(function() {
		showAddPlayerForm();
	});
	
	//Add player button - OK
	$("#addPlayerButtonOK").click(function() {
		addPlayer();
		hideAddPlayerForm();
	});

	//Delete player
	$(".delButton").click(function() {
		//deletePlayer();
		$(this).parent().remove();
	});
});