var user_id = 0;
var user_email = "";
var user_rules = 0;
var user_isVerified = 0;

function checkAuth() {
    $.ajax({
        url: "checkAuth.php",
        type: "POST",
        success: function(response) {
            if (response[0] > 0) {
                user_id = response[0];
                user_email = response[1];
                user_rules = response[2];
                user_isVerified = response[3];
            }
        },
        complete: function() {
            prepareHead();
        },
        dataType: "json"
    });
}