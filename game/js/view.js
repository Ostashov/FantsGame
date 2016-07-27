function showGames() {
    var listOfGames = downloadGames();

    if (!listOfGames) {
        var noGamesHTML = "<tr><td colspan='4'>Не найдено игр</td></tr>";
        $("table.table-with-games tbody").html(noGamesHTML);
    }
}

function showNewGameForm() {
    $(".new-game-form-block").show("fast");
}