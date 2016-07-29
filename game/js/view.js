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
    if (playerInputCounter >= 10) {
        $(".warning-msg").html("Максимум 10 игроков!");
    } else {
        $(".warning-msg").html("");
        
        playerInputNumber = playerInputNumber + 1;
        playerInputCounter = playerInputCounter + 1;

        $("table.new-players .plus-player-input-btn:last-child").hide("fast");
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
                                                '<label class="radio-inline">' +
                                                    '<input type="radio" name="gender-player-' + playerInputNumber + '" value="male"> м' +
                                                '</label>' +
                                                '<label class="radio-inline">' +
                                                    '<input type="radio" name="gender-player-' + playerInputNumber + '" value="female"> ж' +
                                                '</label>' +
                                            '</td>' +
                                            '<td>' +
                                                '<button type="button" class="btn btn-xs btn-default plus-player-input-btn">+</button>' +
                                            '</td>' +
                                       '</tr>');

        $("table.new-players tr:last-child").show("fast");
    }
}

function deleteNewPlayerInput(delButton) {
    if (playerInputCounter < 3) {
        $(".warning-msg").html("Минимум 2 игрока!");
    } else {
        $(".warning-msg").html("");

        delButton.parent().parent().empty().remove();
        $("table.new-players tr:last-child .plus-player-input-btn").show("fast");

        playerInputCounter = playerInputCounter - 1;

        if (playerInputCounter >= 10) {
            $(".warning-msg").html("Максимум 10 игроков!");
        } else {
            $(".warning-msg").html("");
        }
    }
}