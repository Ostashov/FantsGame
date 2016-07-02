function relocation() {
    if (user_id == 0) {
        document.location.href = "/panel/signin";
    } else {
        $('section.content').show();
    }
}