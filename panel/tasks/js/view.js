function printTask(task) {
    console.log(task);

    var element = $(".tasks-list");
    var taskBlock = document.createElement('div');
    taskBlock.className = "task-block";

    var editTaskBlock = document.createElement('div');
    editTaskBlock.className = "edit-task-block";
    editTaskBlock.style.display = "none";
    editTaskBlock.innerHTML = '<form class="edit-task-form">' +
                                    '<div class="form-group">' +
                                        '<div class="row">' + 
                                            '<div class="col-md-3">' +
                                                '<label for="taskLevel">Сложность:</label>' +
                                                '<select name="taskLevel" >' +
                                                    '<option value="1">1</option>' +
                                                    '<option value="2">2</option>' +
                                                    '<option value="3">3</option>' +
                                                    '<option value="4">4</option>' +
                                                    '<option value="5">5</option>' +
                                                '</select>' +
                                            '</div>' +
                                            '<div class="col-md-3">' +
                                                '<label for="">Категория</label>' +
                                                '<select name="taskCategory" id="">' +
                                                    '<option value="1">Обычная</option>' +
                                                '</select>' +
                                            '</div>' +
                                        '</div>' +

                                        '<input type="text" name="taskID" value="'+ task['task_id'] +'" hidden />' +
                                        '<label for="taskText" class="control-label">Текст задания:</label>' +
                                        '<textarea name="taskText" class="form-control">' + task['task_content'] + '</textarea>' +

                                        '<div class="row">' +
                                            '<div class="col-md-2">' +
                                                '<label for="taskPlus" class="control-label">Плюс:</label>' +
                                                '<input type="text" name="taskPlus" class="form-control" value="'+ task['task_plus'] +'" />' +
                                            '</div>' +
                                            '<div class="col-md-2">' +
                                                '<label for="taskMinus" class="control-label">Минус:</label>' +
                                                '<input type="text" name="taskMinus" class="form-control" value="'+ task['task_minus'] +'" />' +
                                            '</div>' +
                                            '<div class="col-md-2 col-md-offset-6">' +
                                                '<label for="taskTimer">Время (сек.):</label>' +
                                                '<input type="text" name="taskTimer" class="form-control" value="'+ task['task_timer'] +'">' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>' +
                                    '<input type="button" class="btn btn-success edit-task-form-btn" value="Изменить">' +
                                '</form>';



    var infoTaskBlock = document.createElement('div');
    infoTaskBlock.className = "info-task-block";
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
    infoTaskBlock.appendChild(taskText);
    infoTaskBlock.appendChild(taskProperties);
    taskBlock.appendChild(editTaskBlock);
    taskBlock.appendChild(infoTaskBlock);
    element.append(taskBlock);
    $(".edit-task-form").last().find("select[name='taskLevel'] option[value='"+ task['task_level'] +"']").attr("selected", "selected");
    $(".edit-task-form").last().find("select[name='taskCategory'] option[value='"+ task['task_category'] +"']").attr("selected", "selected");
}