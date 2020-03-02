function mostrar()
{
	var precio;
	var descuento;
	var precioFinalDescuento;

	precio=prompt("Indique el precio");
	precio=parseInt(precio);

	descuento=prompt("Indique % de descuento");
	descuento=parseInt(descuento);

	precioFinalDescuento=precio-precio*descuento/100;

	document.getElementById('elPrecioFinal').value=precioFinalDescuento;


}
