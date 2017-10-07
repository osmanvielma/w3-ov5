function myFunction() {
	switch (new Date().getDay()) {
		case 0:
			d1 = "Hoy es domingo";
			break;
		case 1:
		    d1 = "Hoy es lunes";
			break;
		case 2:
			d1 = "Hoy es martes";
			break;
		case 3:
			d1 = "Hoy es miércoles";
			break;
		case 4:
			d1 = "Hoy es jueves";
			break;
		case 5:
			d1 = "Hoy es viernes";
			break;
		case 6:
			d1 = "Hoy es sábado";
			break;
		default:
			d1 = "¿Qué día es hoy?"; 
	}
	document.getElementById("demo").innerHTML = d1;
}