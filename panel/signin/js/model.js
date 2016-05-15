function signIn() {
    var email = $('#userEmail').val();
    var password = $('#userPassword').val();
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    var flag = true;

    if (!email) {
        printMessage($("#userEmailMessage"), "Введите E-mail");
        flag = false;
    } else if (!pattern.test(email)) {
        printMessage($("#userEmailMessage"), "Введите корректный e-mail");
        flag = false;
    } else {
        printMessage($("#userEmailMessage"), "");
    }

    if (!password) {
        printMessage($("#userPasswordMessage"), "Введите пароль");
        flag = false;
    } else {
        printMessage($("#userPasswordMessage"), "");
    }

    if (flag) {
        var src = "email=" + email + "&password=" + password;
        $.ajax({
            url: "../../auth.php",
            type: "POST",
            data: src,
            success: function(data) {
                console.log(data);
                if (data == "1") {
                    document.location.href = "/";
                }
            },
            complete: function() {
            }
        });
    }
}