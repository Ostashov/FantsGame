function relocation() {
    if (user_id == 0) {
        document.location.href = "/panel/signin";
    }
    if (user_rules != 700) {
        document.location.href = "/panel";
    } else {
        $('section.content').show();
    }
}

function printTasks() {
	var tasks = downloadTasks();
	//printTask();
}

function downloadTasks() {
    $.ajax({
        url: "/panel/tasks/downloadTasks.php",
        type: "POST",
        success: function(response) {
        },
        complete: function() {
        },
        dataType: "json"
    });
}

function addTask() {
    var src = $("#add-task-form").serialize();
    $.ajax({
            url: "addTask.php",
            type: "POST",
            data: src,
            success: function(response) {
                console.log(response);
                $("#result-block").html("Задание добавлено");
            }
        });
}