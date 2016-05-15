jQuery(document).ready(function(){
    if (user_id > 0) {
        document.location.href = "/";
    }

    $("#userRegisterForm").on("click", "#userRegisterBtn", function() {
        var password = $('#userPassword').val();
        var password2 = $('#userPassword2').val();
        var email = $('#userEmail').val();
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        var flag = true;

        if (!password) {
            printMessage($("#userPasswordMessage"), "Введите пароль");
            flag = false;
        } else {
            printMessage($("#userPasswordMessage"), "");
            flag = flag & true;
        }

        if (!password2) {
            printMessage($("#userPassword2Message"), "Введите пароль ещё раз");
            flag = false;
        } else if (password != password2) {
            printMessage($("#userPassword2Message"), "Пароли не совпадают");
            flag = false;
        } else {
            printMessage($("#userPassword2Message"), "");
            flag = flag & true;
        }

        if (!email) {
            printMessage($("#userEmailMessage"), "Введите e-mail");
            flag = false;
        } else if (!pattern.test(email)) {
            printMessage($("#userEmailMessage"), "Введите корректный e-mail");
            flag = false;
        } else {
            printMessage($("#userEmailMessage"), "");
            flag = flag & true;
        }

        if (flag) {
            register(email, password);
        }
    });
});