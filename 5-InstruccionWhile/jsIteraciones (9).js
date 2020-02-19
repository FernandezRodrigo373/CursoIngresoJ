function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var respuesta='si';


	while(respuesta!='no')
	{
		contador=contador+1
		ingresado=prompt("ingrese numero");
		ingresado=parseInt(ingresado);

		if(contador==1)
		{
			maximo=ingresado;
			minimo=ingresado;
		}
		else
		{
			if(ingresado>maximo)
			{
				maximo=ingresado;
			}
			if(ingresado<minimo)
			{
				minimo=ingresado;
			}
		}

		respuesta=prompt("ingrese no para salir");

		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;
	}
}//FIN DE LA FUNCIÓN