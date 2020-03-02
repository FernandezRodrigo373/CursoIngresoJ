function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var suma;

	numeroUno=prompt("Indique primer numero");
	

	numeroDos=prompt("Indique segundo numero");
	


	if(numeroUno==numeroDos)
	{
		alert(numeroUno+numeroDos);
	}
	else
	{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);


		if(numeroUno>numeroDos)
		{
			resta=numeroUno-numeroDos;
			resta=parseInt(resta);

			alert("El resultado de la resta es "+resta);
		}
		else
		{
			suma=numeroUno+numeroDos;
			suma=parseInt(suma);

			alert("El resultado de la suma es "+suma);
		}

		if(resta>10)
		{
			resta=numeroUno-numeroDos;
			resta=parseInt(resta);

			alert("la resta es "+resta+" y supero el 10");
		}
	}	

}
