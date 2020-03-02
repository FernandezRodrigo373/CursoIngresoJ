function mostrar()
{
	var continente;
	var dias;
	var precio;
	var descuento;
	var aumento;
	var medioDePago;
	var precioFinal;
	var precioFinalDescuento;
	var precioFinalAumento;

	continente=document.getElementById('Marca').value;

	dias=prompt("indique cantidad de dias ");
	dias=parseInt(dias);

	medioDePago=prompt("Indique medio de pago");

	precio=dias*100;

	switch(continente)
	{
		case "America":
			descuento=50;

			switch(medioDePago)
			{
				case "Debito":
					descuento=10;
					
				default:
					descuento=0;
					break;
			}
		case "Africa":
			descuento=60;

			switch(medioDePago)
			{
				case "Mercado pago":
				case "Efectivo":
					descuento=15;
					break;
				default:
					descuento=0;
					break;	
			}
		case "Asia":	
		case "Oceania":
			aumento=20;
			break;
		case "Europa":
			descuento=20;
			switch(medioDePago)
			{
				case "Debito":
					descuento=15;
					break;
				case "Mercado pago":
					descuento=10;
				default:
					descuento=5;
					break;
			}			
	}


	precioFinalDescuento=precio-precio*descuento/100;
	precioFinalAumento=precio+precio*aumento/100;


	console.info("El precio final con descuento es "+precioFinalDescuento);
	console.info("El precio final con aumento es "+precioFinalAumento);

}
