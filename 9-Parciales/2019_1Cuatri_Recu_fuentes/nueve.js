function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var notaFinal;
	var respuesta;
	var cantidadVaronesAprobados;
	var contador;
	var cantidadDeMenores;
	var cantidadDeAdolescentes;
	var cantidadDeMayores;
	var notaMenores;
	var notaAdolescentes;
	var notaMayores;
	var promedioNotasMenores;
	var promedioNotasMayores;
	var promedioNotasAdolescentes;
	var acumuladorFemenino;
	var acumuladorMasculino;
	var promedioNotaMasculino;
	var promedioNotaFemenino;
	var contadorFemenino;
	var contadorMasculino;



	respuesta="si";

	while (respuesta=="si")
	{
		do
		{
			nombre=prompt("ingrese nombre");
		}
		while(!isNaN(nombre));

		do
		{
			edad=prompt("ingrese edad");
		}
		while(isNaN(edad) || edad>99 && edad<1);

		do
		{
			sexo=prompt("Indique sexo f o m")
		}
		while(!isNaN(sexo) || sexo!="f" && sexo!="m");

		do
		{
			notaFinal=prompt("Indique nota final");
		}
		while(isNaN(notaFinal) || notaFinal<1 || notaFinal>10);

		switch(sexo)
		{
			case "f":
				acumuladorFemenino=acumuladorFemenino+notaFinal;
				break;
			default:
				acumuladorMasculino=acumuladorMasculino+nota;
				break;	

		}

		if(sexo=="m" && notaFinal>5)
		{	
			cantidadVaronesAprobados++;
		}

		switch(notaFinal)
		{
			switch(edad)
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				case 10:
				case 11:
				case 12:
					cantidadDeMenores++;
					notaMenores=notaFinal+notaMenores;
					break;
				case 13:
				case 14:
				case 15:
				case 16:
				case 17:
					cantidadDeAdolescentes++;
					notaAdolescentes=notaAdolescentes+notaFinal;
					break;
				default:
					cantidadDeMayores++;
					notaMayores=notaMayores+notaFinal;	
		}

		respuesta=prompt("desea continuar");
	}

	promedioNotasMenores=notaMenores/cantidadDeMenores;
	promedioNotasAdolescentes=notaAdolescentes/cantidadDeAdolescentes;
	promedioNotasMayores=notaMayores/cantidadDeMayores;
	promedioNotaFemenino=acumuladorFemenino/contadorFemenino;
	promedioNotaMasculino=acumuladorMasculino/contadorMasculino;

	document.write("<br> cantidad de varones aprobados: "+cantidadVaronesAprobados);
	document.write("<br> el promedio de nota de los menores: "+promedioNotasMenores);
	document.write("<br> el promedio de nota de los adolescentes "+promedioNotasAdolescentes);	
	document.write("<br> el promedio de nota de los mayores "+promedioNotasMayores);
	document.write("<br> el promedio de nota de los hombres "+promedioNotaMasculino);
	document.write("<br> el promedio de nota de las mujeres "+promedioNotaFemenino);			
}
