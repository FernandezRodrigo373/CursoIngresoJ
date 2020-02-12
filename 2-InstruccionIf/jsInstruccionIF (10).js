function mostrar()
{
	var nota;
	nota=Math.floor(Math.random() * 10) + 1;
	nota=parseInt(nota);
	console.log(nota);

	if(nota>8)
	{
		alert("EXCELENTE" );
	}	
	else
	{
		if(nota>4)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("Vamos, la proxima se puede")
		}
	{	
}//FIN DE LA FUNCIÓN