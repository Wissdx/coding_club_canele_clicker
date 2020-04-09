var nombrecanele = 0;
	function cuisiner()
	{
		nombrecanele +=1;
		document.getElementById("numberCaneles").innerHTML(nombrecanele);
		if (nombrecanele == 25)
			alert("Tu as atteint 25 canelés !");
	}
