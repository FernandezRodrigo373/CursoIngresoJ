/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares ()
{
	var contadorPares;
	var ingresado;
	var bandera;

	bandera=0;

	ingresado=document.getElementById('numero').value;
	ingresado=parseInt(ingresado);

	for(contadorPares=0;contadorPares<ingresado;contadorPares++)
	{
		bandera = contadorPares%2;
		bandera = parseInt(bandera);

		if(bandera==0)
		{
			console.info("numero pares : " + contadorPares);
		}				
	}
}

function NumerosImpares()
{	
	var contadorPares;
	var ingresado;
	var bandera;

	bandera=0;

	ingresado=document.getElementById('numero').value;
	ingresado=parseInt(ingresado);

	for(contadorPares=0;contadorPares<ingresado;contadorPares++)
	{
		bandera = contadorPares%2;
		bandera = parseInt(bandera);

		if(bandera!=0)
		{
			console.info("numero impares : " + contadorPares);
		}				
	}
}
function NumerosDivisibles()
{	
	var contadorDivisibles;
	var ingresado;
	var bandera;

	bandera=0;

	ingresado=document.getElementById('numero').value;
	ingresado=parseInt(ingresado);

	for(contadorDivisibles=0;contadorDivisibles<ingresado;contadorDivisibles++)
	{
		bandera = ingresado%contadorDivisibles;
		bandera = parseInt(bandera);

		if(bandera==0)
		{
			console.info("numero pares : " + contadorDivisibles);
		}				
	}
}
function VerificarPrimo()
{
	var i;
	var ingresado;
	var bandera;

	bandera=0;

	ingresado=document.getElementById('numero').value;
	ingresado=parseInt(ingresado);

	for(i=2;i<ingresado;i++)
	{	
		if(ingresado%i==0)
		{
			bandera=1;
		}
	}
	
	if(bandera==0)
	{
		console.info("El numero " + ingresado + " es primo");
	}
	else
	{
		console.info("El numero " + ingresado + " no es primo");
	}		
}
function NumerosPrimos()
{
	var contadorPrimos;
	var ingresado;
	var bandera;

	bandera=0;

	ingresado=document.getElementById('numero').value;
	ingresado=parseInt(ingresado);

	for(contadorPrimos=0;contadorPrimos<ingresado;contadorPrimos++)
	{
		bandera = ingresado%contadorPrimos;
		bandera = parseInt(bandera);

		if(bandera==0)
		{
			console.info("numero primos : " + contadorPrimos);
		}				
	}


}

