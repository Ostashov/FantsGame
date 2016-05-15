jQuery(document).ready(function(){
	checkAuth();
	if (user_id > 0) {
		document.location.href = "/";
	}

    $('#userSignInBtn').on('click', function() {
        signIn();
    });
});