jQuery(document).ready(function(){
	showAllPlayers();

	$("#addPlayerButton").click(function() {
		addPlayerIntoDB();
		showAllPlayers();
	});

	$('#showAddPlayerFormBtn').click(function() {
		$('#addPlayerBlock').show();
		$('#showAddPlayerFormBtn').hide();
	});

	$('#hideAddPlayerFormBtn').click(function() {
		$('#addPlayerBlock').hide();
		$('#showAddPlayerFormBtn').show();
	});

	$('#listOfPlayers').on('click','.delPlayerBtn', function(){
		//alert('TODO написать удаление игроков');
		deletePlayer($(this).val());
	});

	$('#listOfPlayers').on('click','#showDelPlayerButtonsBtn', function(){
		$('.delButtons').hide();
		$(this).attr("id", "hideDelPlayerButtonsBtn");
		$(this).html('Свернуть');
	});

	$('#listOfPlayers').on('click','#hideDelPlayerButtonsBtn', function(){
		$('.delButtons').show();
		$(this).attr("id", "showDelPlayerButtonsBtn");
		$(this).html('Изменить');
	});
});