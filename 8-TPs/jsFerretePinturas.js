/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var temperaturaFinal;

	temperatura=document.getElementById('Temperatura').value;
	temperatura=parseInt(temperatura);

	temperaturaFinal=(temperatura - 32) * 5/9;
	temperaturaFinal=parseInt(temperaturaFinal);

	alert(temperatura+" Fahrenheit son "+temperaturaFinal+" centígrados ");



	
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var temperaturaFinal;

	temperatura=document.getElementById('Temperatura').value;
	temperatura=parseInt(temperatura);

	temperaturaFinal=(temperatura * 9/5) + 32;
	temperaturaFinal=parseInt(temperaturaFinal);

	alert(temperatura+" centigrados son "+temperaturaFinal+" Fahrenheit ");


	
}
