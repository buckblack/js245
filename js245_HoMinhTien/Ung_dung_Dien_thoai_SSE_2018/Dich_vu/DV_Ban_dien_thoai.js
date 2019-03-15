var http = require("http");
var port = 3000;
var File = require("fs");
var Xu_ly_Tham_so = require('querystring');
var Noi_dung_SSE
var Su_kien_SSE=`message`
var DV_Ban_dien_thoai = http.createServer(
    (Yeu_cau, Dap_ung) => {
        var Chuoi_Nhan = ""
        var Chuoi_Kq = ""
        var Dia_chi = Yeu_cau
            .url
            .replace("/", "").replace("?", "")
        var Tham_so = Xu_ly_Tham_so.parse(Dia_chi)
        var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
        
        Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
        Yeu_cau.on('end', () => {
            if (Ma_so_Xu_ly == "GHI") {
                var Dien_thoai=JSON.parse(Chuoi_Nhan)
                Noi_dung_SSE =Dien_thoai
                Su_kien_SSE=`Nhan_vien_Giao_hang` 
                var Kq = true
                if (Kq) {
                    Chuoi_Kq = JSON.stringify(Dien_thoai)
                    Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                    Dap_ung.end(Chuoi_Kq);
                }

            } else if (Ma_so_Xu_ly == "SSE") {
                Chuoi_Kq = Server_Send_Event(Dap_ung, Noi_dung_SSE,Su_kien_SSE)
                Su_kien_SSE=`message`
                Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
                Dap_ung.end(Chuoi_Kq);
            }
        })

    })

DV_Ban_dien_thoai.listen(port,
    console.log(`Dịch vụ thực thi:http://localhost:${port}/`)
);

function Server_Send_Event(Dap_ung, Noi_dung_SSE,Su_kien) {
    Dap_ung.setHeader('Connection', 'keep-alive');
    Dap_ung.setHeader("Cache-Control", "no-cache");
    Dap_ung.setHeader("Content-Type", "text/event-stream");
    var event = `event: ${Su_kien}`;
    var id = `id: ${Date.now()}`;

    if (typeof Noi_dung_SSE == "object") {
        var data = {
            Ma_so: `${Noi_dung_SSE.Ma_so}`,
            So_luong: `${Noi_dung_SSE.So_luong_Mua}`,
            Thoi_gian:Lay_Ngay_Gio_Hien_hanh()
        }
    } else {
        var data = {
            Thong_bao: `Hiện tại Cửa hàng chưa có khách hàng đặt mua`
        }
    }
    data = "data: " + JSON.stringify(data)
    Chuoi_noi_dung = `${event}\n${id}\n${data}\n\n`
    return Chuoi_noi_dung
}

function Lay_Ngay_Gio_Hien_hanh() {
    var date = new Date(),
      year = date.getFullYear(),
      month = (date.getMonth() + 1).toString(),
      formatedMonth = (month.length === 1) ? ("0" + month) : month,
      day = date.getDate().toString(),
      formatedDay = (day.length === 1) ? ("0" + day) : day,
      hour = date.getHours().toString(),
      formatedHour = (hour.length === 1) ? ("0" + hour) : hour,
      minute = date.getMinutes().toString(),
      formatedMinute = (minute.length === 1) ? ("0" + minute) : minute,
      second = date.getSeconds().toString(),
      formatedSecond = (second.length === 1) ? ("0" + second) : second;
    return formatedDay + "-" + formatedMonth + "-" + year + " " + formatedHour + ':' + formatedMinute + ':' + formatedSecond;
  };
