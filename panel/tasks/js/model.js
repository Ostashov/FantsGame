function relocation() {
    if (user_id == 0) {
        document.location.href = "/panel/signin";
    }
    if (user_rules != 700) {
        document.location.href = "/";
    } else {
        $('section.content').show();
    }
}

function downloadTasks() {
    
}