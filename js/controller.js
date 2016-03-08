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
});