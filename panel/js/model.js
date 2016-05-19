function relocation() {
	if (user_id == 0) {
		document.location.href = "/panel/signin";
	}

	printLeftMenu(); // Костыль, чтобы user_id сохранился
}