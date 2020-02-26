function mostrar()
{
	var ingresado;
	var i;
	var bandera;
	bandera=0;

	ingresado=prompt("Ingresar numero");
	ingresado=parseInt(ingresado);

	for(i=2;i<ingresado;i++)
	{	
		console.log(i);

		if(ingresado%i==0)
		{
			bandera=1;
		}
	}
	
	if(bandera==0)
	{
		alert("Es primo");
	}	
}//FIN DE LA FUNCIÓN