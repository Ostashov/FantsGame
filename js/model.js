function addPlayerIntoDB(){
	var form = $("#addPlayerForm");
	var src = form.serialize();
	if ($('#playerNameInput').val() != 0 & form.find("input:radio:checked").length != 0) {
		$.ajax({
			url: "addPlayer.php",
			type: "POST",
			data: src,
			success: function() {
				$("#addPlayerResult").html("Игрок добавлен");
			}
		});
		$(':input','#addPlayerForm')
		.not(':button, :submit, :reset, :hidden')
		.val('')
		.removeAttr('checked')
		.removeAttr('selected');
	} else {
		$("#addPlayerResult").html("Заполните все формы");
	}
}

function showAllPlayers(){
	$.ajax({
		url: "showAllPlayers.php",
		type: "POST",
		//data: "*",
		success: function(data) {
			showListOfPlayers(data);
		}
	});
}