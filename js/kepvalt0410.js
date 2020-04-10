var kep=document.getElementById("valtakozo");
var kepek=["picks/minion1.jpg" , "picks/minion2.jpg" , "picks/minion3.jpg" ];
var valtokep=setInterval(kepvalt, 3500);
var i=1;
function kepvalt()
{
	
	if(i<kepek.length)
	{
		kep.src=kepek[i];i++;
	}	
	else
	{
		i=0;
	}
}