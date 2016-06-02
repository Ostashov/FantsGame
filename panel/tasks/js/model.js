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

function printTasks(tasks) {
    if (tasks) {
        $(".tasks-list").html("");
        for (var i = 0; i < tasks.length; i++) {
            printTask(tasks[i]);
        }
    } else {
        $(".tasks-list").html("Не найдено подходящих заданий");
    }
}

function downloadTasks(category) {
    var src = 'category=' + category;
    $.ajax({
        url: "/panel/tasks/downloadTasks.php",
        type: "POST",
        data: src,
        success: function(response) {
            console.log(response.data);
            printTasks(response.data);
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

function deleteTask(task_id) {
    $.ajax({
        url: "/panel/tasks/deleteTask.php",
        type: "POST",
        data: "task_id=" + task_id,
        success: function(response) {
            if (response == "1") {
                $(".delete-task-btn[value="+task_id+"]").parent().parent().empty();
            }
        }
    });
}