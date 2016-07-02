function showGames() {
    var listOfGames = downloadGames();

    if (!listOfGames) {
        var noGamesHTML = "<tr><td colspan='3'>Не найдено игр</td></tr>";
        $("table.table-with-games tbody").html(noGamesHTML);
    }
}