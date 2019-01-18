
var testA = new Promise((Ket_qua, Loi) => {
	var bien = Math.round(Math.random()*10+1);
	Ket_qua(bien)
})

async function getTestA(){
	var a= await testA
	return a;
}

var kq=getTestA()
kq.then(Ket_qua=>{
	console.log(Ket_qua)
})







