var vector=document.getElementById("gota");
gota.onclick=function(){mostrar(true)};
var x=document.getElementsByClassName("X")[0];
x.onclick=function(){mostrar(false)};

function mostrar(op)
	{
		var modal=document.getElementsByClassName("modal")[0];
		if(op==true)
			{
				modal.className="modal visible";		
			}
		else
			{
				modal.className="modal";		
			}
	}

var bot1=document.getElementsByClassName("sig");
var bot2=document.getElementsByClassName("ant");
for(i=0;i<bot1.length;i++)
	{
		bot1[i].onclick=function(){accion("sig")};
	}
for(i=0;i<bot2.length;i++)
	{
		bot2[i].onclick=function(){accion("ant")};
	}
var index=0;

function accion(acc)
	{
		var info=document.getElementsByClassName("info");
		info[index].className="info oculto";
		if(acc=="sig")
			{
				index++;
			}
		else
			{
				index--;
			}
		info[index].className="info";
	}