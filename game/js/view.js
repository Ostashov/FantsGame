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

function addNewPlayerInput() {
    playerInputNumber = playerInputNumber + 1;

    $("table.new-players .plus-player-input-btn:last-child").hide();
    $("table.new-players").append('<tr class="tr-player-' + playerInputNumber + '" style="display:none;">' +
                                        '<td class="td-del-player-btn">' +
                                            '<span class="del-player-btn">' +
                                                '<i class="fa fa-times" aria-hidden="true"></i>' +
                                            '</span>' +
                                        '</td>' +
                                        '<td class="input-player-' + playerInputNumber + '">' +
                                            '<input type="text" name="name-player-' + playerInputNumber + '" placeholder="Имя игрока">' +
                                        '</td>' +
                                        '<td>' +
                                            '<button type="button" class="btn btn-xs btn-default plus-player-input-btn">+</button>' +
                                        '</td>' +
                                   '</tr>');

    $("table.new-players tr:last-child").show("fast");
}