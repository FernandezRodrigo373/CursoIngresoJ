function mostrar()
{

	var contador=0;
	var acumulador=0;
	var ingresado;

	while(isNaN(ingresado) || contador<5)
	{
		ingresado=prompt("ingrese numero");
		ingresado=parseInt(ingresado);		

		contador=contador+1;
		acumulador=acumulador+ingresado;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
}//FIN DE LA FUNCIÓN
