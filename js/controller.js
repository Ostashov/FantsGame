jQuery(document).ready(function(){
	showAllPlayers();

	$('#gamers').on('click', '#addPlayerButton', function() {
		addPlayerIntoDB();
		showAllPlayers();
	});

	$('#gamers').on('click', '#showAddPlayerFormBtn', function() {
		$('#addPlayerBlock').show();
		$(this).attr("id", "hideAddPlayerFormBtn");
		$(this).html('Свернуть');
	});

	$('#gamers').on('click', '#hideAddPlayerFormBtn', function() {
		$('#addPlayerBlock').hide();
		$(this).attr("id", "showAddPlayerFormBtn");
		$(this).html('Добавить игрока');
		$("#addPlayerResult").html("");
	});

	$('#listOfPlayers').on('click','.delPlayerBtn', function(){
		//alert('TODO написать удаление игроков');
		deletePlayer($(this).val());
	});

	$('#listOfPlayers').on('click','#showDelPlayerButtonsBtn', function(){
		$('.delButtons').show();
		$(this).attr("id", "hideDelPlayerButtonsBtn");
		$(this).html('Свернуть');
	});

	$('#listOfPlayers').on('click','#hideDelPlayerButtonsBtn', function(){
		$('.delButtons').hide();
		$(this).attr("id", "showDelPlayerButtonsBtn");
		$(this).html('Изменить');
	});
});