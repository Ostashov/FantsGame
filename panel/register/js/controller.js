jQuery(document).ready(function(){
    $("#userEmailForm").hide();
    $("#userRegisterBtn").hide();

    $("#userRegisterForm").on("click", "#userRegisterNextBtn", function() {
        var login = $('#userLogin').val();
        var password = $('#userPassword').val();
        var password2 = $('#userPassword2').val();
        
        if (!login) {
            printMessage($("#userLoginMessage"), "Введите логин");
        } else {
            printMessage($("#userLoginMessage"), "");
        }

        if (!password) {
            printMessage($("#userPasswordMessage"), "Введите пароль");
        } else {
            printMessage($("#userPasswordMessage"), "");
        }

        if (!password2) {
            printMessage($("#userPassword2Message"), "Введите пароль ещё раз");
        } else if (password != password2) {
            printMessage($("#userPassword2Message"), "Пароли не совпадают");
        } else {
            if (login != '' & password != '') {
                $("#userLoginForm").hide();
                $("#userPasswordForm").hide();
                $("#userPassword2Form").hide();
                $("#userRegisterNextBtn").hide();
                $("#userEmailForm").show();
                $("#userRegisterBtn").show();
            }
        }
    });

    $("#userRegisterForm").on("click", "#userRegisterBtn", function() {
        var login = $('#userLogin').val();
        var password = $('#userPassword').val();
        var email = $('#userEmail').val();
        
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

        if (!email) {
            printMessage($("#userEmailMessage"), "Введите e-mail");
        } else if (!pattern.test(email)) {
            printMessage($("#userEmailMessage"), "Введите корректный e-mail");
        } else {
            register(login, password, email);
        }

    });
});