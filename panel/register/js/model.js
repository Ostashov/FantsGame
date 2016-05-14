function register(userEmail, userPass) {
    alert(userEmail + " " + userPass);

    var src = "email=" + userEmail + "&password=" + userPass;
    $.ajax({
        url: "../../reg.php",
        type: "POST",
        data: src,
        success: function(data) {
            resultHandler(data);
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