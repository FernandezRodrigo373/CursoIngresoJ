function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;
	var acumulador;
	var ingresado;

	respuesta ='si';
	contador=0;
	positivo=0;
	negativo=1;
	

	while(respuesta == 'si')
	{
		ingresado = prompt("ingrese numero");
		ingresado = parseInt(ingresado);

		contador = contador +1; 
		contador = parseInt(contador);

		acumulador = acumulador + ingresado;
		acumulador = parseInt(acumulador);


		if(ingresado>0)
		{			
			positivo=positivo+ingresado;		
		}
		else
		{
			negativo=negativo*ingresado;	
		}
		
		respuesta=prompt("desea continuar ponga 'si' de lo contrario sale");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN