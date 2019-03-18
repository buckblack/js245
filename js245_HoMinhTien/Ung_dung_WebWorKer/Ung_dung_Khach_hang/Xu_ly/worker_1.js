self.addEventListener('message', function (e) {
    var data = e.data
    var d = new Date()

    //var noi_dung = "Điện thoại của bạn " + data.Ma_so + "Tên " + data.Ten + " còn hàng (" + d.toLocaleString() + ")"
    //self.postMessage(noi_dung)
    
    setInterval(()=>{
        var d = new Date()
        self.postMessage(d.toLocaleString())
    },1000)
    
    

}, false)