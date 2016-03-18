function signIn() {
    var login = $('#adminLogin').val();
    var password = $('#adminPassword').val();
    if (!login) {
        printMessage($("#adminLoginMessage"), "Введите логин");
    } else {
        printMessage($("#adminLoginMessage"), "");
    }

    if (!password) {
        printMessage($("#adminPasswordMessage"), "Введите пароль");
    } else {
        printMessage($("#adminPasswordMessage"), "");
    }

    if (!login & !password) {
        alert('TODO ajax');
    }
}