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

	$("table.new-players").on("input", "input", function() {
		var input = $(this);
		if (isValidPlayerName(input.val())) {
			input.parent().parent().addClass("not-valid");
		} else {
			input.parent().parent().removeClass("not-valid");
		}
	});
});