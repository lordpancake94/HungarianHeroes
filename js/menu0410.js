function menugomb(felirat, hivatkozas)
{
	this.felirat=felirat;
	this.hivatkozas=hivatkozas;
}
var menugombok=[new menugomb("<img src='picks/Logo.png'>", "udv.html"), new menugomb("Minionok","minion.html"), new menugomb("Roaming","roaming.html") ];
var db=menugombok.length;
document.getElementById("fomenu").innerHTML=tabla(db);
var menusor=new Array(db);
for(var i=0;i<db;i++)
{
	menusor[i]=document.getElementById(i);
	menusor[i].innerHTML=menugombok[i].felirat;
	menusor[i].onclick=megnyit;
	menusor[i].onmouseover=valt;
	menusor[i].onmouseout=valt;
}
 menusor[0].style.width='30px'
function tabla(cellaszam)
{
	s="<table> <tr>";
	for(var i=0;i<cellaszam;i++)
	{
		s+='<td id="'+i+'"></td>';
	}
	s+="</tr> </table>";
	return s;
	
}
function megnyit()
{
	window.open(menugombok[this.id].hivatkozas, "oldal" );
}

function valt()
{
 	this.style.cursor="pointer";
	if(this.style.backgroundColor!="slateblue")
	{
		this.style.backgroundColor="slateblue";
	}
	else
	{
		this.style.backgroundColor="rebeccapurple";
	}

}