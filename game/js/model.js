var playerInputNumber = 2;
var playerInputCounter = 2;

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