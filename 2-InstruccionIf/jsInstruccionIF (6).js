function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert(" es mayor de edad ");
	}
	else
	{
		if(edad<13)
	
		{
			alert(" es menor ");
		}
		else
		{
			alert(" es adolescente ");
		}
	}
		

	
	}//FIN DE LA FUNCIÓN