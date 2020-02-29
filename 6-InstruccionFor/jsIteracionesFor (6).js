function mostrar()
{
	var ingresado;
	var contadorPares;
	var bandera;

	ingresado=prompt("ingrese numero");
	ingresado=parseInt(ingresado);

	for(contadorPares=0;contadorPares<ingresado;contadorPares++)
	{
		bandera = contadorPares%2;

		if(bandera==0)
		{
			console.info("numero pares : " + contadorPares);
		}				
	}
}//FIN DE LA FUNCIÓN