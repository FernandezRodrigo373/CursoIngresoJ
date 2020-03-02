function mostrar()
{
	var nombreUno;
	var nombreDos;
	var pesoUno;
	var pesoDos
	var pesoTotal;
	var pesoPromedio;

	nombreUno=prompt("Indique primer nombre");
	nombreDos=prompt("Indique segundo nombre");

	pesoUno=prompt("Indique peso (kg) de "+nombreUno);
	pesoUno=parseInt(pesoUno);
	pesoDos=prompt("Indique peso (kg) de "+nombreDos);
	pesoDos=parseInt(pesoDos);

	pesoTotal=pesoUno+pesoDos;
	pesoPromedio=(pesoUno+pesoDos)/2;

	alert("Ustedes se llaman "+ nombreUno +" y "+ nombreDos+ " pesan " + pesoUno + " y " + pesoDos + " kilos, que sumados son "+pesoTotal+" kilos y el promedio de peso "+pesoPromedio);
  
}
