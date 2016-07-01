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

        if ($(this).parent().parent().children(".edit-task-block").is(":hidden")) {
            $(this).parent().parent().children(".edit-task-block").show("fast");
        } else {
            $(this).parent().parent().children(".edit-task-block").hide("fast");
        }

        if ($(this).parent().parent().children(".info-task-block").is(":hidden")) {
            $(this).parent().parent().children(".info-task-block").show("fast");
            $(this).parent().children(".task-level-info").show("fast");
        } else {
            $(this).parent().parent().children(".info-task-block").hide("fast");
            $(this).parent().children(".task-level-info").hide("fast");
        }
    });

    $(".tasks-list").on("click", ".delete-task-btn", function() {
        var task_id = $(this).val();
        deleteTask(task_id);
    });

    $(".tasks-list").on("click", ".edit-task-form-btn", function() {
        var form = $(this).parents("form.edit-task-form");
        updateTask(form.serialize());
    });
});