// JavaScript Document
function thongBao(msg)
{
	alert(msg);
}
function onLoad()
{
	window.document.body.style.fontFamily="Verdana, Geneva, sans-serif";
	window.document.body.style.fontSize="12px";
	window.document.body.style.color="red"
}

function Bang_cuu_chuong(so)
{
	var str="";
	for(i=1;i<=10;i++)
	{
		var tich=i*so;
		//str+=so +"*"+ i +"="+ tich +"<br>";
		str+=`${so} * ${i} = ${tich} <br> `
	}
	return str;	
}

function Tim_so_lon(a,b){
	return a>b?a:b
}