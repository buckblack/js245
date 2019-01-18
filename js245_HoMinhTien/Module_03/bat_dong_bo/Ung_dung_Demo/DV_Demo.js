var http = require("http");
var port = 3000;
var DV_Demo = http.createServer((Yeu_cau, Dap_ung) => {
    var Chuoi_Nhan = ""
    var Chuoi_Ket_qua = ""
    Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
    Yeu_cau.on('end', () => {
        if (Yeu_cau.url == "/NO-PROMISE") {
            Chuoi_Ket_qua = Chuoi_Nhan += " PROMISE"
        } else if (Yeu_cau.url == "/ASYN-AWAIT-1") {
            Chuoi_Ket_qua="ASYN-AWAIT-1"
        } else if (Yeu_cau.url == "/ASYN-AWAIT") {
            Chuoi_Ket_qua="ASYN-AWAIT"
        }


        Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
        Dap_ung.end(Chuoi_Ket_qua);
    })

}).listen(port)