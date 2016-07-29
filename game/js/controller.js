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
			if (!input.hasClass("invalid-name")) {
				inputErrorsCounter += 1;
			}
			checkMessages();
			input.addClass("invalid-name");
			input.parent().parent().addClass("danger");
		} else {
			inputErrorsCounter -= 1;
			checkMessages();
			input.removeClass("invalid-name");
			input.parent().parent().removeClass("danger");
		}

		if ((inputErrorsCounter !== 0) & (radioErrorsCounter !== 0)) {
			$(".add-game-btn").attr('disabled',true);
		} else {
			$(".add-game-btn").attr('disabled',false);
		}
	});


});