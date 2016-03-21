jQuery(document).ready(function(){
    $("#userEmailForm").hide();
    $("#adminRegisterBtn").hide();

    $("#userRegisterForm").on("click", "#userRegisterNextBtn", function() {
        $("#userLoginForm").hide();
        $("#userPasswordForm").hide();
        $("#userRegisterNextBtn").hide();
        $("#userEmailForm").show();
        $("#adminRegisterBtn").show();
    });
});