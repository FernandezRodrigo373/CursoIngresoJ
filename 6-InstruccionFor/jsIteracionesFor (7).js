function mostrar()
{
	var ingresado;
	var divisores;
	var bandera;

	ingresado=prompt("ingrese numero");
	ingresado=parseInt(ingresado);

	for(divisores=0;divisores<ingresado;divisores++)
	{
		bandera=ingresado%divisores;
		bandera=parseInt(bandera);

		if(bandera==0)
		{
			console.info("numeros divisores : " + divisores);
		}				
	}

	
	
}//FIN DE LA FUNCIÓN