/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	perimetro=2*largo+2*ancho;
	perimetro=parseInt(perimetro);


	alambre=perimetro*3;

	alert("la cantidad de alambre es "+alambre);


}
function Circulo () 
{
	var radio;
	var perimetro;
	var alambre;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	perimetro=radio*2*3,14;
	perimetro=parseInt(perimetro);

	//perseint redondea el numero

	alambre=perimetro*3;

	alert(alambre);


}
function Materiales () 
{
	//1m x 1m=2cemento y 3cal
	var largo;
	var ancho;
	var cemento;
	var cal;
	var area;


	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);

	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);

	area=largo*ancho;

	cemento=area*2;
	cemento=parseInt(cemento);

	alert(cemento);

	cal=area*3;
	cal=parseInt(cal);

	alert(cal);














	
}