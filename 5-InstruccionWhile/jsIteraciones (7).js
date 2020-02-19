function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var ingresado;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=='si')
	{
		ingresado=prompt("ingrese numero");
		ingresado=parseInt(ingresado);

		acumulador=acumulador+ingresado;
		contador=contador+1;
		

		respuesta=prompt("desea continuar ponga 'si' de lo contrario sale");
	}


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN