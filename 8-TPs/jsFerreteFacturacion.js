/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var sumaFinal;

	productoUno=document.getElementById('PrecioUno').value;
	productoUno=parseInt(productoUno);

	productoDos=document.getElementById('PrecioDos').value;
	productoDos=parseInt(productoDos);
	

	productoTres=document.getElementById('PrecioTres').value;
	productoTres=parseInt(productoTres);
	

	sumaFinal=productoUno+productoDos+productoTres;
	

	sumaFinal=parseInt(sumaFinal);


	alert(" El precio final es "+sumaFinal);


	
}
function Promedio () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var sumaFinal;
	var promedio;

	productoUno=document.getElementById('PrecioUno').value;
	productoUno=parseInt(productoUno);

	productoDos=document.getElementById('PrecioDos').value;
	productoDos=parseInt(productoDos);
	

	productoTres=document.getElementById('PrecioTres').value;
	productoTres=parseInt(productoTres);
	

	sumaFinal=productoUno+productoDos+productoTres;	
	sumaFinal=parseInt(sumaFinal);

	promedio=sumaFinal/3;

	alert(" El promedio de los precios es "+promedio);

	
}
function PrecioFinal () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var sumaFinal;
	var precioFinalConIva;

	productoUno=document.getElementById('PrecioUno').value;
	productoUno=parseInt(productoUno);

	productoDos=document.getElementById('PrecioDos').value;
	productoDos=parseInt(productoDos);
	

	productoTres=document.getElementById('PrecioTres').value;
	productoTres=parseInt(productoTres);
	

	sumaFinal=productoUno+productoDos+productoTres;
	sumaFinal=parseInt(sumaFinal);

	precioFinalConIva=sumaFinal+sumaFinal*21/100;
	precioFinalConIva=parseInt(precioFinalConIva);

	alert(precioFinalConIva);



	
}