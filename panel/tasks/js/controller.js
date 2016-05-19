jQuery(document).ready(function(){
    printTasks();

    $("#add-task-head").on("click", function() {
    	$("#add-task-body").show();
    });
});