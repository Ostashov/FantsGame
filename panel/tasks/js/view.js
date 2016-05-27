function printTask(task) {
    console.log(task);

    var element = $(".tasks-list");
    var taskBlock = document.createElement('div');
    taskBlock.className = "task-block";
    var taskInfo = document.createElement('div');
    taskInfo.className = "task-info";
    var taskId = document.createElement('div');
    taskId.className = "task-id";
    var taskText = document.createElement('div');
    taskText.className = "task-text";
    var taskProperties = document.createElement('div');
    taskProperties.className = "task-properties";

    taskId.innerHTML = "#" + task['task_id'];
    taskText.innerHTML = task['task_content'];

    taskInfo.appendChild(taskId);
    taskInfo.innerHTML += "<button type='button' class='edit-task-btn' value='" + task['task_id'] + "'><i class='fa fa-cog' aria-hidden='true'></i></button>";
    taskInfo.innerHTML += "<button type='button' class='delete-task-btn hidden-btn' value='" + task['task_id'] + "'><i class='fa fa-times' aria-hidden='true'></i></button>";
    taskInfo.innerHTML += '<div class="task-level-info">' + task['task_level'] + '</div>';

    taskProperties.innerHTML = '<div class="task-plus-info">+' + task['task_plus'] + '</div><div class="task-minus-info">-' + task['task_minus'] + '</div>';
    if (task['task_timer'] != 0) {
        taskProperties.innerHTML += '<div class="task-timer-info">' + task['task_timer'] + ' sec.</div>';
    }

    taskBlock.appendChild(taskInfo);
    taskBlock.appendChild(taskText);
    taskBlock.appendChild(taskProperties);
    element.append(taskBlock);
}