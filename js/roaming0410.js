var adat=	["20;Boss;Common;Rare;Sisak;Cult;17:00 minden nap;45", 
			"20;Boss;Common;Rare;Vállvért;Undead;17:00 minden nap;60",
			"17;Standard;Common;Rare;Keztyű;Beast;XX:00 XX:30 miden órában;20", 
			"28;Elite;Common;Rare;Keztyű;Beast;00:05 és utánna 6 óránként;45", 
			"17;Standard;Common;Rare;Mellvért;Goblin;XX:00 XX:30 minden órában;20", 
			"28;Elite;Common;Rare;Mellvért;Goblin;00:05 és utánna 6 óránként;45", 
			"17;Standard;Common;Rare;Csizma;Outlaw;XX:00 XX:30 minden órában", 
			"28;Elite;Common;Rare;Csizma;Outlaw;00:05 és utánna 6 óránként;45"];

document.getElementById("astellan").innerHTML=feltolt(8, "astellan");

for(var i=0;i<8;i++)
{
	document.getElementById(i).onclick=kitolt;
}
function kitolt()
{	record=adat[this. id].split(";");
	document.getElementById("szint").innerHTML=record[0];
	document.getElementById("tipus").innerHTML=record[1];
	document.getElementById("min").innerHTML=record[2];
	document.getElementById("max").innerHTML=record[3];
	document.getElementById("pancel").innerHTML=record[4];
	document.getElementById("fegyver").innerHTML=record[5];
	document.getElementById("ido").innerHTML=record[6];
	document.getElementById("energia").innerHTML=record[7];
	
}
function feltolt(db, mappa)
{
	s="<table class='szorny'> <tr>"
	
	for(var i=0;i<db;i++)
	{
	
		
		s+="<td id='"+i+"' class='szorny'> <img src='picks/"+mappa+"/"+i+".jpg'>";
		
		if((i+1) % 4==0 && i!=0)
		{
			s+="</tr> <tr>";
		}
	}
	s+="</tr> </table> <table><tr class='nev'><td>Szörny szintje</td><td>Szörny tipusa</td><td>Legalacsonyabb ritkaságú kapható tárgy</td><td>Legnagyobb ritkaságú kapható tárgy</td><td>Kapható páncél tipusa</td><td>Kapható fegyver hatékonysága</td><td>Megjelenés ideje</td><td>Szükséges energia</td>";
	s+="</tr> <tr class='adat'><td id='szint' ></td><td id='tipus' ></td><td id='min' ></td><td id='max'></td><td id='pancel'></td><td id='fegyver'></td><td id='ido'></td><td id='energia'></td> </tr></table>";
	return s;
}