var http = require("http");
var port = 3000;
var File = require("fs");
var Xu_ly_Tham_so = require('querystring');
var DV_Ban_dien_thoai = http.createServer(
    (Yeu_cau, Dap_ung) => {
        var Chuoi_Nhan = ""
        var Chuoi_Kq = ""
        var Dia_chi = Yeu_cau
            .url
            .replace("/", "")
        var Tham_so = Xu_ly_Tham_so.parse(Dia_chi)
        var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
        Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
        Yeu_cau.on('end', () => {
            if (Ma_so_Xu_ly == "SSE") {
                Dap_ung.setHeader('Connection', 'keep-alive');
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.setHeader("Cache-Control", "no-cache");
                Dap_ung.setHeader("Content-Type", "text/event-stream");
                
                
                
                let event = "event: ping";
                let id = `id: ${Date.now()}`;
                let du_lieu = {
                    message: `hello @${new Date().toString()}`
                }

                let data = "data: " + JSON.stringify(du_lieu);
                Chuoi_Kq = `${event}\n${id}\n${data}\n\n`
                //Chuoi_Kq = `retry:10000\n${id}\n${data}\n\n`
                
                //Chuoi_Kq = `${id}\n${data}\n\n`
                Dap_ung.end(Chuoi_Kq);
            }
        })

    })

DV_Ban_dien_thoai.listen(port,
    console.log(`Dịch vụ thực thi:http://localhost:${port}/`)
);
