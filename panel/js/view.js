function printLeftMenu() {
	var leftMenu = $("div.menu-left div.list-group");
	console.log(leftMenu);
	if (user_rules == 700) {
		leftMenu.append('<a href="/panel/tasks" class="list-group-item">Задания</a>');
	}

	leftMenu.append('<a href="/game" class="list-group-item">Мои игры</a>');
}