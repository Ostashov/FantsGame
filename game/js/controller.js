jQuery(document).ready(function(){

    showGames();

    $(".add-new-game-btn").click(function() {
        showNewGameForm();
    });

    $("table.new-players").on("click", ".plus-player-input-btn", function() {
        addNewPlayerInput();
    });

    $("table.new-players").on("click", ".del-player-btn", function() {
        deleteNewPlayerInput($(this));
    });

    $("table.new-players").on("input", "input", function() {
        var input = $(this);
        var tr = input.parent().parent();
        if (isValidPlayerName(input.val())) {
            if (!input.hasClass("invalid-name")) {
                inputErrorsCounter += 1;
            }
            checkMessages();
            input.addClass("invalid-name");
            tr.addClass("danger");
        } else {
            inputErrorsCounter -= 1;
            checkMessages();
            input.removeClass("invalid-name");

            if (!tr.find("input.no-gender").length & !tr.find("input.invalid-name").length) {
                tr.removeClass("danger");
            }
        }

        checkButton();
    });

    $("table.new-players").on("focusout", "input", function() {
        var tr = $(this).parent().parent();
        genderCheck(tr);
    });

    $("table.new-players").on("change", "input:radio", function() {
        var tr = $(this).parent().parent().parent();
        genderCheck(tr);
    });

    function genderCheck(tr) {
        var radio = tr.find("input[name^='gender-player-']");
        if (!tr.find("input[name^='gender-player-']:checked").length) {
            if (!radio.hasClass("no-gender")) {
                radioErrorsCounter += 1;
            }
            radio.addClass("no-gender");
            tr.addClass("danger");
            checkMessages();
        } else {
            if (radio.hasClass("no-gender")) {
                radioErrorsCounter -= 1;
            }
            radio.removeClass("no-gender");
            checkMessages();

            if (!tr.find("input.no-gender").length & !tr.find("input.invalid-name").length) {
                tr.removeClass("danger");
            }
        }

        checkButton();
    }

    $("#add-game-btn").click(function() {
        var listOfNames = getNames();
        var listOfGenders = getGenders();
        var errorFlag = false;

        errorFlag = errorFlag || checkExistence(listOfNames) || checkExistence(listOfGenders);

        if (!errorFlag) {
            alert("Все хорошо");
        } else {
            alert("Что-то не так");
        }
    });


});