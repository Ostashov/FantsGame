jQuery(document).ready(function(){
	showAllPlayers();

	$("#addPlayerButton").click(function() {
		addPlayerIntoDB();
	});
});