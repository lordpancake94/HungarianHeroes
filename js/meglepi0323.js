var meglepi=document.getElementById("meglepi");
meglepi.onmouseover=valt;
meglepi.onmouseout=valt;
function valt()
{
	if(meglepi.getAttribute("src")!="picks/Inkvizicio.jpg")
	{
		this.src="picks/Inkvizicio.jpg";
	}
	else
	{
		this.src="picks/kocsma.png";
	}
}
