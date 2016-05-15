function register(userEmail, userPass) {
    var src = "email=" + userEmail + "&password=" + userPass;
    $.ajax({
        url: "../../reg.php",
        type: "POST",
        data: src,
        success: function(data) {
            resultHandler(data);
            console.log(data);
            if (data == "1") {
                document.location.href = "/panel/signin";
            }
        },
        complete: function() {
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
        case "1":
            break;
        default:
            break;
    }
}