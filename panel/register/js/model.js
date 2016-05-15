function register(userEmail, userPass) {
    var src = "email=" + userEmail + "&password=" + userPass;
    $.ajax({
        url: "../../reg.php",
        type: "POST",
        data: src,
        success: function(data) {
            resultHandler(data);
        },
        complete: function() {
            checkAuth();
            if (user_id > 0) {
                document.location.href = "/";
            }
        }
    });
}

function resultHandler(data) {
    switch (data) {
        case "exists":
            printMessage($("#userEmailMessage"), "E-mail занят");
            printMessage($("#userPasswordMessage"), "");
            printMessage($("#userPassword2Message"), "");
            $("#userPassword").val('');
            $("#userPassword2").val('');
            break;
        case "added":
            break;
        default:
            break;
    }
}