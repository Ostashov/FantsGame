jQuery(document).ready(function(){

	showGames();

	$(".add-new-game-btn").click(function() {
		showNewGameForm();
	});

	$("table.new-players").on("click", ".plus-player-input-btn", function() {
		addNewPlayerInput();
	});

	$("table.new-players").on("click", ".del-player-btn", function() {
		deleteNewPlayerInput($(this));
	});
});