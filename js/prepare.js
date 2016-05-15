var user_id = 0;
var user_email = "";
var user_rules = 0;
var user_isVerified = 0;

checkAuth();

function checkAuth() {
    $.ajax({
        url: "/checkAuth.php",
        type: "POST",
        success: function(response) {
            prepare(response);
        },
        complete: function() {
            prepareHead();
        },
        dataType: "json"
    });
}

function prepare(response) {
    if (response[0] > 0) {
        user_id = response[0];
        user_email = response[1];
        user_rules = response[2];
        user_isVerified = response[3];
    }
}

function prepareHead() {
    var navbarRight = $("#personal-header");
    var navbarHTML = "";

    if (user_id > 0) {
        navbarHTML = user_email;
        navbarHTML += ' <a href="/logout.php"><i class="fa fa-sign-out" aria-hidden="true"></i></a>';
        navbarRight.html(navbarHTML);
    } else {
        navbarHTML = '<a href="/panel/signin" class="btn btn-primary">Вход</a>';
        navbarRight.html(navbarHTML);
    }
}