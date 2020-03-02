
function mostrar()
{
	var lado;
	var perimetro;

	lado=prompt("Indique tamaño de un lado (cm)");
	lado=parseInt(lado);
	
	perimetro=lado*3;

	alert("El perimetro del triangulo equilatero es "+ perimetro+" (cm) ");

}
