/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var resultado;
	

	primerNumero=document.getElementById('numeroUno').value;
	primerNumero=parseInt(primerNumero);
	console.log("el numero es : "+primerNumero);
	segundoNumero=document.getElementById('numeroDos').value;
	segundoNumero=parseInt(segundoNumero);
	console.log("el numero es : "+segundoNumero);

	resultado=primerNumero+segundoNumero;
	console.log(resultado);

	 //primer linea de codigo pongo brekpoint 
	 //+-*/ F11




	
}

function restar()
{
	
}

function multiplicar()
{ 
	
}

function dividir()
{
	
}

