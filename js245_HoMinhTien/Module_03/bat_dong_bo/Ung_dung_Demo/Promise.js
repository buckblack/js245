// Khai báo và định nghĩa Promise
var testA = new Promise((Ket_qua, Loi) => {
	setTimeout(() => {
        var bien = Math.round(Math.random()*10+1);
        if(bien > 1){//resolve
			Ket_qua("đã xử lý xong A");
		}
		else{//reject
			Loi("đã xảy ra lỗi trong quá trình xử lý A");
		} 
	}, 3000)
})

console.log(testA)

// Call

testA.then(result=>{
    console.log(result)
}).catch(Err=>{
    console.log(Err)
})
