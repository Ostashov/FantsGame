jQuery(document).ready(function(){
    $("#add-task-head").on("click", function() {
        if ($("#add-task-body").is(":hidden")) {
            $("#add-task-body").show("fast");
        } else {
            $("#add-task-body").hide("fast");
        }
    });

    $("#add-task-btn").on("click", function() {
        var flag = true;
        if (!($("#task-text").val())) {
            flag = false;
            $("#task-text").parent().addClass("has-error");
        } else {
            $("#task-text").parent().removeClass("has-error");
        }

        if (!($("#task-plus").val())) {
            flag = false;
            $("#task-plus").parent().addClass("has-error");
        } else {
            $("#task-plus").parent().removeClass("has-error");
        }

        if (!($("#task-minus").val())) {
            flag = false;
            $("#task-minus").parent().addClass("has-error");
        } else {
            $("#task-minus").parent().removeClass("has-error");
        }

        if (!flag) {
            $("#result-block").html("Заполните все поля");
        } else {
            $("#result-block").html("");
            addTask();
        }
    });

    $("#tasksShowBtn").on("click", function() {
        var category = $("#task-category-show").val();
        downloadTasks(category);
    });

    $(".tasks-list").on("click", ".edit-task-btn", function() {
        if ($(this).next(".delete-task-btn").is(":hidden")) {
            $(this).next(".delete-task-btn").show();
        } else {
            $(this).next(".delete-task-btn").hide();
        }

        if ($(this).parent().next(".edit-task-block").is(":hidden")) {
            $(this).parent().next(".edit-task-block").show();
        } else {
            $(this).parent().next(".edit-task-block").hide();
        }
    });

    $(".tasks-list").on("click", ".delete-task-btn", function() {
        var task_id = $(this).val();
        deleteTask(task_id);
    });
});