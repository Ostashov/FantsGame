var playerInputNumber = 2;
var playerInputCounter = 2;
var inputErrorsCounter = 0;
var radioErrorsCounter = 0;

function relocation() {
    if (user_id == 0) {
        document.location.href = "/panel/signin";
    } else {
        $('section.content').show();
    }
}

function downloadGames() {
    var listOfGames = 0;

    return listOfGames;
}

function isValidPlayerName(playerName) {
    var pattern = new RegExp("[^a-zа-яA-ZА-Я0-9 .]");
    return pattern.test(playerName);
}

function getNames() {
    var inputs = $("input[name^='name-player-']");
    var listOfNames = [];

    $.each(inputs, function() {
        listOfNames.push(this.value);
    });

    return listOfNames;
}

function getGenders() {
    var inputs = $("input[name^='gender-player-']:checked");
    var listOfGenders = [];

    $.each(inputs, function() {
        listOfGenders.push(this.value);
    });

    return listOfGenders;
}

function checkExistence(list) {
    var flag = 0;

    if (list.length === 0) flag = 1;

    $.each(list, function() {
        if (this === "") {
            flag = 1;
        }
    });

    return flag;
}

function createGame(gameJSON) {
    $(".ajax-loader").show();
    //alert(JSON.stringify(gameJSON));
}