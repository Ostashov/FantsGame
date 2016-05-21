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

    taskId.innerHTML = task['task_id'];
    taskText.innerHTML = task['task_content'];

    taskInfo.appendChild(taskId);
    taskBlock.appendChild(taskInfo);
    taskBlock.appendChild(taskText);
    element.append(taskBlock);
}