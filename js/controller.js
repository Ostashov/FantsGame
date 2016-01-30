jQuery(document).ready(function(){
	$("#addPlayerButton").click(function() {
		var src = $("#addPlayerForm").serialize();
		$.ajax({
			url: "addPlayer.php",
			type: "POST",
			data: src,
			success: function() {
				$("#addPlayerResult").html("Игрок успешно добавлен");
			}
		});
	});
});