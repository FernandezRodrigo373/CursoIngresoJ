function mostrar()
{
	var altura;
	var alturaPromedio;
	var sexo;
	var jugadores;
	var promedioAlturas;

	//sexo=prompt("Indique sexo “f” o “m");
	altura=prompt("Indique altura (cm)");
	altura=parseInt(altura);
	
	for(altura=0;altura<250;altura++)
	{
		alturaPromedio=altura/5;
		alert("El promedio de las alturas es "+alturaPromedio);
	}	

}
