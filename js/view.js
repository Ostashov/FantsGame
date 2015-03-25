jQuery(document).ready(function(){

});

function showAddPlayerForm() {
	var playersList = $("#playersList");
	var addPlayerForm = $("#addPlayerForm");
	addPlayerForm.show();
}

function hideAddPlayerForm() {
	$("#addPlayerForm").hide();
}