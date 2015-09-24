//Random yo le tengo que pasar MAX y MIN
//Arreglo de opciones
var valores = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
//Asignamos en una variable la medida del Arreglo "valores" para posteriormente
//utilizarla para el Math random
var maximo = valores.length
//Imprimimos en consola cuantos elementos tiene mi arregle
console.log("Mis elementos son:" + maximo);
//Obtenemos un número random entre el número de elementos del arreglo y 0
var num = Math.random() * (maximo-0)
//Establecemos el objecto random sin decimales
var sinDecimales = Math.floor((num)-0);
console.log(num)
console.log(sinDecimales)
console.log("La computadora eligió:" + valores[sinDecimales])
//Extraemos del arreglo "valores" el elemento correspondiente según los que
//nos haya devuelto el random
var computadora = valores[sinDecimales]
//Utilizamos la función switch para evaluar el contenido almacenado en la variable
//computadora y con base en ese valor ejecutar otra instrucción según el case 
//correspondiente
switch(computadora) {
	//Si computadora devuelve "Piedra"
	case "Piedra":
		alert("La computadora escogió una piedra")
		break;
	//Si computadora devuelve "Papel"
	case "Papel":
		alert("La computadora escogió una papel")
		break;
	//Si computadora devuelve "Tijeras"
	case "Tijeras":
		alert("La computadora escogió una tijeras")
		break;
	//Si computadora devuelve "lagarto"
	case "Lagarto":
		alert("La computadora escogió una lagarto")
		break;
	//Si computadora devuelve cualquier otro valor que este fuera de las
	//opciones de los case
	default:
		alert("La computadora escogió una Spock")
		break;
	}