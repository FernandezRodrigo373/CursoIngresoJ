/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var primerNumero;
	var segundoNumero;
	var resultado;

	primerNumero=document.getElementById('sueldo').value;
	primerNumero=parseInt(primerNumero);
	console.log(" el numero es "+primerNumero);

	document.getElementById('resultado').value=segundoNumero;
	segundoNumero=parseInt(segundoNumero);
	

	resultado=primerNumero+primerNumero*10/100;
	console.log(" el numero es "+ resultado);
	console.log(resultado);

	//precio final=precio*21/100+precio
	//precio con descuento=precio*porcentaje de descuento/100
	//precio con descuento= precio - precio*porecentaje deccuento/100
	//precio con impuestos=precio+precio*aumento/100
	









	
}
