function fWhatDayToday() {
	switch (new Date().getDay()) {
		case 0:
			DayToday1 = "Hoy es domingo";
			break;
		case 1:
		    DayToday1 = "Hoy es lunes";
			break;
		case 2:
			DayToday1 = "Hoy es martes";
			break;
		case 3:
			DayToday1 = "Hoy es miércoles";
			break;
		case 4:
			DayToday1 = "Hoy es jueves";
			break;
		case 5:
			DayToday1 = "Hoy es viernes";
			break;
		case 6:
			DayToday1 = "Hoy es sábado";
			break;
		default:
			DayToday1 = "¿Qué día es hoy?"; 
	}
}