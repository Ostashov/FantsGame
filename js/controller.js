jQuery(document).ready(function(){
	showAllPlayers();

	$("#addPlayerButton").click(function() {
		addPlayerIntoDB();
		showAllPlayers();
		$('#addPlayerBlock').hide();
		$('#showAddPlayerFormBtn').show();
	});

	$('#showAddPlayerFormBtn').click(function() {
		$('#addPlayerBlock').show();
		$('#showAddPlayerFormBtn').hide();
	});

	$('#hideAddPlayerFormBtn').click(function() {
		$('#addPlayerBlock').hide();
		$('#showAddPlayerFormBtn').show();
	});

	$('.delPlayerBtn').on('click', function() {
		alert('a');
	});
});