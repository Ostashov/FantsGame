jQuery(document).ready(function(){
    printTasks();

    $("#add-task-head").on("click", function() {
        $("#add-task-body").show();
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
});