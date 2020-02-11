function mostrar()
{
	var precio;
	var porcentajeDeDescuento;
	var precioFinal;

	precio=prompt(" Indique el precio ");
	porcentajeDeDescuento=prompt(" indique porcentaje de descuento ");

	
	precioFinal=precio-precio*porcentajeDeDescuento/100;

	document.getElementById('elPrecioFinal').value=precioFinal;



}
